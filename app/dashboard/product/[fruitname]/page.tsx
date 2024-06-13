import Image from "next/image"
import { fetchProduct } from "@/app/lib/products"
import capitalizeParams from "@/app/utils/capitalizeParams"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

export default async function StockPage({ params }: { params: { fruitname: string } }) {
    const fruitName = capitalizeParams(params.fruitname)
    const productData = ((((await fetchProduct.productManagement(fruitName)).rows[0])))

    async function submitChange(formData : FormData) {
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
        revalidatePath(`/dashboard/product`)
    }

    return (
        <>
        <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl">{fruitName}</h1>
        <section className="w-11/12 m-auto mt-12">
            <div className="flex justify-center">
                <Image 
                    className="rounded-full"
                    src={`/fruits/${fruitName.toLowerCase().replace(' ', '-')}.jpg`}
                    alt={`picture of ${fruitName}`}
                    width={300}
                    height={300}
                />
            </div>
            <form action={submitChange} className="text-coal font-semibold xl:w-2/3 m-auto">
                <h2 className="text-2xl mt-4 mb-2">Stock management</h2>
                <div className="grid grid-cols-2 gap-x-8">
                    <div>
                        <label className="block" htmlFor="add">Add to stock</label>
                        <input type="number" id="add" name="add" className="p-2 rounded-lg w-full"/>
                    </div>
                    <div>
                        <label className="block " htmlFor="stock">Current stock</label>
                        <input type="number" id="stock" name="stock" className="p-2 rounded-lg w-full" defaultValue={productData.stock}/>
                    </div>
                </div>

                <h2 className="text-2xl mt-4 mb-2">Price</h2>
                <div className="grid grid-cols-2 gap-x-8">
                    <div>
                        <label className="block" htmlFor="price">Price</label>
                        <input type="text" id="price" name="price" className="p-2 rounded-lg w-full" defaultValue={productData.price}/>
                    </div>
                    <div>
                        <label className="block" htmlFor="discount">Discount</label>
                        <input type="number" id="discount" name="discount" className="p-2 rounded-lg w-full" defaultValue={productData.discount}/>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl mt-4 mb-2">Recently added</h2>
                    <label htmlFor="true">True</label>
                    <input type="radio" id="true" name="new" value="true"/>
                    <label htmlFor="false">False</label>
                    <input type="radio" id="false" name="new" value="false"/>
                </div>

                <h2 className="text-2xl mt-4 mb-2">Infomation</h2>
                <div className="grid grid-cols-1 gap-x-8">
                    <div>
                        <label className="block" htmlFor="detail">Detail</label>
                        <textarea rows={5} id="detail" name="detail" className="p-2 rounded-lg w-full" defaultValue={productData.detail}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 mt-4">
                    <div>
                        <label className="block" htmlFor="origin">Origin</label>
                        <input type="text" id="origin" name="origin" className="p-2 rounded-lg w-full" defaultValue={productData.origin}/>
                    </div>
                    <div>
                        <label className="block" htmlFor="nutrition">Nutrition</label>
                        <input type="text" id="nutrition" name="nutrition" className="p-2 rounded-lg w-full" defaultValue={productData.nutrition}/>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center my-8">
                        <button type="submit" className="text-cream bg-leaf py-2 px-8 rounded-lg hover:scale-105 duration-300">Save change</button>
                    </div>
                </div>
            </form>
        </section>
        </>
    )
}