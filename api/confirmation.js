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
    console.log(payment) // do whatever you want.
    res.json({ status: "OK" })
  } catch (err) {
    res.status(500)
    res.json({ error: err.toString() })
  }
}
