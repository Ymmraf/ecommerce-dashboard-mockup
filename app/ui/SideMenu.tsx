import { getTotalProductPrice, getDeliveryFee } from "../utils/getSum";
import { useAtom } from "jotai";
import { cart } from "../atom/state";
import Link from "next/link";
import clsx from "clsx";
import CartDisplay from "./CartDisplay";
import DisplayTotal from "./DisplayTotal";

const navigation = [
    {heading: "Home",href: "/",},
    {heading: "Store",href: "/store",},
    {heading: "About",href: "/about",},
    {heading: "Contact",href: "/contact",},
    {heading: "FAQ",href: "/faq",},
  ];

export default function SideMenu({ openSidebar, currentOpen, handleClickNavigation, }: 
  { openSidebar: boolean; currentOpen: null | string; handleClickNavigation: Function;}) {
    const [productInCart] = useAtom(cart);
    const productPrice = getTotalProductPrice(productInCart);
    const deliveryFee = getDeliveryFee(productInCart);
    const total = productPrice + deliveryFee;
  
    if (currentOpen == "navigation") {
      return (
        <>
          <section
            className={clsx(
              "fixed z-40 right-0 top-0 h-full border-1 bg-cream border-coal border-px shadow-md p-4 w-4/5 md:w-2/5 xl:w-1/4",
              {
                hidden: !openSidebar,
                block: openSidebar,
              }
            )}
          >
            <ul className="flex flex-col justify-between h-full pt-[52px]">
              <div>
                {navigation.map((menu, index) => (
                  <div key={index}>
                    <li
                      className="text-center text-xl hover:bg-darkcream rounded-xl"
                    >
                      <Link
                        className="block py-3"
                        onClick={() => handleClickNavigation()}
                        href={menu.href}
                      >
                        {menu.heading}
                      </Link>
                    </li>
                    <hr className="h-[2px] bg-coal opacity-30" />
                  </div>
                ))}
              </div>
              <div>
                <li className="text-center text-xl mt-2 text-cream">
                  <Link className="py-3 w-full block rounded-lg bg-leaf" href="/dashboard" onClick={() => handleClickNavigation()}>
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
              "fixed z-50 right-0 top-[60px] w-4/5 h-full border-1 bg-cream border-coal border-px shadow-md p-4 md:w-2/5 xl:w-1/4",
              {
                hidden: !openSidebar,
                block: openSidebar,
              }
            )}
          >
            <div>
            <DisplayTotal subTotal={productPrice} deliveryFee={deliveryFee} total={total}/>
            <div className="mb-4">
              {
                productInCart.length > 0 ?
                <Link onClick={() => handleClickNavigation()} href="/checkout" className="text-center block py-3 bg-leaf mt-4 text-cream font-semibold rounded-lg">
                  Purchase
                </Link>
                :
                <button className="text-center w-full py-3 bg-darkcream mt-2 text-cream font-semibold rounded-lg" disabled>Purchase</button>
              }
              
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