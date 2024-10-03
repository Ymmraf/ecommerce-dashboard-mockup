import { dashboard } from "@/app/lib/dashboard"

export const dynamicParams = true
export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'default-no-store'

export default async function Revenue() {
    const month = new Date().getMonth()
    const revenue = (await dashboard.revenue(month ,2024)).rows[0].sum
    return (
        <div className="bg-tomato text-cream text-center p-8 space-y-4 rounded-lg">
            <h2 className="text-2xl font-semibold">This month&apos;s sales</h2>
            <p className="text-2xl">${revenue}</p>
        </div>
    )
}