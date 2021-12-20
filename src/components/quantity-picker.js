/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"

import { useCart } from "../store"

const pickerButtonsStyles = {
  width: 20,
  height: 18,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 0,
  border: "none",
  borderRadius: 0,
}

export default function QtyPicker({ item, ...props }) {
  const { increment, decrement } = useCart()
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      {...props}
    >
      <Themed.p
        sx={{
          m: 0,
          textAlign: "center",
          width: 40,
          height: 35,
          borderBottom: ({ colors }) => `solid 1px ${colors.primary}`,
          borderTop: ({ colors }) => `solid 1px ${colors.primary}`,
          borderLeft: ({ colors }) => `solid 1px ${colors.primary}`,
          fontSize: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {item.quantity}
      </Themed.p>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 35,
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            ...pickerButtonsStyles,
            borderBottom: ({ colors }) => `solid 0.5px ${colors.background}`,
          }}
          onClick={() => increment(item)}
        >
          {"+"}
        </Button>
        <Button
          sx={{
            ...pickerButtonsStyles,
          }}
          onClick={() => decrement(item)}
        >
          {"-"}
        </Button>
      </div>
    </div>
  )
}
