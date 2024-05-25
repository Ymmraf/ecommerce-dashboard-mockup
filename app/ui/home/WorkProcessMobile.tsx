import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faWheatAwn, faSeedling, faTruck, faCube } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function WorkProcessMobile() {
  return (
    <section className="w-11/12 m-auto text-coal lg:hidden">
      <div className="flex gap-x-3 mb-6 font-semibold">
        <FontAwesomeIcon className="text-3xl" icon={faWheatAwn} />
        <h2 className="text-2xl">How we work</h2>
      </div>

      <div className="space-y-8">
        
        <div className="grid grid-cols-3">
          <div className="flex justify-center items-center">
            <FontAwesomeIcon className="size-16" icon={faSeedling} />
          </div>
          <div className="relative">
            <h3 className="text-xl mb-2">Gathering</h3>
            <p>Picking fresh plants from all over the world.</p>
          </div>
          <div className="flex justify-start items-end relative top-8 -left-2">
            <Image
              className="w-24 h-24"
              src={"/arrow.png"}
              alt="an arrow"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex justify-center items-end relative left-4 top-6">
            <Image
              className="w-24 h-24"
              src={"/arrow-flip.png"}
              alt="an arrow"
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon className="size-16" icon={faTruck} />
          </div>
          <div>
            <h3 className="text-xl mb-2">Transportation</h3>
            <p>Select the best and transport to our base.</p>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex justify-center items-center">
            <FontAwesomeIcon className="size-16" icon={faCube} />
          </div>
          <div className="relative">
            <h3 className="text-xl mb-2">Packaging</h3>
            <p>Carefully pack your order in ecological packaging.</p>
          </div>
          <div className="flex justify-start items-end relative top-8 -left-2">
            <Image
              className="w-24 h-24"
              src={"/arrow.png"}
              alt="an arrow"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div>
          </div>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon className="size-16" icon={faMapLocationDot} />
          </div>
          <div>
            <h3 className="text-xl mb-2">Delivery</h3>
            <p>We can delivery any product within five business days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
