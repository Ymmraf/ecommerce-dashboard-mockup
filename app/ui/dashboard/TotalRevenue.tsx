import { dashboard } from "@/app/lib/dashboard"

export default async function TotalRevenue() {
    const totalRevenue = (await dashboard.totalRevenue()).rows[0].sum
    return (
        <div className="bg-coal text-cream text-center p-8 space-y-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Total revenue</h2>
            <p className="text-2xl">${totalRevenue}</p>
        </div>
    )
}