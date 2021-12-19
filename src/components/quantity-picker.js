/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"

import { useCart } from "../store"

export default function QtyPicker({ item, ...props }) {
  const { increment, decrement } = useCart()
  return (
    <div sx={{ display: "flex", alignItems: "center" }} {...props}>
      <Button
        sx={{
          width: 32,
          height: 32,
          borderRadius: 360,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => decrement(item)}
      >
        {"-"}
      </Button>
      <Themed.p sx={{ m: 0, textAlign: "center", width: 40 }}>
        {item.quantity}
      </Themed.p>
      <Button
        sx={{
          width: 32,
          height: 32,
          borderRadius: 360,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => increment(item)}
      >
        {"+"}
      </Button>
    </div>
  )
}
