import create from "zustand"
import { persist } from "zustand/middleware"

export const useCart = create(
  persist(
    set => ({
      cart: [],
      addToCart: i =>
        set(({ cart }) => {
          const index = cart.findIndex(c => c.contentful_id === i.contentful_id)
          if (index >= Number(0)) {
            cart[index].quantity = cart[index].quantity + i.quantity
          } else {
            cart.push(i)
          }
        }),
      removeFromCart: i =>
        set(({ cart }) => {
          const index = cart.findIndex(c => c.contentful_id === i.contentful_id)
          cart.splice(index, index + 1)
        }),
      setItemQuantity: i =>
        set(({ cart }) => {
          const index = cart.findIndex(c => c.contentful_id === i.contentful_id)
          cart[index].quantity = i.quantity
        }),
      increment: i =>
        set(({ cart }) => {
          const index = cart.findIndex(c => c.contentful_id === i.contentful_id)
          cart[index].quantity = i.quantity + 1
        }),
      decrement: i =>
        set(({ cart }) => {
          if (i.quantity === 1) return
          const index = cart.findIndex(c => c.contentful_id === i.contentful_id)
          cart[index].quantity = i.quantity - 1
        }),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "shopping-cart",
    }
  )
)
