import DashboardDesktopNav from "../ui/dashboard/DashboardDesktopNav";
import DashboardMobileNav from "../ui/dashboard/DashboardMobileNav"


export default function DashboardLayout({children} : {children : React.ReactNode}) {
    return (
      <>
        <div className="lg:grid lg:grid-cols-dashboard-lg">
          <DashboardDesktopNav />
          <DashboardMobileNav />
          <main>
              {children}
          </main>
        </div>
      </>
    );
}