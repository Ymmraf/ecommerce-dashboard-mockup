import Breadcrumbs from "../ui/Breadcrumbs";
import { products } from "../lib/products";
import ProductCard from "../ui/ProductCard";
import { getDecimal } from "../utils/getDecimal";

export default function Store() {
    return (
        <main className="w-11/12 m-auto">
            <Breadcrumbs nav={["Store"]}/>
            <h1 className="text-coal text-3xl font-semibold">All products</h1>
            <section className="grid grid-cols-2 gap-x-2 gap-y-6 mt-8">
                {
                    products.map((product, index) => 
                        <ProductCard 
                            key={index}
                            name={product.name}
                            price={getDecimal(product.price, product.discount)}
                            img={product.img}
                            rating={product.rating}
                            originalPrice={getDecimal(product.price)}
                        />
                    )
                }
            </section>
        </main>
    )
}