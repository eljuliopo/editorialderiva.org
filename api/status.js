const FlowApi = require("flowcl-node-api-client")

const flowClient = new FlowApi({
  apiKey: process.env.FLOW_API_KEY,
  secretKey: process.env.FLOW_SECRET_KEY,
  apiURL: process.env.FLOW_API_URL,
})

module.exports = async (req, res) => {
  try {
    const { order } = req.body
    const payment = await flowClient.send(
      "payment/getStatusByFlowOrder",
      { flowOrder: order },
      "GET"
    )
    res.json({ ...payment })
  } catch (err) {
    res.status(500)
    res.json({ error: err.toString() })
  }
}
