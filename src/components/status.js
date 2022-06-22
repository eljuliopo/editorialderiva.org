/** @jsx jsx */
import React from "react"
import { jsx, Box, Label, Input, Button, Themed } from "theme-ui"

export default function Status(props) {
  const urlSearchParams = new URLSearchParams(props.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const [token, setToken] = React.useState(params.token || "")
  const [statusResponse, setStatusResponse] = React.useState()
  const handleSubmit = async e => {
    e?.preventDefault()
    try {
      let response = await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      })
      const json = await response.json()
      if (json) {
        setStatusResponse(json)
      }
    } catch (error) {
      console.error(error)
    }
  }
  React.useEffect(() => (token !== "" ? handleSubmit() : null), [])
  return (
    <React.Fragment>
      {statusResponse?.response_code === 0 && statusResponse?.status === "AUTHORIZED" ? <Themed.p>🥳 Tu orden ha sido procesada de manera exitosa.</Themed.p> : null}
      <Box as="form" sx={{ variant: "forms.primary" }} onSubmit={handleSubmit}>
        <Label htmlFor="order">Orden n°:</Label>
        <Input type="text" name="order" id="order" value={token} onChange={e => setToken(e.target.value)} required />
        <Button type="submit">Consultar</Button>
      </Box>
    </React.Fragment>
  )
}
