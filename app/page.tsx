import BonusProgram from "./ui/home/BonusProgram";
import Discount from "./ui/home/Discount";
import Recent from "./ui/home/Recent";
import Recipe from "./ui/home/Recipe";
import Swipe from "./ui/home/Swipe";
import WorkProcess from "./ui/home/WorkProcess";
import Footer from "./ui/Footer";
import { fetchProduct } from "./lib/products";

export default async function Home() {
  const allProduct = (await fetchProduct.all()).rows
  const discountProducts = (allProduct.filter(product => product.discount > 0))
  const newProducts = (allProduct.filter(product => product.new == true)).slice(0,4)

  return (
    <main className="z-0 space-y-12">
      <Swipe />
      <Discount discount={discountProducts}/>
      <Recipe />
      <BonusProgram />
      <Recent recent={newProducts}/>
      <WorkProcess />
      <Footer />
    </main>
  );
}