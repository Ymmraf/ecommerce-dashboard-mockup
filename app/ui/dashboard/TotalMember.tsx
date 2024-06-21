import { dashboard } from "@/app/lib/dashboard"

export default async function TotalMember() {
    const totalMember = (await dashboard.totalMember()).rows[0].count
    return (
        <div className="bg-cream text-coal text-center p-8 space-y-4 rounded-2xl border-2 border-coal">
            <h2 className="text-2xl font-semibold">Members</h2>
            <p className="text-2xl">{totalMember}</p>
        </div>
    )
}