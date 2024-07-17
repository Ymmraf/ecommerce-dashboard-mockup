import Breadcrumbs from "../ui/Breadcrumbs";
import Footer from "../ui/Footer";

export default function Contact() {
  return (
    <>
      <main className="w-11/12 m-auto min-h-[60vh]">
        <Breadcrumbs nav={["Contact"]} />
        <h1 className="text-coal text-3xl font-semibold">Contact</h1>
        <section className="space-y-8">
            <div className="text-coal">
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <p className="mb-2"><span className="font-semibold">Email</span> : pheranatlor@gmail.com</p>
                <p><span className="font-semibold">Tel</span> : 08-0512-2929</p>
            </div>
            <div className="text-coal">
                <h2 className="text-xl font-semibold mb-4">About me</h2>
                <p className="mb-2 tracking-wide text-justify">My interest in programming and web development has grown steadily since I developed my first static website for my family business</p>
                <p className="mb-2 tracking-wide text-justify">It&apos;s motivated me to seriously study the principles, and now I&apos;m focusing on applying my knowledge in a professional setting. I&apos;m particularly interested in building creative products to solve everyday problems.</p>
                <p className="mb-2 tracking-wide text-justify">In my free time, I enjoy planting trees, petting my cat and playing badminton.</p>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}