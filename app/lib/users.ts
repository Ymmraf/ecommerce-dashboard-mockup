import { sql } from "@vercel/postgres";

export const fetchUsers = {
    async all(query? : string) {
        if(query) {
            const users = await this.byQuery(query)
            return users
        }

        try {
            const users = await sql `
            SELECT * FROM users
            ORDER BY id ASC
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
            SELECT * FROM users
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
                SELECT * FROM users
                WHERE id = ${id}
            `
            return user
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch users by id")
        }
    }
}