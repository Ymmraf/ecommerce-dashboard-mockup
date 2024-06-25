import { dashboard } from "@/app/lib/dashboard"
import Image from "next/image"

export default async function BestSeller() {
    const bestSeller = (await dashboard.bestSeller()).rows
    return (
      <div>
        <h2 className="text-2xl text-coal pl-4 font-semibold mb-2">Best seller</h2>
        <div className="space-y-2">
          <div className="bg-leaf text-cream text-lg rounded-lg py-2 px-4">
            <ul className="grid grid-cols-2 font-semibold">
              <li className="ml-16">Name</li>
              <li>Quantity</li>
            </ul>
          </div>
          <div className="space-y-2 bg-white rounded-lg">
            <div className="py-2 space-y-2">
                {bestSeller.map((product, index) => (
                <div key={`${product.name}-${index}`} className="px-4 h-12">
                    <div className="grid grid-cols-2 text-coal">
                    <div className="flex">
                        <Image
                        className="rounded-full"
                        src={`/fruits/${product.name
                            .toLowerCase()
                            .replace(" ", "-")}.jpg`}
                        alt={product.name}
                        width={50}
                        height={50}
                        />
                        <p className="ml-4 relative top-3">{product.name}</p>
                    </div>
                    <p className="relative top-3 ml-4">{product.quantity}</p>
                    </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
}