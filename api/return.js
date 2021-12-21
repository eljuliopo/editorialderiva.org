const FlowApi = require("flowcl-node-api-client")

const flowClient = new FlowApi({
  apiKey: process.env.FLOW_API_KEY,
  secretKey: process.env.FLOW_SECRET_KEY,
  apiURL: process.env.FLOW_API_URL,
})

module.exports = async (req, res) => {
  try {
    const { token } = req.body
    const payment = await flowClient.send("payment/getStatus", { token }, "GET")
    const isPaid = payment.status === 2
    res.status(301)
    res.setHeader("Location", isPaid ? "/yay" : "/boo")
    res.end()
  } catch (err) {
    res.status(500)
    res.json({ error: err.toString() })
  }
}
