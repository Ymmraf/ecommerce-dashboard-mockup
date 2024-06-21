import { dashboard } from "@/app/lib/dashboard"

export default async function TotalOrder() {
    const orderQuantity = (await dashboard.monthlyOrder(6,2024)).rows[0].count
    return (
        <div className="bg-leaf text-cream text-center p-8 space-y-4 rounded-2xl">
            <h2 className="text-3xl font-semibold">This month orders</h2>
            <p className="text-3xl">{orderQuantity}</p>
        </div>
    )
}