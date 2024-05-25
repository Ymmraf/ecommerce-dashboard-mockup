import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function BonusProgram() {
    return (
        <>
          <section className="w-11/12 m-auto space-y-6">
            <div className="flex gap-x-3 mb-6 text-coal font-semibold">
              <FontAwesomeIcon className="text-3xl" icon={faMedal} />
              <h2 className="text-2xl">Bonus program</h2>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-4">
              <div className="bg-white p-6 rounded-2xl mb-6">
                  <div className="flex justify-center mb-8">
                      <div className="flex items-center justify-center size-32 rounded-full bg-tomato">
                          <div className="text-center text-cream">
                              <p className="font-semibold text-4xl">5%</p>
                              <p>Discount</p>
                          </div>
                      </div>
                  </div>
                  <div className="flex justify-between mb-10 text-coal text-xl font-semibold">
                      <p>Level : 1</p>
                      <p>Current : $324</p>
                  </div>
                  <div>
                      <div className="relative mb-2">
                        <div className="h-2 w-full bg-gray-300 z-10"></div>
                        <div className="h-2 w-[65%] bg-tomato absolute top-0 z-20">
                          <div className="size-5 rounded-full bg-cream absolute -right-3 -top-[5px] border-4 border-tomato">
                            <p className="text-tomato font-semibold text-lg text-center absolute bottom-4 -left-4">$324</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between text-coal opacity-70 text-lg">
                          <p>0%</p>
                          <p>5%</p>
                          <p>10%</p>
                      </div>
                  </div>
              </div>
              <div className="md:text-center md:flex md:items-center">
                <div className="space-y-6">
                  <div className="text-coal">
                    <p className="font-semibold text-xl mb-4">Accumulative discount program for retail customers</p>
                    <p className="text-lg">Our online store has an accumulation system of discounts for regular customers. Sign up and earn discount levels as your total purchases increase.</p>
                  </div>
                  <div className="w-10/12 m-auto">
                    <Link className="block text-center font-semibold text-cream py-3 rounded-2xl bg-coal hover:scale-105 duration-300" href="/signup">Sign up</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
}