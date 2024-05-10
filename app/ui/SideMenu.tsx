import { getSum, getTotalFee } from "../utils/getSum";
import { useAtom } from "jotai";
import { cart } from "../atom/state";
import Link from "next/link";
import clsx from "clsx";
import CartDisplay from "./CartDisplay";

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

export default function SideMenu({
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
            <div>
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
            <div className="mb-4">
              <button className="w-full py-3 bg-leaf mt-2 text-cream font-semibold rounded-xl">
                Purchase
              </button>
            </div>
            </div>
            <hr className="h-1 w-full bg-darkcream"/>
            <div className="h-full">
              <CartDisplay />
            </div>
          </section>
        </>
      );
    }
  }