import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

export default function Recent() {
  return (
    <>
      <section className="w-11/12 m-auto">
        <div className="flex gap-x-3 mb-6">
          <FontAwesomeIcon className="text-coal text-3xl" icon={faStore} />
          <h2 className="text-coal font-semibold text-2xl">New additions</h2>
        </div>
      </section>
    </>
  );
}
