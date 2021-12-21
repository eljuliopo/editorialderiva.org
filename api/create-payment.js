const FlowApi = require("flowcl-node-api-client")
const contentful = require("contentful")
const { v4: uuidv4 } = require("uuid")

const flowClient = new FlowApi({
  apiKey: process.env.FLOW_API_KEY,
  secretKey: process.env.FLOW_SECRET_KEY,
  apiURL: process.env.FLOW_API_URL,
})

async function validateCart(cart) {
  const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  const contentful_ids = cart.map(item => item.contentful_id)
  const { items: inventory } = await contentfulClient.getEntries({
    content_type: "book",
    "sys.id[in]": contentful_ids.join(","),
  })
  const validated = cart.map(item => {
    const check = inventory.find(({ sys }) => sys.id === item.contentful_id)
    item.price = check.fields.price
    return item
  })
  return validated
}

function sumTotal(cart) {
  return cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
}

module.exports = async (req, res) => {
  try {
    const { email, cart } = req.body
    const items = await validateCart(cart)
    const amount = sumTotal(items)
    const commerceOrder = uuidv4() // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
    const payment = await flowClient.send(
      "payment/create",
      {
        commerceOrder,
        currency: "CLP",
        paymentMethod: 9,
        urlConfirmation: `${process.env.BASE_URL}/api/confirmation`,
        urlReturn: `${process.env.BASE_URL}/estado?orden=${commerceOrder}`,
        email,
        amount,
        subject: items
          .map(({ title, quantity }) => quantity + " " + title)
          .join(", "),
      },
      "POST"
    )
    res.json({ redirect: payment.url + "?token=" + payment.token })
  } catch (err) {
    res.status(500)
    res.json({ error: err.toString() })
  }
}
