'use client'

import Image from "next/image";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faChartSimple, faFileInvoice, faUser } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const dashboardMenu = [
    {heading: "Dashboard",href: "/dashboard", icon: faChartSimple},
    {heading: "Product",href: "/dashboard/product", icon: faBagShopping},
    {heading: "User",href: "/dashboard/user", icon: faUser},
    {heading: "Order",href: "/dashboard/order", icon: faFileInvoice}
  ];

export default function DashboardDesktopNav() {
    const pathname = usePathname()
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
                      <div key={menu.heading+index} className="flex">
                        <li className="text-center min-w-[298px] text-xl hover:bg-darkcream rounded-xl duration-300 my-1">
                          <Link className="py-3 flex ml-20" href={menu.href} >
                            <div className="text-coal text-2xl relative bottom-1 mr-4">
                              <FontAwesomeIcon icon={menu.icon}/>
                            </div>
                            {menu.heading}
                          </Link>
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