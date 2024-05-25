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
    img: string,
    rating: number,
    href: string,
    discount: number
}