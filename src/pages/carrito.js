/** @jsx jsx */
import { jsx, Themed, Grid } from "theme-ui"

import Layout from "../components/layout"
import ItemList from "../components/item-list"
import CheckoutForm from "../components/checkout-form"

import { useCart } from "../store"

export default function Cart() {
  const { cart } = useCart()
  return (
    <Layout>
      <Themed.h1>Mi compra</Themed.h1>
      {cart.length ? (
        <Grid columns={[1, 1, 2]}>
          <ItemList />
          <CheckoutForm />
        </Grid>
      ) : (
        <Themed.p>🙄 Todavía no agregas nada a tu carrito.</Themed.p>
      )}
    </Layout>
  )
}
