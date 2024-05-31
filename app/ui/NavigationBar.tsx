"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "./SideMenu";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cart } from "../atom/state";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export function NavitagionBar() {
  const [openSidebar, setSidebar] = useState<boolean>(false);
  const [currentOpen, setCurrentOpen] = useState<null | string>(null);
  const [productInCart] = useAtom(cart);
  const pathname = usePathname();

  function handleClickNavigation() {
    setSidebar(false);
    setCurrentOpen(null);
  }

  function handleClickSidebar(menu: string) {
    if (!openSidebar) {
      setSidebar(!openSidebar);
      setCurrentOpen(menu);
    } else if (openSidebar) {
      if (currentOpen == menu) {
        setSidebar(false);
        setCurrentOpen(null);
      } else if (currentOpen != menu) {
        setCurrentOpen(menu);
      }
    }
  }

  console.log(pathname);

  return (
    <>
      <nav className="shadow-sm px-4 pt-4 pb-2 fixed top-0 left-0 right-0 z-50 bg-cream">
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <Image
                src={"/Freshy Logo.png"}
                alt="Freshy Logo"
                width={100}
                height={50}
              />
            </Link>
          </li>
          <li className="flex gap-x-4 relative">
            {pathname == "/checkout" ? (<></>) : (
              <button
                onClick={() => handleClickSidebar("cart")}
                className={clsx(
                  "h-9 w-9 px-2 pt-2 text-coal rounded-md align-middle hover:bg-darkcream",
                  {
                    "bg-darkcream": currentOpen == "cart",
                  }
                )}
              >
                <div className="absolute top-1 left-1 opacity-90">
                  <StyledBadge
                    badgeContent={productInCart.length}
                    color="error"
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                </div>
              </button>
            )}
            {pathname == "/checkout" ? (<></>) : (
              <div>
                <div className="w-px bg-coal h-full"></div>
              </div>
            )}
            <button
              onClick={() => handleClickSidebar("navigation")}
              className={clsx(
                "h-9 w-9 px-2 pt-2 pb-4 text-coal rounded-md align-middle hover:bg-darkcream",
                {
                  "bg-darkcream": currentOpen == "navigation",
                }
              )}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
        </ul>
      </nav>
      <SideMenu
        openSidebar={openSidebar}
        currentOpen={currentOpen}
        handleClickNavigation={handleClickNavigation}
      />
      <div className="h-[62px]"></div>
    </>
  );
}
