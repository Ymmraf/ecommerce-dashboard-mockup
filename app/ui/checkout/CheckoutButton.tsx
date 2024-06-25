'use client'
import { useFormStatus } from "react-dom";
import { CartProduct } from "@/type";

export default function CheckoutButton({submitData,handleSubmit,productInCart,}: {submitData: Function;handleSubmit: Function;productInCart: CartProduct[];}) {
    const { pending } = useFormStatus()
    return (
        <>
            {
                pending ? 
                <button className="w-full text-cream bg-darkcream font-semibold py-4 px-20 rounded-lg">Processing...</button>
                :
                <button className="w-full text-cream bg-leaf font-semibold py-4 px-20 rounded-lg" onClick={() => submitData(handleSubmit(), productInCart)} >Purchase</button>
            }
        </>

    )
}        


