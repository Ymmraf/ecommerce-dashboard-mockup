'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import { useState } from "react"
import DashboardMobileMenu from "./DashboardMobileMenu"

export default function DashboardMobileNav() {
    const [mobileNav, setMobileNav] = useState<boolean>(false)

    function toggleMobileNav() {
        setMobileNav(!mobileNav)
    }

    function handleClickNavigation() {
        setMobileNav(false)
    }

    return (
        <>
        <nav className="shadow-sm px-4 pt-4 pb-2 fixed top-0 left-0 right-0 z-50 bg-cream lg:hidden">
          <ul className="flex justify-end">
            <li className="flex gap-x-4 relative">
              <button
                onClick={() => toggleMobileNav()}
                className={clsx(
                  "h-9 w-9 px-2 pt-2 pb-4 text-coal rounded-md align-middle hover:bg-darkcream",
                  {
                    "bg-darkcream": mobileNav == true,
                  }
                )}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </li>
          </ul>
          <DashboardMobileMenu showMenu={mobileNav} handleClickNavigation={handleClickNavigation}/>
        </nav>
        <div className="h-[62px] lg:hidden"></div>
        </>
    )
}