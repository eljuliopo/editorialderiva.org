import { WebpayPlus } from "transbank-sdk"

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY)
} else {
  WebpayPlus.configureForTesting()
}

export default async function handler(req, res) {
  const { token } = req.body
  if (token) {
    try {
      const statusResponse = await new WebpayPlus.Transaction().status(token)
      res.json({ token, ...statusResponse })
    } catch (err) {
      res.json({ error: "Invalid token." })
    }
  }
}
