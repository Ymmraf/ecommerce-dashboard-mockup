import { dashboard } from "@/app/lib/dashboard"

export const dynamicParams = true
export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'default-no-store'
export default async function TotalOrder() {
    const month = new Date().getMonth()
    const orderQuantity = (await dashboard.monthlyOrder(month+1,2024)).rows[0].count
    return (
        <div className="bg-leaf text-cream text-center p-8 space-y-4 rounded-lg">
            <h2 className="text-2xl font-semibold">This month orders</h2>
            <p className="text-2xl">{orderQuantity}</p>
        </div>
    )
}