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
    },

    async byId(id: number) {
        try {
            const order = await sql `
                SELECT orders.id, orders.user_id, orders.date, orders.total, orders.address, orders.packaging, orders.shipping, orders.payment, users.username
                FROM orders
                JOIN users
                ON orders.user_id = users.id
                WHERE orders.id = ${id}
            `
            return order
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch order by order id')
        }
    },

    async itemById(id:number) {
        try {
            const items = await sql `
                SELECT order_item.order_id, order_item.quantity, order_item.price, product.name
                FROM order_item
                JOIN product
                ON order_item.product_id = product.id
                WHERE order_item.order_id = ${id}
            `
            return items
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch items in order')
        }
    }
}