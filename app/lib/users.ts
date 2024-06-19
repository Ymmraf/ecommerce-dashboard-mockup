import { sql } from "@vercel/postgres";

export const fetchUsers = {
    async all(query? : string) {
        if(query) {
            const users = await this.byQuery(query)
            return users
        }

        try {
            const users = await sql `
            WITH user_sum AS (
            SELECT SUM(total) AS total_spent, user_id
            FROM orders
            GROUP BY user_id
            )
            
            SELECT users.id, users.username, user_sum.total_spent FROM users
            LEFT JOIN user_sum
            ON users.id = user_sum.user_id
            `

            return users
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error('Failed to fetch users data')
        }

        
    },

    async byQuery(query: string) {
        try {
            const users = await sql `
            WITH user_sum AS (
            SELECT SUM(total) AS total_spent, user_id
            FROM orders
            GROUP BY user_id
            )
            
            SELECT users.id, users.username, user_sum.total_spent FROM users
            LEFT JOIN user_sum
            ON users.id = user_sum.user_id
            WHERE username ILIKE ${`%${query}%`};
            `

            return users
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch users by query")
        }
    },

    async byId(id : number) {
        try {
            const user = await sql `
                WITH user_sum AS (
                SELECT SUM(total) AS total_spent, user_id
                FROM orders
                GROUP BY user_id
                )
                
                SELECT users.id, users.username, user_sum.total_spent FROM users
                LEFT JOIN user_sum
                ON users.id = user_sum.user_id
                WHERE users.id = ${id}
            `
            return user
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch users by id")
        }
    }


}