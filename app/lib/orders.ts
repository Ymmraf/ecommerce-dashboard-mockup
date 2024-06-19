import { sql } from "@vercel/postgres";

export const fetchOrders = {
    async byUserId(id : number) {
        try {
            const orders = await sql `
            SELECT * FROM orders
            WHERE user_id = ${id}
            ORDER BY id DESC
            `
            return orders
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch order by user id')
        }
    },

    async all() {
        try {
            const orders = await sql `
                SELECT orders.id, orders.user_id, orders.date, orders.total, orders.payment, users.username FROM orders
                LEFT JOIN users
                ON orders.user_id = users.id
                ORDER BY orders.id DESC

            `
            return orders
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch all order')
        }
    }
}