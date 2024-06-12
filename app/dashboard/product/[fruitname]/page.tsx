import Image from "next/image"
import { fetchProduct } from "@/app/lib/products"
import capitalizeParams from "@/app/utils/capitalizeParams"

export default async function StockPage({ params }: { params: { fruitname: string } }) {
    const fruitName = capitalizeParams(params.fruitname)
    const productData = ((((await fetchProduct.productManagement(fruitName)).rows[0])))

    return (
        <>
        <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl">{fruitName}</h1>
        <section className="w-11/12 m-auto mt-12">
            <Image 
                className="rounded-full"
                src={`/fruits/${fruitName.toLowerCase().replace(' ', '-')}.jpg`}
                alt={`picture of ${fruitName}`}
                width={300}
                height={300}
            />
            <form className="text-coal font-semibold space-y-8">
                <div>
                    <h2 className="text-2xl">Stock management</h2>
                    <label className="block" htmlFor="add">Add to stock</label>
                    <input type="number" id="add" name="add" className="p-2 rounded-lg"/>
                    <label className="block" htmlFor="stock">Stock</label>
                    <input type="number" id="stock" name="stock" className="p-2 rounded-lg"/>
                </div>

                <div>
                    <h2 className="text-2xl">Price</h2>
                    <label className="block" htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" className="p-2 rounded-lg"/>
                    <label className="block" htmlFor="discount">Discount</label>
                    <input type="number" id="discount" name="discount" className="p-2 rounded-lg"/>
                </div>

                <div>
                    <h2 className="text-2xl">Recently added</h2>
                    <label htmlFor="true">True</label>
                    <input type="radio" id="true" name="new" value="true"/>
                    <label htmlFor="false">False</label>
                    <input type="radio" id="false" name="new" value="false"/>
                </div>

                <div className="">
                    <label className="block" htmlFor="detail">Detail</label>
                    <input type="text" id="detail" name="detail" className="p-2 rounded-lg"/>
                </div>

                <div className="">
                    <label className="block" htmlFor="origin">Origin</label>
                    <input type="text" id="origin" name="origin" className="p-2 rounded-lg"/>
                </div>

                <div className="">
                    <label className="block" htmlFor="nutrition">Nutrition</label>
                    <input type="text" id="nutrition" name="nutrition" className="p-2 rounded-lg"/>
                </div>
            </form>
        </section>
        </>
    )
}