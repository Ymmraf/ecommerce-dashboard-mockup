import { sql } from "@vercel/postgres";

export const fetchOrders = {
    async byUserId(id : number) {
        try {
            const orders = await sql `
            SELECT * FROM orders
            WHERE user_id = ${id}
            `
            return orders
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch order by user id')
        }
    }
}