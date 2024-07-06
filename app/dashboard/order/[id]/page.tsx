import { fetchOrders } from "@/app/lib/orders"
import Image from "next/image"

export const dynamicParams = true
export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'default-no-store'
export default async function OrderById({params} : {params : { id: number }}) {
    const orders = (await fetchOrders.byId(params.id)).rows[0]
    const items = (await fetchOrders.itemById(params.id)).rows
    console.log(items)

    return (
        <div>
            <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl">Order id : {params.id}</h1>
            <div className="w-11/12 m-auto">
            <section className="text-coal space-y-2 mb-4 mt-4">
                <div>
                    <p><span className="font-semibold">Username : </span>{orders.username}</p>
                    <p><span className="font-semibold">Date : </span>{orders.date.getDate()}-{orders.date.getMonth()}-{orders.date.getFullYear()}</p>
                </div>
                <hr />
                <div>
                    <p><span className="font-semibold">Packaging : </span>{orders.packaging}</p>
                    <p><span className="font-semibold">Shipping method : </span>{orders.packaging}</p>
                    <p><span className="font-semibold">Payment : </span>{orders.payment}</p>
                </div>
                <hr />
                <div className="lg:grid lg:grid-cols-3">
                    <p><span className="font-semibold">Address : </span>{orders.address}</p>
                </div>
                <hr />
                <div>
                    <p><span className="font-semibold">Total : </span>{orders.total}</p>
                </div>
            </section>
                <section>
                    <h2 className="text-coal text-2xl font-semibold mb-2">Order items</h2>
                    <div className="h-12 p-2 bg-leaf rounded-lg text-cream font-bold text-lg mb-2">
                        <ul className="lg:grid lg:grid-cols-3 lg:px-8">
                            <li className="pl-16">Product name</li>
                            <li>Price</li>
                            <li>Quantity</li>
                        </ul>
                    </div>

                    {
                        items.map((item, index) => 
                            <div key={index} className="h-18 p-2 bg-white rounded-lg text-coal mb-2">
                                <div className="grid grid-cols-3 px-8">
                                    <div className="flex">
                                        <Image 
                                            className="rounded-full"
                                            src={`/fruits/${item.name.toLowerCase().replace(' ', '-')}.jpg`}
                                            alt={item.name}
                                            width={50}
                                            height={50}
                                        />
                                        <p className="relative top-4 ml-4">{item.name}</p>
                                    </div>
                                    <p className="relative top-4">${item.price}</p>
                                    <p className="relative top-4">{item.quantity}</p>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </div>
    )
}