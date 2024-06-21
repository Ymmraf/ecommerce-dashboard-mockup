import { dashboard } from "@/app/lib/dashboard"

export default async function Revenue() {
    const revenue = (await dashboard.revenue(6,2024)).rows[0].sum
    return (
        <div className="bg-tomato text-cream text-center p-8 space-y-4 rounded-2xl">
            <h2 className="text-3xl font-semibold">This month revenue</h2>
            <p className="text-3xl">${revenue}</p>
        </div>
    )
}