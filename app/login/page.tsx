import Link from "next/link";

export default function Login() {
    return (
        <>
            <main className="w-11/12 m-auto flex justify-center items-center text-coal h-[80vh]">
                <div className="w-11/12 bg-white p-8 rounded-2xl shadow-md">
                    <h1 className="font-semibold text-3xl text-center mb-8">Login</h1>
                    <form action="" className="">
                        <div className="mb-6">
                            <label className="block font-semibold" htmlFor="username">Username</label>
                            <input className="block w-full px-2 pt-2 pb-px rounded-xl outline-none" type="text" id="username" name="username" required/>
                            <hr className="bg-coal h-[1px]"/>
                        </div>
                        <div className="mb-6">
                            <label className="block font-semibold" htmlFor="password">Password</label>
                            <input className="block w-full px-2 pt-2 pb-px rounded-xl outline-none" type="password" id="password" name="password" required/>
                            <hr className="bg-coal h-[1px]"/>
                        </div>
                        <div className="mb-6">
                            <input className="text-leaf w-4 h-4" type="checkbox" />
                            <label className="text-sm opacity-70 ml-2 relative -top-[2px]" htmlFor="remember">Remember me</label>
                        </div>
                        <div className="flex justify-center mb-4">
                            <button className="text-lg font-semibold text-cream bg-leaf w-32 py-1 rounded-lg hover:scale-105 duration-300">Login</button>
                        </div>
                    </form>
                    <div className="flex justify-center">
                        <p className="text-sm">Don't have account ?</p>
                        <Link className="text-sm ml-2 text-leaf font-semibold hover:underline" href="/signup">Sign up for free</Link>
                    </div>
                </div>
            </main>
        </>
    )
}