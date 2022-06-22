const contentful = require("contentful")
const { WebpayPlus } = require("transbank-sdk")

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY)
} else {
  WebpayPlus.configureForTesting()
}

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
    const items = await validateCart(req.body.cart)
    const buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1
    const sessionId = "S-" + Math.floor(Math.random() * 10000) + 1
    const amount = sumTotal(items)
    const returnUrl = `${process.env.BASE_URL}/api/confirmation`

    const createResponse = await new WebpayPlus.Transaction().create(buyOrder, sessionId, amount, returnUrl)

    let token = createResponse.token
    let url = createResponse.url

    res.json({ redirect: url + "?token_ws=" + token })
  } catch (err) {
    res.status(500)
    res.json({ error: err.toString() })
  }
}
