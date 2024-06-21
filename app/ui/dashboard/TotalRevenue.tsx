import { dashboard } from "@/app/lib/dashboard"

export default async function TotalRevenue() {
    const totalRevenue = (await dashboard.revenue(6,2024)).rows[0].sum
    return (
        <div className="bg-coal text-cream text-center p-8 space-y-4 rounded-2xl">
            <h2 className="text-3xl font-semibold">Total revenue</h2>
            <p className="text-3xl">${totalRevenue}</p>
        </div>
    )
}