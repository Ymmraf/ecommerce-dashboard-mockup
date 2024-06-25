'use client'

import Link from "next/link"
import { useState } from "react"

export default function Signup() {
    return (
        <>
            <main className="m-auto flex justify-center items-center text-coal h-[80vh] max-w-[800px]">
                <div className="w-11/12 bg-white p-8 rounded-2xl shadow-md relative">
                    <h1 className="font-semibold text-3xl text-center mb-8">Login</h1>
                    <form action="" className="">
                        <div className="mb-6">
                            <label className="block font-semibold" htmlFor="username">Username</label>
                            <input className="block w-full px-2 pt-2 pb-px rounded-xl outline-none" type="text" id="username" name="username" required/>
                            <hr className="bg-coal h-[1px]"/>
                        </div>
                        <div className="mb-2">
                            <label className="block font-semibold" htmlFor="password">Password</label>
                            <input className="block w-full px-2 pt-2 pb-px rounded-xl outline-none" type="password" id="password" name="password" required/>
                            <hr className="bg-coal h-[1px]"/>
                        </div>
                        <div>
                            <input id="remember" type="checkbox" />
                            <label className="ml-1 opacity-70" htmlFor="remember">Remember me</label> 
                        </div>
                        <div className="flex justify-center mb-2 mt-8">
                            <button className="text-lg font-semibold text-cream bg-leaf w-44 py-2 rounded-lg hover:scale-105 duration-300" type="button">Login</button>
                        </div>
                        <div className="flex gap-x-1 text-sm font-semibold justify-center mt-4">
                            <p className="text-coal opacity-70">Don't have and account? </p>
                            <Link className="text-blue-500 hover:underline" href="/signup">Sign up for free</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}