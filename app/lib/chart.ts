import { sql } from "@vercel/postgres"

export const chart = {
    async dashboard() {
        try {
            const chartData = await sql `
                SELECT SUM(total) AS total, DATE_TRUNC('month', date) AS date
                FROM orders
                GROUP BY DATE_TRUNC('month', date)
                ORDER BY date ASC
            `
            return chartData
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch chart data')
        }
    }
}