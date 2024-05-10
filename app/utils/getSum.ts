import { CartProduct } from "../atom/state"

export function getSum(cart: CartProduct[]) : number {
    let total = 0
    cart.forEach(product => {
      total = total + (product.price * product.quantity)
    })
    return total
  }

export function getTotalFee(cart: CartProduct[]) : number {
    let totalWeight = 0
    cart.forEach(product => {
      totalWeight = totalWeight + product.quantity
    })
    return totalWeight * 0.25
}