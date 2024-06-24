import { sql } from "@vercel/postgres";

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate()
}

export const dashboard = {
    async monthlyOrder(month: number, year: number) {
        const day = daysInMonth(month, year)
        const startDate = `${year.toString()}-${month.toString()}-1`
        const endDate = `${year.toString()}-${month.toString()}-${day.toString()}`

        try {
            const orderQuantity = await sql `
                SELECT COUNT(*)
                FROM orders
                WHERE date BETWEEN ${startDate} AND ${endDate}
            `
            return orderQuantity
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch quantity of order')
        }
    },

    async revenue(month: number, year: number) {
        const day = daysInMonth(month, year)
        const startDate = `${year.toString()}-${month.toString()}-1`
        const endDate = `${year.toString()}-${month.toString()}-${day.toString()}`

        try {
            const revenue = await sql `
                SELECT SUM(total)
                FROM orders
                WHERE date BETWEEN ${startDate} AND ${endDate}
            `
            return revenue
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch monthly revenue')
        }
    },

    async totalRevenue() {
        try {
            const totalRevenue = await sql `
                SELECT SUM(total)
                FROM orders
            `
            return totalRevenue
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch total revenue')
        }
    },

    async totalMember() {
        try {
            const totalMember = await sql `
                SELECT count(*)
                FROM users
            `
            return totalMember
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch total member')
        }
    },

    async recentOrder() {
        try {
            const recentOrder = await sql `
                SELECT orders.id, orders.user_id, orders.date, orders.total, orders.payment, users.username FROM orders
                LEFT JOIN users
                ON orders.user_id = users.id
                ORDER BY orders.id DESC
                LIMIT 5
            `
            return recentOrder
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error(`Failed to fetch recent order`)
        }
    },

    async bestSeller() {
        try {
            const bestSeller = await sql `
                WITH best_seller AS (
                    SELECT order_item.product_id, SUM(order_item.quantity)
                    FROM order_item
                    GROUP BY order_item.product_id
                )

                SELECT best_seller.sum AS quantity, product.name FROM best_seller
                JOIN product
                ON best_seller.product_id = product.id
                ORDER BY sum DESC
                LIMIT 5
            `
            return bestSeller
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error(`Failed to fetch best seller`)
        }
    }
}