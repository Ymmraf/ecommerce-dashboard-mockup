import { sql } from "@vercel/postgres"

export async function GET() {
    const res = await sql`
    SELECT * FROM products
    `
    return Response.json({res})
  }