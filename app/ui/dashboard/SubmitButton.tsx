'use client'

import { useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <div className="flex justify-center my-8">
            {
                pending ? 
                <button type="submit" className="text-cream bg-leaf py-2 w-40 rounded-lg opacity-70" disabled>
                    Saving...
                </button>
                :
                <button type="submit" className="text-cream bg-leaf py-2 w-40 rounded-lg hover:scale-105 duration-300">
                    Save change
                </button>
            }
            
        </div>
    )
}