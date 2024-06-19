import Image from "next/image";
import Link from "next/link"

const dashboardMenu = [
    {heading: "Dashboard",href: "/dashboard",},
    {heading: "Product management",href: "/dashboard/product",},
    {heading: "Member",href: "/dashboard/user",},
    {heading: "Order",href: "/dashboard/order"}
  ];

export default function DashboardDesktopNav() {
    return (
        <aside className="hidden lg:flex justify-between sticky top-0 left-0">
          <div>
            <div className="w-full">
              <Image 
                className="w-5/6 mx-auto my-4"
                src={'/Freshy Logo.png'}
                alt="Freshy logo"
                width={300}
                height={300}
              />
              <hr className="h-[2px] bg-darkcream"/>
            </div>
            <div>
            <ul>
                {dashboardMenu.map((menu, index) => (
                    <>
                      <div key={index}>
                        <li className="text-center min-w-[298px] text-xl hover:bg-darkcream rounded-xl duration-300 my-1">
                          <Link className="block py-3" href={menu.href} >{menu.heading}</Link>
                        </li>
                      </div>
                      <hr className="h-[2px] bg-darkcream"/>
                    </>
                  ))}
                  <div>
                    <li className="text-center min-w-[298px] text-xl hover:bg-darkcream rounded-xl duration-300 my-1">
                      <Link className="block py-3 text-cream bg-leaf" href="/">Homepage</Link>
                    </li>
                  </div>
            </ul>
            </div>
          </div>
          <div className="bg-darkcream w-[2px] min-h-screen max-h-full"></div>
        </aside>
    )
}