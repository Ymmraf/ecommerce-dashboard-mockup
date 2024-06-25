import TotalOrder from "../ui/dashboard/TotalOrder";
import Revenue from "../ui/dashboard/MontylyRevenue";
import TotalRevenue from "../ui/dashboard/TotalRevenue";
import TotalMember from "../ui/dashboard/TotalMember";
import RecentOrder from "../ui/dashboard/RecentOrder";
import BestSeller from "../ui/dashboard/BestSeller";
import DashboardChart from "../ui/dashboard/DashboardChart";

export default function Dashboard() {
    return (
        <section>
            <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl mb-4">Dashboard</h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-2 px-16 mb-8">
                <TotalOrder />  
                <Revenue />
                <TotalRevenue />
                <TotalMember />
            </div>
            <div className="grid xl:grid-cols-2 gap-2 px-16 mb-8">
                <RecentOrder />
                <BestSeller />
            </div>
            <div className="px-16 mb-8">
                <DashboardChart />
            </div>
        </section>
    )
}