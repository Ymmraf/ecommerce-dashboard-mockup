import Link from "next/link";
import Image from "next/image";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Recipe() {
  return (
    <>
      <section className="w-11/12 m-auto">
        <div className="flex gap-x-3 mb-6">
          <FontAwesomeIcon className="text-coal text-3xl" icon={faUtensils} />
          <h2 className="text-coal font-semibold text-2xl">What to cook ?</h2>
        </div>
        <div className="space-y-4">
          <div className="p-8 bg-red-100 rounded-2xl flex">
            <div className="flex justify-center w-[150px] h-[150px]">
              <Image
                className="opacity-85 rounded-full size-36"
                src="/fruits/watermelon-recipe.jpg"
                alt="watermelon"
                width={150}
                height={150}
              />
            </div>
            <div>
              <div>
                <h3 className="text-tomato text-2xl font-semibold text-center">
                  Watermelon
                </h3>
                <p className="text-coal text-lg opacity-80 text-center">
                  Recipes with Polawat
                </p>
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
          <div className="p-8 bg-emerald-200 rounded-2xl flex">
            <div className="flex justify-center">
              <Image
                className="opacity-85"
                src="/fruits/asparagus.png"
                alt="asparagus"
                width={150}
                height={150}
              />
            </div>
            <div>
              <div>
                <h3 className="text-leaf text-2xl font-semibold text-center">
                  Asparagus
                </h3>
                <p className="text-coal text-lg opacity-80 text-center">
                  Recipes with Sinramon
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <Link
                  href="/"
                  className="text-center text-leaf py-3 px-6 border border-emerald-800 rounded-2xl hover:text-cream hover:bg-emerald-800 duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="p-8 bg-leaf rounded-2xl">
            <div>
                <p className="text-cream text-2xl font-bold mb-2">200 +</p>
                <p className="text-cream text-lg font-semibold mb-8">Healthy recipes</p>
            </div>
            <div className="w-2/5 ">
                <Link className="w-full block text-center border border-cream text-cream py-2 rounded-xl hover:bg-cream hover:text-leaf" href="/">View all</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
