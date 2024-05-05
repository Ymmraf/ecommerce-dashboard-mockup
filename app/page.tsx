import BonusProgram from "./ui/BonusProgram";
import { Discount } from "./ui/Discount";
import Recent from "./ui/Recent";
import Recipe from "./ui/Recipe";
import Swipe from "./ui/Swipe";
import WorkProcess from "./ui/WorkProcess";
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
