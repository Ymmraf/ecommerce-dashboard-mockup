import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"

interface InsertItem {
    id: number,
    product: string,
    price: number,
    quantity: number
}

export async function POST(request: Request) {
    const requestData = await request.json()
    const date = new Date()
    const currentTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    let recentOrderId = (await sql `SELECT MAX(id) FROM orders`).rows[0].max

    if(!recentOrderId) {
        recentOrderId = 0
    }

    try {
        await sql `
            INSERT INTO orders
            (id, user_id, date, total, address, packaging, shipping, payment)
            VALUES
            (
            ${recentOrderId + 1}, 
            ${requestData.user_id},
            ${requestData.date},
            ${requestData.total},
            ${requestData.address},
            ${requestData.packaging},
            ${requestData.shipping},
            ${requestData.payment}
            );
        `
        console.log('Successfully insert data into orders')
    } catch (error) {
        console.log(`An error occured : ${error}`)
        throw new Error('Cannot insert into orders')
    }

    requestData.order.forEach(async (item : InsertItem) => {
        try {
            await sql `
            INSERT INTO order_item (order_id, user_id, product_id, quantity, price, date)
            VALUES (${recentOrderId+1},${requestData.user_id},${item.id}, ${item.quantity},${item.price},${currentTime})
            `
        } catch (error) {
            console.log(`An error occured : ${error}`)
            throw new Error('Cannot insert into order_item')
        }
    })

    requestData.order.forEach(async (item : InsertItem) => {
        try {
            const productStock = (await sql `SELECT * FROM product WHERE id = ${item.id}`).rows[0].stock

            await sql `
            UPDATE product
            SET stock = ${productStock - item.quantity}
            WHERE id = ${item.id}
            `
        } catch (error) {
            console.log(`An error occured : ${error}`)
            throw new Error('Cannot update stock in product')
        }
        
    })
    return NextResponse.json({requestData})
}