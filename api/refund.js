import { WebpayPlus } from "transbank-sdk"

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY)
} else {
  WebpayPlus.configureForTesting()
}

module.exports = async (req, res) => {
  let { token, amount } = req.query

  const refundResponse = await new WebpayPlus.Transaction().refund(token, amount)

  console.log({ token, amount, refundResponse })
  res.json({ token, amount, refundResponse })
}
