import TotalOrder from "../ui/dashboard/TotalOrder";

export default function Dashboard() {
    return (
        <section>
            <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl mb-4">Dashboard</h1>
            <div className="grid grid-cols-4 gap-x-8 px-16">
                <TotalOrder />  
            </div>
        </section>
    )
}