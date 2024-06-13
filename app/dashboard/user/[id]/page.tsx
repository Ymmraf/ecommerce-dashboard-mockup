import { fetchUsers } from "@/app/lib/users"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"

export default async function UserInfomation({params} : {params : { id: number }}) {
    const user = (await fetchUsers.byId(params.id)).rows[0]

    return (
        <div>
            <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl">User info : {user.username}</h1>
            <div className="w-11/12 m-auto">
                <section className="my-4 text-coal">
                    <p>User Id : {user.id}</p>
                    <form>
                        <div>
                            <label className="block" htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" className="p-2 rounded-lg w-full" defaultValue={user.username}/>
                        </div>
                        <div>
                            <label className="block" htmlFor="username"></label>
                            <input type="text" id="username" name="username" className="p-2 rounded-lg w-full" defaultValue={user.username}/>
                        </div>
                    </form>
                </section>
                <section>
                    <h2 className="text-coal text-2xl font-semibold mb-2">Recent Orders</h2>
                    <div className="h-12 p-2 bg-leaf rounded-lg text-cream font-bold text-lg mb-2">
                        <ul className="lg:grid lg:grid-cols-5 px-8">
                            <li>Order id</li>
                            <li>Total</li>
                            <li>Date</li>
                            <li>Payment</li>
                            <li></li>
                        </ul>
                        <div className="h-18 p-2 bg-white rounded-lg text-coal" >
                            <div className="grid grid-cols-4 px-8">
                            <p className="relative top-4">{user.id}</p>
                            <p className="relative top-4">{user.username}</p>
                            <p className="relative top-4">{user.amount}</p>
                            <div className="flex items-center justify-end">
                                <Link href={`/dashboard/user/${user.id}`} className="text-white bg-leaf text-lg p-3 rounded-lg">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}