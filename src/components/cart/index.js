/** @jsx jsx */
import { jsx, Themed, Grid } from "theme-ui"
import React from "react"

import ItemList from "./item-list"
import CheckoutForm from "./checkout-form"

import { useCart } from "../../store"

export function sumTotal(cart) {
  return cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
}

export default function Cart() {
  const { cart } = useCart()
  return (
    <React.Fragment>
      {cart.length ? (
        <Grid columns={[1, 1, 2]}>
          <ItemList />
          <CheckoutForm />
        </Grid>
      ) : (
        <Themed.p>todavía no agregas nada a tu carrito.</Themed.p>
      )}
    </React.Fragment>
  )
}
