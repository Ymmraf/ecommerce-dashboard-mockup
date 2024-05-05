import BonusProgram from "./ui/BonusProgram";
import { Discount } from "./ui/Discount";
import Recent from "./ui/Recent";
import Recipe from "./ui/Recipe";
import Swipe from "./ui/Swipe";

export default function Home() {
  return (
    <main className="z-0 space-y-12">
      <Swipe />
      <Discount />
      <Recipe />
      <BonusProgram />
      <Recent />
    </main>
  );
}
