import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="pt-20 mt-8 bg-[#e0ddda]">
            <div className="w-4/5 m-auto space-y-12">
            <div>
                <p className="text-coal font-bold text-xl mb-2">Get our newsletter:</p>
                <div className="flex w-11/12 m-auto">
                    <input type="email" placeholder="Your email" className="w-full p-2 rounded-l-xl"/>
                    <button className="w-12 bg-coal rounded-r-xl text-cream font-bold">✓</button>
                </div>
            </div>
            <div>
                <div>
                    <p className="text-coal text-xl font-semibold my-4">Company</p>
                    <ul className="flex gap-x-8 mb-4">
                        <li><Link href="/about" className="text-coal font-regular opacity-70 hover:underline">About</Link></li>
                        <li><Link href="/store" className="text-coal font-regular opacity-70 hover:underline">Store</Link></li>
                        <li><Link href="/faq" className="text-coal font-regular opacity-70 hover:underline">FAQ</Link></li>
                    </ul>
                </div>
                <hr className="h-[2px] bg-darkcream w-full"/>
                <div>
                    <p className="text-coal text-xl font-semibold my-4">Service</p>
                    <ul className="flex gap-x-8 mb-4">
                        <li><Link href="/delivery" className="text-coal font-regular opacity-70 hover:underline">Delivery</Link></li>
                        <li><Link href="/payment" className="text-coal font-regular opacity-70 hover:underline">Payment</Link></li>
                        <li><Link href="/contact" className="text-coal font-regular opacity-70 hover:underline">Contacts</Link></li>
                    </ul>
                </div>
                <hr className="h-[2px] bg-darkcream w-full"/>
                <div>
                    <p className="text-coal text-xl font-semibold my-4">Follow us</p>
                    <ul className="flex gap-x-8 mb-4">
                        <li><Link href="/" className="text-coal font-regular opacity-70 hover:underline">Instagram</Link></li>
                        <li><Link href="/" className="text-coal font-regular opacity-70 hover:underline">Facebook</Link></li>
                        <li><Link href="/" className="text-coal font-regular opacity-70 hover:underline">Twitter</Link></li>
                    </ul>
                </div>
                <hr className="h-[2px] bg-darkcream w-full"/>
            </div>
            <div className="space-y-6">
                <div className="w-3/5 m-auto">
                    <Image 
                        src={'/Freshy Logo.png'}
                        alt="logo"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <p className="text-center text-coal font-semibold">Eco Food Market</p>
                    <p className="text-center text-coal font-semibold mb-6">Freshy Goods Ltd.</p>
                    <p className="text-center text-coal opacity-50 pb-6">2024 © All rights reserved</p>
                </div>
            </div>
            </div>
        </footer>
    )
}