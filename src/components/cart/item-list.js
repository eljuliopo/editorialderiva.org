/** @jsx jsx */
import { jsx, Themed, Box, Card, Button, Grid, Flex } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
// import { parseAuthors } from "../utils"
import QuantityPicker from "../quantity-picker"

import { useCart } from "../../store"

function RemoveButton({ item }) {
  const { removeFromCart } = useCart()
  return (
    <Button
      onClick={() => removeFromCart(item)}
      sx={{ bg: "background", p: 0, color: "primary", border: "none" }}
    >
      eliminar
    </Button>
  )
}

export function CartItem({ item }) {
  return (
    <Card sx={{ display: "flex", mb: 3 }}>
      <Grid columns={["1fr 2fr"]} gap={0}>
        <Link to={"/catalogo/" + slugify(item.title.toLowerCase())}>
          <GatsbyImage
            image={item.image.gatsbyImageData}
            alt={item.title}
            objectFit="cover"
            sx={{ height: 160 }}
          />
        </Link>
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          <div>
            <Themed.h4 sx={{ variant: "text.truncate" }}>
              <Themed.a
                as={Link}
                to={"/catalogo/" + slugify(item.title.toLowerCase())}
              >
                {item.title}
              </Themed.a>
            </Themed.h4>
            <Themed.p sx={{ variant: "text.truncate" }}>
              {item.authors[0]}
            </Themed.p>
          </div>
          <Flex sx={{ alignItems: "center" }}>
            <Themed.p sx={{ my: 0, fontSize: 2 }}>${item.price}</Themed.p>
            <Themed.p sx={{ my: 0, fontSize: 1, mx: 2 }}>x</Themed.p>
            <QuantityPicker sx={{ fontSize: 2 }} item={item} />
          </Flex>
          <div
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <RemoveButton item={item} />
            <Themed.p
              sx={{
                variant: "text.truncate",
              }}
            >
              ${item.price * item.quantity}
            </Themed.p>
          </div>
        </Box>
      </Grid>
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
