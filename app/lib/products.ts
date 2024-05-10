import { sql } from '@vercel/postgres';

export const fetchProduct = {
    async all() {
        try {
            const data = await sql`
            SELECT * FROM products
            `
            return data
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch products")
        }
    },

    async byName(name: string) {
        try {
            const product = await sql `
            SELECT * FROM products
            WHERE name = ${name}
            `
            return product
        } catch (error) {
            console.log(`Database error : ${error}`)
            throw new Error("Failed to fetch product by name")
        }
    }
}

export const products = [
    {name: "Orange", type: "fresh", price: 3, stock: 20, discount: 0, img: "/fruits/orange.jpg", desc: "An orange", rating: 4.9, new: true},
    {name: "Apple", type: "fresh", price: 3, stock: 20, discount: 0.2, img: "/fruits/apple.jpg", desc: "An apple", rating: 4.8, new: false},
    {name: "Giwi", type: "fresh", price: 5, stock: 20, discount: 0, img: "/fruits/giwi.jpg", desc: "A giwi", rating: 5, new: false},
    {name: "Mango", type: "fresh", price: 4, stock: 20, discount: 0.1, img: "/fruits/mango.jpg", desc: "A mango", rating: 5, new: false},
    {name: "Strawberry", type: "fresh", price: 6, stock: 20, discount: 0, img: "/fruits/strawberry.jpg", desc: "A strawberry", rating: 4.8, new: true},
    {name: "Watermelon", type: "fresh", price: 5, stock: 20, discount: 0.1, img: "/fruits/watermelon.jpg", desc: "A watermelon", rating: 4.7, new: false},
    {name: "Peach", type: "fresh", price: 5, stock: 20, discount: 0, img: "/fruits/peach.jpg", desc: "A watermelon", rating: 4.5, new: false},
    {name: "Grape", type: "fresh", price: 4, stock: 20, discount: 0.2, img: "/fruits/grape.jpg", desc: "A grape", rating: 5, new: false},
    {name: "Banana", type: "fresh", price: 2, stock: 20, discount: 0, img: "/fruits/banana.jpg", desc: "Banana", rating: 4.9, new: true},
    {name: "Blueberry", type: "fresh", price: 6, stock: 20, discount: 0.1, img: "/fruits/blueberry.jpg", desc: "Blueberries", rating: 4.7, new: false},
    {name: "Papaya", type: "fresh", price: 4, stock: 20, discount: 0, img: "/fruits/papaya.jpg", desc: "papaya", rating: 4.8, new: false},
    {name: "Raspberry", type: "fresh", price: 5, stock: 20, discount: 0.2, img: "/fruits/raspberry.jpg", desc: "a bowl of raspberries", rating: 4.6, new: false},
    {name: "Durian", type: "fresh", price: 8, stock: 20, discount: 0, img: "/fruits/durian.jpg", desc: "a durian", rating: 5, new: true},
    {name: "Dragonfruit", type: "fresh", price: 5, stock: 20, discount: 0.1, img: "/fruits/dragonfruit.jpg", desc: "a dragonfruit", rating: 4.9, new: false},
    {name: "Pineapple", type: "fresh", price: 3, stock: 20, discount: 0, img: "/fruits/pineapple.jpg", desc: "a pineapple", rating: 4.7, new: false},
    {name: "Raisin", type: "dried", price: 3, stock: 20, discount: 0.2, img: "/fruits/raisin.jpg", desc: "a bowl of raisin", rating: 4.9, new: false},
    {name: "Prune", type: "dried", price: 4, stock: 20, discount: 0, img: "/fruits/prune.jpg", desc: "a bowl of prune", rating: 4.8, new: true},
    {name: "Fig", type: "dried", price: 5, stock: 20, discount: 0.1, img: "/fruits/fig.jpg", desc: "a bowl of fig", rating: 4.6, new: false},
    {name: "Apricot", type: "dried", price: 3, stock: 20, discount: 0, img: "/fruits/apricot.jpg", desc: "a bowl of apricot", rating: 4.8, new: false},
    {name: "Date", type: "dried", price: 3, stock: 20, discount: 0.2, img: "/fruits/date.jpg", desc: "a bowl of date", rating: 4.8, new: false},
    {name: "Walnut", type: "dried", price: 5, stock: 20, discount: 0, img: "/fruits/walnut.jpg", desc: "a bowl of walnut", rating: 4.9, new: true},
    {name: "Sunflower Seed", type: "dried", price: 5, stock: 20, discount: 0.1, img: "/fruits/sunflower-seed.jpg", desc: "a bowl of sunflower seed", rating: 4.9, new: false},
    {name: "Almond", type: "dried", price: 4, stock: 20, discount: 0, img: "/fruits/almond.jpg", desc: "a bowl of almond", rating: 4.8, new: false},
    {name: "Cashew Nut", type: "dried", price: 5, stock: 20, discount: 0.2, img: "/fruits/cashew.jpg", desc: "a bowl of cashew nut", rating: 4.9, new: false},
    {name: "Macademia", type: "dried", price: 6, stock: 20, discount: 0, img: "/fruits/macademia.jpg", desc: "a bowl of macademia", rating: 4.8, new: true},
]

