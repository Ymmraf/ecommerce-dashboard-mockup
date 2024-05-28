import { fetchProduct } from "@/app/lib/products"
import ProductCard from "../ProductCard"
import { getDecimal } from "@/app/utils/getDecimal"

export default async function Recommend() {
    const allProduct = (await fetchProduct.all()).rows

    const randomIndex = Math.random() * (allProduct.length-4)
    const recommendProduct = allProduct.slice(randomIndex, randomIndex+4)

    return (
        <>
            <h2 className="text-coal text-xl mt-12 mb-6">People also like</h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 lg:grid-cols-4">
                {
                    recommendProduct.map((product,index) => 
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={getDecimal(product.price, product.discount)}
                            img={product.img}
                            rating={product.rating}
                            originalPrice={getDecimal(product.price)}
                            href={product.href}
                        />
                    )
                }
            </div>
        </>
    )
}