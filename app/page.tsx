import BonusProgram from "./ui/home/BonusProgram";
import Discount from "./ui/home/Discount";
import Recent from "./ui/home/Recent";
import Recipe from "./ui/home/Recipe";
import Swipe from "./ui/home/Swipe";
import WorkProcessMobile from "./ui/home/WorkProcessMobile";
import Footer from "./ui/Footer";
import { fetchProduct } from "./lib/products";
import DesktopBanner from "./ui/home/DesktopBanner";
import WorkProcessDesktop from "./ui/home/WorkProcessDesktop";

export default async function Home() {
  const allProduct = (await fetchProduct.card()).rows
  const discountProducts = (allProduct.filter(product => product.discount > 0))
  const newProducts = (allProduct.filter(product => product.new == true))

  return (
    <main className="z-0 space-y-12">
      <Swipe />
      <DesktopBanner />
      <Discount discount={discountProducts}/>
      <Recipe />
      <BonusProgram />
      <Recent recent={newProducts}/>
      <WorkProcessMobile />
      <WorkProcessDesktop />
      <Footer />
    </main>
  );
}