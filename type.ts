export interface CartProduct {
    product: string,
    price: number,
    quantity: number,
    img: string,
    stock: number
}

export interface ProductInfoForCard {
    name: string,
    price: number,
    rating: number,
    discount: number,
    new: boolean
}

export interface StoreFilter {
    type: string,
    state: string,
    price: string
}

export interface StoreProductInfomation {
    name: string
    price: number
    img: string
    discount: number
    type: string
    rating: number
    new: boolean
    href: string
    origin: string
}

export interface FilterObject {
    filter: "type" | "state" | "price"
    value: "fresh" | "dried" | "discount" | "new" | "desc" | "asc"
  }