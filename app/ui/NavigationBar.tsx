"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
                {/* <IconButton aria-label="cart"> */}
                  <StyledBadge badgeContent={12} color="error">
                    <ShoppingCartIcon />
                  </StyledBadge>
                {/* </IconButton> */}
              </div>

            </button>
            <div>
              <div className="w-px bg-coal h-full"></div>
            </div>
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

const navigation = [
  {
    heading: "Home",
    href: "/",
  },
  {
    heading: "Fresh Fruit",
    href: "/fresh-fruit",
  },
  {
    heading: "Dried Fruit",
    href: "/dried-fruit",
  },
];

export function SideMenu({
  openSidebar,
  currentOpen,
  handleClickNavigation,
}: {
  openSidebar: boolean;
  currentOpen: null | string;
  handleClickNavigation: Function;
}) {
  if (currentOpen == "navigation") {
    return (
      <>
        <section
          className={clsx(
            "fixed z-50 right-0 top-[60px] w-3/5 h-full border-1 bg-cream border-coal border-px shadow-md p-4",
            {
              hidden: !openSidebar,
              block: openSidebar,
            }
          )}
        >
          <ul>
            {navigation.map((menu, index) => (
              <>
                <li
                  key={index}
                  className="text-center text-xl py-3 hover:bg-darkcream rounded-xl"
                >
                  <Link
                    onClick={() => handleClickNavigation()}
                    href={menu.href}
                  >
                    {menu.heading}
                  </Link>
                </li>
                <hr className="h-[2px] bg-coal opacity-30" />
              </>
            ))}
          </ul>
        </section>
      </>
    );
  } else if (currentOpen == "cart") {
    return (
      <>
        <section
          className={clsx(
            "fixed z-50 right-0 top-[60px] w-3/5 h-full border-1 bg-cream border-coal border-px shadow-md p-4",
            {
              hidden: !openSidebar,
              block: openSidebar,
            }
          )}
        >
          <h2 className="text-xl font-semibold text-coal mb-4">Your Order</h2>
          <div className="flex justify-between mb-2">
            <p className="text-coal">Subtotal:</p>
            <p className="text-coal">$0.00</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-coal">Delivery:</p>
            <p className="text-coal">$0.00</p>
          </div>
          <div className="h-px w-full bg-coal my-6"></div>
          <div className="flex justify-between mb-2">
            <p className="text-coal text-xl font-bold">Total:</p>
            <p className="text-coal text-xl">$0.00</p>
          </div>
          <div>
            <button className="w-full py-3 bg-leaf mt-2 text-cream font-semibold rounded-xl">
              Purchase
            </button>
          </div>
        </section>
      </>
    );
  }
}
