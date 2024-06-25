import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

export default function SuccessPage() {
    return (
    <main className="h-[83vh] flex justify-center items-center text-center">
      <div className="w-4/5 m-auto">
        <div className="size-20 m-auto mb-8 text-leaf">
          <FontAwesomeIcon icon={faCircleCheck} className="size-20"/>
        </div>
        <p className="text-coal text-4xl font-bold mb-2">Success!</p>
        <h1 className="text-coal text-2xl font-light">Your order has been placed.</h1>
        <div className="flex justify-center">
          <Link href="/" className="w-48 p-3 bg-leaf text-cream font-semibold rounded-xl mt-8 hover:scale-105 duration-300">Back to homepage</Link>
        </div>
      </div>
    </main>
    )
}