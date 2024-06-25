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
            SELECT *
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
    },

    async stock(query? : string) {
        if(query) {
            const product = await this.filteredStock(query)
            return product
        }

        try {
            const product = await sql `
            SELECT name, price, stock
            FROM product
            ORDER BY id ASC
            `
            return product
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch product for stock")
        }
    },

    async filteredStock(query: string) {
        try {
            const product = await sql `
            SELECT 
                name, 
                price, 
                stock
            FROM product
            WHERE 
                name ILIKE ${`%${query}%`};
            `
            return product
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch filtered products")
        }
    },

    async productManagement(name: string) {
        try {
            const stockData = await sql `
            SELECT * 
            FROM product
            JOIN product_detail
            ON product.detail_id = product_detail.id
            WHERE name = ${name}
            `
            console.log(stockData.rows)
            return stockData
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fecth product for stock management")
        }
    }
}