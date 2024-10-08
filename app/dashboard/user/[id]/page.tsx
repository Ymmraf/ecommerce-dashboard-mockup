import { fetchUsers } from "@/app/lib/users"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { fetchOrders } from "@/app/lib/orders"

export const dynamicParams = true
export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'default-no-store'
export default async function UserInfomation({params} : {params : { id: number }}) {
    const user = (await fetchUsers.byId(params.id)).rows[0]
    const orders = (await fetchOrders.byUserId(params.id)).rows
    console.log(orders)

    return (
        <div>
            <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl">User info : {user.username}</h1>
            <div className="w-11/12 m-auto">
                <section className="my-4 text-coal space-y-4 font-semibold">
                    <p>User Id : {user.id}</p>
                    <p>Total spent : ${user.total_spent}</p>
                    <form>
                        <div>
                            <label className="block" htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" className="p-2 rounded-lg w-full" defaultValue={user.username}/>
                        </div>
                    </form>
                </section>
                <section>
                    <h2 className="text-coal text-2xl font-semibold mb-2">Recent Orders</h2>
                    <div className="h-12 p-2 bg-leaf rounded-lg text-cream font-bold text-lg mb-2">
                        <ul className="lg:grid lg:grid-cols-5 lg:px-8">
                            <li>Order id</li>
                            <li>Total</li>
                            <li>Date</li>
                            <li>Payment</li>
                            <li></li>
                        </ul>
                    </div>

                    {
                        orders.map((order, index) => 
                            <div key={index} className="h-18 p-2 bg-white rounded-lg text-coal mb-2" >
                                <div className="grid grid-cols-5 px-8">
                                    <p className="relative top-4">{order.id}</p>
                                    <p className="relative top-4">${order.total}</p>
                                    <p className="relative top-4">{`${order.date.getDate()}-${order.date.getMonth()+1}-${order.date.getFullYear()}`}</p>
                                    <p className="relative top-4">{order.payment}</p>
                                    <div className="flex items-center justify-end">
                                        <Link href={`/dashboard/order/${order.id}`} className="text-white bg-leaf text-lg p-3 rounded-lg">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </div>
    )
}