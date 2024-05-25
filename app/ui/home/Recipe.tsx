import Link from "next/link";
import Image from "next/image";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Recipe() {
  return (
    <>
      <section className="w-11/12 m-auto mb-12">
        <div className="flex gap-x-3 mb-6 text-coal font-semibold">
          <FontAwesomeIcon className="text-3xl" icon={faUtensils} />
          <h2 className="text-2xl">What to cook ?</h2>
        </div>

        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-[2fr,1fr] lg:gap-x-4 lg:h-[400px]">

          <div className="grid grid-cols-1 gap-y-4 
          md:grid-cols-2 md:gap-x-4">
            <div className="p-8 bg-red-100 rounded-2xl flex justify-center 
            sm:gap-x-8
            lg:block
            ">
              <div className="flex justify-center w-[150px] h-[150px] lg:hidden">
                <Image
                  className="opacity-85 rounded-full size-36"
                  src="/fruits/watermelon-recipe.jpg"
                  alt="watermelon"
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <div className="text-center">
                  <h3 className="text-tomato text-2xl font-semibold">
                    Watermelon
                  </h3>
                  <p className="text-coal text-lg opacity-80">
                    Recipes with Polawat
                  </p>
                </div>
                <div className="hidden
                lg:flex lg:justify-center lg:mt-8">
                  <Image
                    className="opacity-85 rounded-full size-36"
                    src="/fruits/watermelon-recipe.jpg"
                    alt="watermelon"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <Link
                    href="/"
                    className="text-center text-tomato py-3 px-6 border border-red-400 rounded-2xl hover:text-cream hover:bg-red-400 duration-300"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-8 bg-blue-200 rounded-2xl flex justify-center 
            sm:gap-x-8
            lg:block
            ">
              <div className="flex justify-center w-[150px] h-[150px] lg:hidden">
                <Image
                  className="opacity-85 rounded-full size-36"
                  src="/fruits/blueberry-recipe.jpg"
                  alt="asparagus"
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <div>
                  <h3 className="text-blue-700 text-2xl font-semibold text-center">
                    Blueberry
                  </h3>
                  <p className="text-coal text-lg opacity-80 text-center">
                    Recipes with Sinramon
                  </p>
                </div>
                <div className="hidden
                lg:flex lg:justify-center lg:mt-8">
                  <Image
                    className="opacity-85 rounded-full size-36"
                    src="/fruits/blueberry-recipe.jpg"
                    alt="watermelon"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <Link
                    href="/"
                    className="text-center text-blue-700 py-3 px-6 border border-blue-800 rounded-2xl hover:text-cream hover:bg-blue-800 duration-300"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="p-8 bg-leaf rounded-2xl">
              <div className="text-cream md:text-center">
                  <p className="text-2xl font-bold mb-2">200 +</p>
                  <p className="text-lg font-semibold mb-8">Healthy recipes</p>
              </div>
              <div className="flex md:justify-center">
                  <Link className="w-2/5 block text-center border border-cream text-cream py-2 rounded-xl duration-300 hover:bg-cream hover:text-leaf" href="/">View all</Link>
              </div>
            </div>
            <div className="bg-cream rounded-2xl mt-4 py-8 px-12 space-y-4 border-[2px] border-coal">
                <p className="text-center text-coal font-bold text-xl">Don't miss new post</p>
                <input className="w-full px-2 py-2 rounded-lg" type="email" placeholder="Your email"/>
                <button className="inline-block w-full bg-coal py-2 rounded-lg text-cream font-semibold" type="button">Subscribe now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
