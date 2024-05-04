import { Discount } from "./ui/Discount";
import Recipe from "./ui/Recipe";
import Swipe from "./ui/Swipe";

export default function Home() {
  return (
    <main className="z-0 space-y-12">
      <Swipe />
      <Discount />
      <Recipe />
    </main>
  );
}
