import { sql } from '@vercel/postgres';

export const fetchProduct = {
    async card() {
        try {
            const data = await sql`
            SELECT name, price, discount, rating, new 
            FROM product
            `
            return data
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch products")
        }
    },

    async productPageByName(name: string) {
        try {
            const product = await sql `
            SELECT name, type, price, stock, discount, rating, new, detail, nutrition, origin
            FROM product
            JOIN product_detail
            ON product.detail_id = product_detail.id
            WHERE name = ${name}
            `
            return product
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch product by name")
        }
    }
}