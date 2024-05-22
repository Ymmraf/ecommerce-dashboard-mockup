import { CartProduct } from "../atom/state"

export function getTotalProductPrice(cart: CartProduct[]) : number {
    let total = 0
    cart.forEach(product => {
      total = total + (product.price * product.quantity)
    })
    return total
  }

export function getDeliveryFee(cart: CartProduct[]) : number {
    let totalWeight = 0
    cart.forEach(product => {
      totalWeight = totalWeight + product.quantity
    })
    return totalWeight * 0.25
}