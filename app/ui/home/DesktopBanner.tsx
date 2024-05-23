import Image from "next/image";

export default function DesktopBanner() {
    return (
        <section className="hidden w-11/12 m-auto lg:grid lg:grid-cols-[2fr,1fr] lg:gap-x-4">
            <div className="relative">
                <Image
                    className="w-full rounded-2xl"
                    src="/desktop-banner-2.jpg"
                    alt="desktop banner"
                    width={1000}
                    height={500}
                />
            </div>
            <div>
                <Image
                    className="w-full rounded-2xl"
                    src="/mobile-slide-2.jpg"
                    alt="desktop banner 2"
                    width={300}
                    height={300}
                />
            </div>
        </section>
    )
}