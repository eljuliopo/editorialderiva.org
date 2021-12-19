/** @jsx jsx */
import { jsx, Themed, Box, Card } from "theme-ui"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// import { parseAuthors } from "../utils"
// import QuantityPicker from "./quantity-picker"

import { useCart } from "../../store"

export function CartItem({ item }) {
  const { removeFromCart /* increment, decrement */ } = useCart()
  return (
    <Card sx={{ position: "relative", display: "flex", mb: 3 }}>
      <div
        sx={{
          width: 100.4,
          height: 122.0,
          bg: "muted",
          display: "flex",
          // p: 2,
        }}
      >
        <GatsbyImage
          image={item.image.gatsbyImageData}
          alt={item.title}
          objectFit="contain"
          sx={{ mx: "auto", cursor: "pointer" }}
          onClick={() => navigate("/" + item.fields.slug)}
        />
      </div>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <Themed.h4 sx={{ variant: "text.truncate" }}>{item.title}</Themed.h4>
          <Themed.p sx={{ variant: "text.truncate" }}>
            {item.authors[0]}
          </Themed.p>
        </div>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <QuantityPicker
              decrement={() => decrement(item)}
              quantity={item.quantity}
              increment={() => increment(item)}
            /> */}
          <Themed.p
            sx={{
              variant: "text.truncate",
            }}
          >
            ${item.price * item.quantity}
          </Themed.p>
        </div>
      </Box>
      <button
        onClick={() => removeFromCart(item)}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          lineHeight: 1,
          cursor: "pointer",
          bg: "text",
          color: "background",
          border: "none",
        }}
      >
        <small>X</small>
      </button>
    </Card>
  )
}

export default function CartItemList() {
  const { cart } = useCart()
  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.contentful_id} item={item} />
      ))}
    </div>
  )
}
