/** @jsx jsx */
import React from "react"
import { jsx, Box, Label, Input, Button } from "theme-ui"

export default function Status(props) {
  const urlSearchParams = new URLSearchParams(props.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const [order, setOrder] = React.useState(params.orden || "")
  const handleSubmit = e => {
    e?.preventDefault()
    console.log(order)
  }
  React.useEffect(() => handleSubmit())
  return (
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
  )
}
