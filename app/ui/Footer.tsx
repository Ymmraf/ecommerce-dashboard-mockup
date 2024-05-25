import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="pt-20 mt-8 bg-[#e0ddda] text-coal
        lg:py-8
        ">
            <div className="w-4/5 m-auto space-y-12
            lg:grid lg:grid-cols-3 lg:gap-x-8">

                <div className="lg:flex lg:items-center">
                    <div className="lg:w-full">
                        <p className="font-bold text-xl mb-2">Get our newsletter:</p>
                        <div className="flex w-11/12 m-auto">
                            <input type="email" placeholder="Your email" className="w-full p-2 rounded-l-xl"/>
                            <button className="w-12 bg-coal rounded-r-xl text-cream font-bold hover:text-xl duration-300">✓</button>
                        </div>
                        <div className="flex justify-center gap-x-8 underline cursor-pointer opacity-70 mt-4">
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>

                <div className="md:grid md:grid-cols-3 md:text-center">
                    <div>
                        <p className="text-xl font-semibold my-4">Company</p>
                        <ul className="flex gap-x-8 mb-4 md:block md:space-y-2 opacity-70">
                            <li><Link href="/about" className="hover:underline">About</Link></li>
                            <li><Link href="/store" className="hover:underline">Store</Link></li>
                            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                        </ul>
                    </div>
                    <hr className="h-[2px] bg-darkcream w-full md:hidden"/>
                    <div>
                        <p className="text-xl font-semibold my-4">Service</p>
                        <ul className="flex gap-x-8 mb-4 md:block md:space-y-2 opacity-70">
                            <li><Link href="/" className="hover:underline">Delivery</Link></li>
                            <li><Link href="/" className="hover:underline">Payment</Link></li>
                            <li><Link href="/contact" className="hover:underline">Contacts</Link></li>
                        </ul>
                    </div>
                    <hr className="h-[2px] bg-darkcream w-full md:hidden"/>
                    <div>
                        <p className="text-xl font-semibold my-4">Follow us</p>
                        <ul className="flex gap-x-8 mb-4 md:block md:space-y-2 opacity-70">
                            <li><Link href="/" className="hover:underline">Instagram</Link></li>
                            <li><Link href="/" className="hover:underline">Facebook</Link></li>
                            <li><Link href="/" className="hover:underline">Twitter</Link></li>
                        </ul>
                    </div>
                    <hr className="h-[2px] bg-darkcream w-full md:hidden"/>
                </div>

                <div className="space-y-6">
                    <div className="w-3/5 m-auto md:w-2/5">
                        <Image 
                            src={'/Freshy Logo.png'}
                            alt="logo"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="text-center">
                        <p className="font-semibold">Eco Food Market</p>
                        <p className="font-semibold mb-6">Freshy Goods Ltd.</p>
                        <p className="opacity-50 pb-6">2024 © All rights reserved</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}