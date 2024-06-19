import Link from "next/link"

export default function DashboardMobileMenu({showMenu, handleClickNavigation} : {showMenu : boolean, handleClickNavigation : Function}) {
  const navigation = [
    {heading: "Dashboard",href: "/dashboard",},
    {heading: "Product Management",href: "/dashboard/product",},
    {heading: "Member",href: "/dashboard/user",},
    {heading: "Order",href: "/dashboard/order",}
  ];

    if(!showMenu) {
      return
    } else {
      return (
          <>
            <section className="fixed right-0 z-10 top-0 h-full border-1 bg-cream border-coal border-px shadow-md p-4 w-4/5 md:w-2/5" >
              <ul className="flex flex-col justify-between h-full pt-[52px]">
                <div>
                  {navigation.map((menu, index) => (
                    <div key={index}>
                      <li className="text-center text-xl hover:bg-darkcream rounded-xl">
                        <Link className="block py-3" onClick={() => handleClickNavigation()} href={menu.href} >{menu.heading}</Link>
                      </li>
                      <hr className="h-[2px] bg-coal opacity-30" />
                    </div>
                  ))}
                </div>
                <div>
                  <li className="text-center text-xl py-3 mt-2 hover:bg-darkcream rounded-xl w-full bg-leaf text-cream">
                    <Link href="/" onClick={() => handleClickNavigation()}>
                      Homepage
                    </Link>
                  </li>
                </div>
              </ul>
            </section>
          </>
      )
    }
}