import { atom } from "jotai";

export const cart = atom<CartProduct[]>([])

export interface CartProduct {
    product: string,
    price: number,
    quantity: number,
    img: string,
    stock: number
}