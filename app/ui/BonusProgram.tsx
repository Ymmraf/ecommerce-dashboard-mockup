import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function BonusProgram() {
    return (
        <>
          <section className="w-11/12 m-auto space-y-6">
            <div className="flex gap-x-3 mb-6">
              <FontAwesomeIcon className="text-coal text-3xl" icon={faMedal} />
              <h2 className="text-coal font-semibold text-2xl">Bonus program</h2>
            </div>
            <div className="bg-white p-6 rounded-2xl">
                <div className="flex justify-center mb-8">
                    <div className="size-32 rounded-full bg-tomato flex items-center justify-center">
                        <div>
                            <p className="text-center text-cream font-semibold text-4xl">5%</p>
                            <p className="text-center text-cream">Discount</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mb-10">
                    <p className="text-coal text-xl font-semibold">Level : 1</p>
                    <p className="text-coal text-xl font-semibold">Current : $324</p>
                </div>
                <div>
                    <div className="relative mb-2">
                      <div className="h-2 w-full bg-gray-300 z-10"></div>
                      <div className={`h-2 w-[65%] bg-tomato absolute top-0 z-20`}>
                        <div className="size-5 rounded-full bg-cream absolute -right-3 -top-[5px] border-4 border-tomato">
                          <p className="text-tomato font-semibold text-lg absolute text-center bottom-4 -left-4">$324</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-coal opacity-70 text-lg">0%</div>
                        <div className="text-coal opacity-70 text-lg">5%</div>
                        <div className="text-coal opacity-70 text-lg">10%</div>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
              <p className="font-semibold text-xl text-coal mb-4">Accumulative discount program for retail customers</p>
              <p className="text-lg text-coal">Our online store has an accumulation system of discounts for regular customers. Sign up and earn discount levels as your total purchases increase.</p>
              <div className="w-10/12 m-auto">
                <Link className="block text-center py-3 rounded-2xl font-semibold bg-coal text-cream duration-300 hover:scale-105" href="/">Sign up</Link>
              </div>
            </div>
          </section>
        </>
      );
}