'use server'

import { sql } from "@vercel/postgres"

async function submit(formData : FormData) {
    'use server'
    const rawFormData = {
        add: formData.get('add'),
        stock: formData.get('stock'),
        price: formData.get('price'),
        discount: formData.get('discount'),
        detail: formData.get('detail'),
        origin: formData.get('origin'),
        nutrition: formData.get('nutrition')
    }

    try {
        await sql `
            UPDATE product
            SET stock = ${Number(rawFormData.stock)}
            WHERE name = ${fruitName};
        `
    } catch (error) {
        console.log(`Database error : ${error}`)
        throw new Error("Failed to update product data")
    }
    console.log(rawFormData)
}