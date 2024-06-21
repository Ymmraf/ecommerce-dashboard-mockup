import { sql } from "@vercel/postgres";

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate()
}

export const dashboard = {
    async monthlyOrder(month: number, year: number) {
        const day = daysInMonth(month, year)
        const startDate = `${year.toString()}-${month.toString()}-1`
        const endDate = `${year.toString()}-${month.toString()}-${day.toString()}`
        console.log(day)

        try {
            const orderQuantity = await sql `
                SELECT COUNT(*)
                FROM orders
            `
            return orderQuantity
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch quantity of order')
        }
    }
}