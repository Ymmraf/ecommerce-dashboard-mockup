import { dashboard } from "@/app/lib/dashboard";

export default async function RecentOrder() {
  const recentOrder = (await dashboard.recentOrder()).rows;

  return (
    <div>
      <h2 className="text-2xl text-coal pl-4 font-semibold mb-2">Recent orders</h2>
      <div className="space-y-2">
        <div className="bg-leaf text-cream text-lg rounded-lg py-2 px-4">
          <ul className="grid grid-cols-5 font-semibold">
            <li>Date</li>
            <li>Id</li>
            <li>Username</li>
            <li>Amount</li>
            <li>Payment</li>
          </ul>
        </div>
        <div className="space-y-2 py-2 bg-white rounded-lg">
          {recentOrder.map((order, index) => (
            <div key={index} className="px-4 h-12">
              <div className="grid grid-cols-5 text-coal">
                <p className="relative top-3">
                  {order.date.getDate()}-{order.date.getMonth()}-
                  {order.date.getFullYear()}
                </p>
                <p className="relative top-3">{order.id}</p>
                <p className="relative top-3">{order.username}</p>
                <p className="relative top-3">${order.total}</p>
                <p className="relative top-3">{order.payment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
