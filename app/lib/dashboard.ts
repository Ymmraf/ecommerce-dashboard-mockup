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
            throw new Error('Failed to fetch quantity of order')
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
            throw new Error('Failed to fetch quantity of order')
        }
    }
}