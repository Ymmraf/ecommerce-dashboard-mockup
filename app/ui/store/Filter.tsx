import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

export default function Filter({state, toggle} : {state: boolean, toggle: Function}) {
    return (
        <aside className={clsx("fixed z-40 left-0 top-0 w-4/5 h-full border-1 bg-cream border-coal border-px shadow-md",
            {
                "block" : state,
                "hidden" : !state
            }
        )}
        >
            <div className="pt-[61px]">
                <button onClick={() => toggle()} className="p-1 m-1 hover:bg-darkcream rounded-xl duration-300"><FontAwesomeIcon className="size-8 text-coal" icon={faXmark} /></button>
            </div>
            <div className="p-4">
                <div>
                    <p className="text-coal text-lg font-semibold mb-3">Type</p>
                    <ul className="flex gap-x-2">
                        <li><button className="px-4 py-2 text-coal border-[1px] rounded-xl border-coal hover:text-cream hover:bg-coal duration-300">Fresh fruit</button></li>
                        <li><button className="px-4 py-2 text-coal border-[1px] rounded-xl border-coal hover:text-cream hover:bg-coal duration-300">Dried fruit</button></li>
                    </ul>
                </div>
                <hr className="h-[2px] w-full bg-darkcream my-4"/>
                <div>
                    <p className="text-coal text-lg font-semibold mb-3">State</p>
                    <ul className="flex gap-x-2">
                        <li><button className="px-4 py-2 text-coal border-[1px] rounded-xl border-coal hover:text-cream hover:bg-coal duration-300">New addition</button></li>
                        <li><button className="px-4 py-2 text-coal border-[1px] rounded-xl border-coal hover:text-cream hover:bg-coal duration-300">Discount</button></li>
                    </ul>
                </div>
                <hr className="h-[2px] w-full bg-darkcream my-4"/>
                <div>
                    <p className="text-coal text-lg font-semibold mb-3">Sort by price</p>
                    <ul className="flex gap-x-2">
                        <li><button className="px-4 py-2 text-coal border-[1px] rounded-xl border-coal hover:text-cream hover:bg-coal duration-300">High to low</button></li>
                        <li><button className="px-4 py-2 text-coal border-[1px] rounded-xl border-coal hover:text-cream hover:bg-coal duration-300">Low to High</button></li>
                    </ul>
                </div>
                <hr className="h-[2px] w-full bg-darkcream my-4"/>
                <div>
                    <p className="text-coal text-lg font-semibold mb-3">Sort by name</p>
                    <ul className="flex gap-x-2 mb-6">
                        <li><button className="px-4 py-2 text-coal border-[1px] rounded-xl border-coal hover:text-cream hover:bg-coal duration-300">A - Z</button></li>
                        <li><button className="px-4 py-2 text-coal border-[1px] rounded-xl border-coal hover:text-cream hover:bg-coal duration-300">Z - A</button></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
