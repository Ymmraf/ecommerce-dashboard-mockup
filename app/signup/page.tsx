'use client'

import { useState } from "react"

export default function Signup() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [validatePassword, setValidatePassword] = useState(true)

    function handleChangePassword(event : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        if(name === "password") {
            setPassword(value)
            console.log(password)
        } else if (name === "confirm-password") {
            setConfirmPassword(value)
            console.log(confirmPassword)
        }
    }

    function validateFunction(passwordString: string, confirmPasswordString: string) {
        if(passwordString == confirmPasswordString) {
            return
        } else {
            setValidatePassword(false)
        }
    }

    return (
        <>
            <main className="w-11/12 m-auto flex justify-center items-center text-coal h-[80vh] max-w-[800px]">
                <div className="w-11/12 bg-white p-8 rounded-2xl shadow-md relative">
                    <h1 className="font-semibold text-3xl text-center mb-8">Create account</h1>
                    <form action="" className="">
                        <div className="mb-6">
                            <label className="block font-semibold" htmlFor="username">Username</label>
                            <input className="block w-full px-2 pt-2 pb-px rounded-xl outline-none" type="text" id="username" name="username" required/>
                            <hr className="bg-coal h-[1px]"/>
                        </div>
                        <div className="mb-6">
                            <label className="block font-semibold" htmlFor="password">Password</label>
                            <input className="block w-full px-2 pt-2 pb-px rounded-xl outline-none" type="password" id="password" name="password" required onChange={handleChangePassword}/>
                            <hr className="bg-coal h-[1px]"/>
                        </div>
                        <div className="mb-6">
                            <label className="block font-semibold" htmlFor="confirm-password">Confirm password</label>
                            <input className="block w-full px-2 pt-2 pb-px rounded-xl outline-none" type="password" id="confirm-password" name="confirm-password" required onChange={handleChangePassword}/>
                            <hr className="bg-coal h-[1px]"/>
                        </div>
                        <div className="mb-6">
                            <input className="text-leaf w-4 h-4" type="checkbox" required/>
                            <label className="text-sm opacity-70 ml-2 relative -top-[2px]" htmlFor="remember">I have read and accepted the terms and conditions of this website.</label>
                        </div>
                        <div className="flex justify-center mb-4">
                            <button className="text-lg font-semibold text-cream bg-leaf w-44 py-2 rounded-lg hover:scale-105 duration-300" type="submit" onClick={() => validateFunction}>Create account</button>
                        </div>
                        <div>
                            <p className="text-tomato text-center text-sm">{ !validatePassword && "Password and Confirm password are not matched."}</p>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}