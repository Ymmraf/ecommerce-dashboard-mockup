import BonusProgram from "./ui/home/BonusProgram";
import { Discount } from "./ui/home/Discount";
import Recent from "./ui/home/Recent";
import Recipe from "./ui/home/Recipe";
import Swipe from "./ui/home/Swipe";
import WorkProcess from "./ui/home/WorkProcess";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main className="z-0 space-y-12">
      <Swipe />
      <Discount />
      <Recipe />
      <BonusProgram />
      <Recent />
      <WorkProcess />
      <Footer />
    </main>
  );
}