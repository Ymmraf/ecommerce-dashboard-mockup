import StockSearch from "@/app/ui/dashboard/StockSearch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { fetchOrders } from "@/app/lib/orders";

export default async function OrderPage() {
    const orders = (await fetchOrders.all()).rows

    return (
      <>
        <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl">Order</h1>
        <div>
          <StockSearch />
        </div>

        <div className="lg:w-11/12 lg:m-auto lg:space-y-4">
          <div className="h-12 p-2 bg-leaf rounded-lg text-cream font-bold text-lg mb-2">
            <div className="grid grid-cols-6 px-4">
              <p>Date</p>
              <p>Order id</p>
              <p>Username</p>
              <p>Amount</p>
              <p>Payment</p>
            </div>
          </div>
            {
                orders.map((order, index) => 
                    <div key={index} className="h-18 p-2 bg-white rounded-lg text-coal">
                        <div className="grid grid-cols-6 px-8">
                        <p className="relative top-4">{`${order.date.getDate()}-${order.date.getMonth()}-${order.date.getFullYear()}`}</p>
                        <p className="relative top-4">{order.id}</p>
                        <p className="relative top-4">{order.username}</p>
                        <p className="relative top-4">${order.total}</p>
                        <p className="relative top-4">{order.payment}</p>
                        <div className="flex items-center justify-end">
                            <Link href={`/dashboard/order/${order.id}`} className="text-white bg-leaf text-lg p-3 rounded-lg" >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Link>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
      </>
    );
}