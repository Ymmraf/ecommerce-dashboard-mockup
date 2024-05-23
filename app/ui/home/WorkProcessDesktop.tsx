import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faWheatAwn, faSeedling, faTruck, faCube } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function WorkProcessDesktop() {
  return (
    <section className="hidden w-11/12 m-auto lg:block">
      <div className="flex gap-x-3 mb-6">
        <FontAwesomeIcon className="text-coal text-3xl" icon={faWheatAwn} />
        <h2 className="text-coal font-semibold text-2xl">How we work</h2>
      </div>

      <div className="grid grid-cols-4 gap-x-8 min-h-40 w-11/12 m-auto mt-12">

        <div className="flex gap-x-4">
          <div className="text-coal">
            <FontAwesomeIcon className="size-16" icon={faSeedling} />
          </div>
          <div className="text-coal">
                <h3 className="text-xl mb-2">Gathering</h3>
                <p>Picking fresh plants from all over the world.</p>
          </div>
        </div>

        <div className="flex gap-x-4 items-end relative">
            <div className="text-coal">
                <FontAwesomeIcon className="size-16" icon={faTruck} />
            </div>
            <div className="text-coal">
                <h3 className="text-xl mb-2">Transportation</h3>
                <p>Select the best and transport to our base.</p>
            </div>
            <Image
                className="absolute -top-2 -left-8 -rotate-[30deg]"
                src="/arrow.png"
                alt="an arrow"
                width={100}
                height={100}
            />
        </div>

        <div className="flex gap-x-4 relative">
          <div className="text-coal">
            <FontAwesomeIcon className="size-16" icon={faCube} />
          </div>
          <div className="text-coal relative">
            <h3 className="text-xl mb-2">Packaging</h3>
            <p>Carefully pack your order in ecological packaging.</p>
          </div>
          <Image
                className="absolute -bottom-2 -left-8 rotate-[210deg]"
                src="/arrow-flip.png"
                alt="an arrow"
                width={100}
                height={100}
            />
        </div>

        <div className="flex gap-x-4 items-end relative">
          <div className="text-coal">
            <FontAwesomeIcon className="size-16" icon={faMapLocationDot} />
          </div>
          <div className="text-coal">
            <h3 className="text-xl mb-2">Delivery</h3>
            <p>We can delivery any product within five business days.</p>
          </div>
          <Image
                className="absolute -top-2 -left-8 -rotate-[30deg]"
                src="/arrow.png"
                alt="an arrow"
                width={100}
                height={100}
            />
        </div>
      </div>
    </section>
  );
}
