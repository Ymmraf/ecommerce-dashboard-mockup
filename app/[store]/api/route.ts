import { sql } from "@vercel/postgres"

export async function GET() {
    try {
      const res = await sql`
      SELECT * FROM products
      `
      return Response.json({res})
    } catch (error) {
      console.log(`Database error: ${error}`)
      throw new Error(`Cannot fetch all products`)
    }
  }