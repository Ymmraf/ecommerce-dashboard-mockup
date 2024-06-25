import Breadcrumbs from "../ui/Breadcrumbs";
import Image from "next/image";
import Footer from "../ui/Footer";

export default function About() {
  return (
    <>
      <main className="container mx-auto lg:mb-20">
        <Breadcrumbs nav={["About"]} />
        <h1 className="text-coal text-3xl font-semibold">About</h1>
        <section>
          <figure className="w-3/5 m-auto my-8 lg:flex lg:justify-center">
            <Image
              src="/Freshy Logo.png"
              alt="Freshy Logo"
              width={500}
              height={500}
            />
          </figure>
          <article className="space-y-8 text-coal">
            <div>
              <h2 className="text-xl font-semibold">Overall</h2>
              <p className="tracking-wide mt-2 text-justify">
                Freshy Market is a fictional online grocery store. The main goal
                of this project is to create a simple and user-friendly
                E-commerce website.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Features</h2>
              <p className="tracking-wide mt-2 text-justify">
                The site has a page for both Customer and Seller
              </p>
              <p className="tracking-wide mt-2 text-justify">
                On the customer side, users can view, select, filter and add
                products to their cart. They can freely increase and decrease
                quantity of their order before paying
              </p>
              <p className="tracking-wide mt-2 text-justify">
                On the seller side, seller can view and manage each orders. The
                site also offer dashboard page to visualize the sales of a
                certain product in a period of time.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Tech use</h2>
              <p className="tracking-wide mt-2 text-justify">
                Most part of the application, Freshy Market is built by <span className="font-semibold">&apos;Next JS&apos;</span> framework and styling with <span className="font-semibold">&apos;Tailwind CSS&apos;</span>, being deployed on <span className="font-semibold">&apos;Vercel&apos;</span> and using <span className="font-semibold">&apos;Vercel PostreSQL&apos;</span> as database.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
