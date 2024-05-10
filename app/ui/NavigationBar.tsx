"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cart } from "../atom/state";
import { getSum, getTotalFee } from "../utils/getSum";
import { useAtom } from "jotai";

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
                <StyledBadge badgeContent={productInCart.length} color="error">
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
    heading: "Store",
    href: "/store",
  },
  {
    heading: "About",
    href: "/about",
  },
  {
    heading: "Contact",
    href: "/contact",
  },
  {
    heading: "Payment",
    href: "/payment",
  },
  {
    heading: "FAQ",
    href: "/faq",
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
  const [productInCart] = useAtom(cart);
  const subTotal = getSum(productInCart);
  const deliveryFee = getTotalFee(productInCart);
  const total = subTotal + deliveryFee;

  if (currentOpen == "navigation") {
    return (
      <>
        <section
          className={clsx(
            "fixed z-40 right-0 top-0 w-4/5 h-full border-1 bg-cream border-coal border-px shadow-md p-4",
            {
              hidden: !openSidebar,
              block: openSidebar,
            }
          )}
        >
          <ul className="flex flex-col justify-between h-full pt-[52px]">
            <div>
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
            </div>
            <div>
              <li className="text-center text-xl py-3 mt-2 hover:bg-darkcream rounded-xl w-full bg-leaf text-cream">
                <Link href="/dashboard" onClick={() => handleClickNavigation()}>
                  Seller dashboard
                </Link>
              </li>
            </div>
          </ul>
        </section>
      </>
    );
  } else if (currentOpen == "cart") {
    return (
      <>
        <section
          className={clsx(
            "fixed z-50 right-0 top-[60px] w-4/5 h-full border-1 bg-cream border-coal border-px shadow-md p-4",
            {
              hidden: !openSidebar,
              block: openSidebar,
            }
          )}
        >
          <h2 className="text-xl font-semibold text-coal mb-4">Your Order</h2>
          <div className="flex justify-between mb-2">
            <p className="text-coal">Subtotal:</p>
            <p className="text-coal">${subTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-coal">Delivery:</p>
            <p className="text-coal">${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="h-px w-full bg-coal my-6"></div>
          <div className="flex justify-between mb-2">
            <p className="text-coal text-xl font-bold">Total:</p>
            <p className="text-coal text-xl">${total.toFixed(2)}</p>
          </div>
          <div>
            <button className="w-full py-3 bg-leaf mt-2 text-cream font-semibold rounded-xl">
              Purchase
            </button>
          </div>
          <div className="overflow-scroll space-y-3">
            {productInCart.map((product) => (
              <>
                <div className="h-24 flex gap-x-2 p-2">
                  <div className="mr-1">
                    <div className="rounded-full">
                      <Image
                        className="rounded-full shadow-md min-h-[80px] min-w-[80px]"
                        src={product.img}
                        alt={product.product}
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-between py-1">
                      <p className="text-coal font-semibold text-lg">{product.product}</p>
                      <div className="flex items-end min-w-20">
                        <button className="size-8 border-[1px] border-coal border-opacity-50 text-coal font-bold hover:text-cream hover:bg-coal duration-300">-</button>
                        <div className="flex items-center">
                          <p className="min-w-8 text-center">{
                            product.quantity
                            }</p>
                        </div>
                        <button className="size-8 border-[1px] border-coal border-opacity-50 text-coal font-bold hover:text-cream hover:bg-coal duration-300">+</button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div className="flex justify-end">
                        <button className="text-coal px-2 py-1 hover:bg-darkcream duration-300 rounded-xl"><FontAwesomeIcon icon={faXmark} className="text-xl"/></button>
                      </div>
                      <p className="text-coal">${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <hr className="w-full h-[2px] bg-darkcream"/>
              </>
            ))}
          </div>
        </section>
      </>
    );
  }
}
