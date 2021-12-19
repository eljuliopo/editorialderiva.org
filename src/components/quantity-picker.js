/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"

import { useCart } from "../store"

const pickerButtonsStyles = {
  width: 20,
  height: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 0,
  border: ({ colors }) => `solid 1px ${colors.primary}`,
  borderRadius: 0,
}

export default function QtyPicker({ item, ...props }) {
  const { increment, decrement } = useCart()
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        border: ({ colors }) => `solid 1px ${colors.primary}`,
      }}
      {...props}
    >
      <Themed.p
        sx={{
          m: 0,
          textAlign: "center",
          width: 40,
        }}
      >
        {item.quantity}
      </Themed.p>
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={{
            ...pickerButtonsStyles,
            border: ({ colors }) => `solid 0.5px ${colors.background}`,
          }}
          onClick={() => increment(item)}
        >
          {"+"}
        </Button>
        <Button
          sx={{
            ...pickerButtonsStyles,
            border: ({ colors }) => `solid 0.5px ${colors.background}`,
          }}
          onClick={() => decrement(item)}
        >
          {"-"}
        </Button>
      </div>
    </div>
  )
}
