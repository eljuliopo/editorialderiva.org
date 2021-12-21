/** @jsx jsx */
import React from "react"
import { jsx, Box, Label, Input, Button } from "theme-ui"

export default function Status(props) {
  const urlSearchParams = new URLSearchParams(props.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const [order, setOrder] = React.useState(params.orden || "")
  const [orderData, setOrderData] = React.useState({})
  const handleSubmit = async e => {
    e?.preventDefault()
    try {
      let response = await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order }),
      })
      const data = await response.json()
      if (data) {
        setOrderData(data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  React.useEffect(() => handleSubmit())
  return (
    <React.Fragment>
      <pre>{JSON.stringify(orderData, null, 2)}</pre>
      <Box
        as="form"
        sx={{
          variant: "forms.primary",
          position: "relative",
        }}
        onSubmit={handleSubmit}
      >
        <Label htmlFor="order">Orden n°:</Label>
        <Input
          type="text"
          name="order"
          id="order"
          value={order}
          onChange={e => setOrder(e.target.value)}
          required
        />
        <Button>Consultar</Button>
      </Box>
    </React.Fragment>
  )
}
