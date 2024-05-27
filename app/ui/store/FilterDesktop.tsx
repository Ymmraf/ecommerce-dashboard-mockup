import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { StoreFilter } from "@/type";

export default function FilterDesktop({
  currentFilter,
  handleClickFilter,
}: {
  currentFilter: StoreFilter;
  handleClickFilter: Function;
}) {
  return (
    <aside className="hidden w-5/6 max-w-[300px] text-coal font-semibold justify-between relative lg:flex">
      <div className="ml-8 fixed top-24">
        <h2 className="my-4  text-2xl">Filter</h2>
        <div className="text-lg space-y-8">
          <div>
            <p>Type</p>
            <ul>
              <li>
                <button
                  onClick={() => handleClickFilter({ filter: "type", value: "fresh" }) }
                  className="flex w-full gap-x-2 px-4 my-1 text-coal">
                  <div
                    className={clsx("size-6 border-[2px] rounded-lg border-coal", { "bg-leaf text-cream": currentFilter.type == "fresh", })}>
                      <p className="relative -top-1">
                        { currentFilter.type == "fresh" ? "✓" : ""}
                      </p>
                  </div>
                  Fresh fruit
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClickFilter({ filter: "type", value: "dried" }) }
                  className="flex w-full gap-x-2 px-4 my-1 text-coal">
                  <div
                    className={clsx("size-6 border-[2px] rounded-lg border-coal", { "bg-leaf text-cream": currentFilter.type == "dried", })}>
                      <p className="relative -top-1">
                        { currentFilter.type == "dried" ? "✓" : ""}
                      </p>
                  </div>
                  Dried fruit
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p>State</p>
            <ul>
              <li>
                <button
                  onClick={() => handleClickFilter({ filter: "state", value: "new" }) }
                  className="flex w-full gap-x-2 px-4 my-1 text-coal">
                  <div
                    className={clsx("size-6 border-[2px] rounded-lg border-coal", { "bg-leaf text-cream": currentFilter.state == "new", })}>
                      <p className="relative -top-1">
                        { currentFilter.state == "new" ? "✓" : ""}
                      </p>
                  </div>
                  New addition
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClickFilter({ filter: "state", value: "discount" }) }
                  className="flex w-full gap-x-2 px-4 my-1 text-coal">
                  <div
                    className={clsx("size-6 border-[2px] rounded-lg border-coal", { "bg-leaf text-cream": currentFilter.state == "discount", })}>
                      <p className="relative -top-1">
                        { currentFilter.state == "discount" ? "✓" : ""}
                      </p>
                  </div>
                  On sale
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p>Sort by price</p>
            <ul>
              <li>
                <button
                  onClick={() => handleClickFilter({ filter: "price", value: "desc" }) }
                  className="flex w-full gap-x-2 px-4 my-1 text-coal">
                  <div
                    className={clsx("size-6 border-[2px] rounded-lg border-coal", { "bg-leaf text-cream": currentFilter.price == "desc", })}>
                      <p className="relative -top-1">
                        { currentFilter.price == "desc" ? "✓" : ""}
                      </p>
                  </div>
                  High to low
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClickFilter({ filter: "price", value: "asc" }) }
                  className="flex w-full gap-x-2 px-4 my-1 text-coal">
                  <div
                    className={clsx("size-6 border-[2px] rounded-lg border-coal", { "bg-leaf text-cream": currentFilter.price == "asc", })}>
                      <p className="relative -top-1">
                        { currentFilter.price == "asc" ? "✓" : ""}
                      </p>
                  </div>
                  Low to high
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[2px] h-full bg-coal opacity-70 mr-8 absolute right-0"></div>
    </aside>
  );
}
