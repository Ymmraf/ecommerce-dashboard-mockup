'use client'
import { CartProduct } from "@/type";

export default function CheckoutButton({submitData,handleSubmit,productInCart,pressed}: {pressed: Boolean, submitData: Function;handleSubmit: Function;productInCart: CartProduct[];}) {
    return (
        <>
            {
                pressed ? 
                <button className="w-full text-cream bg-darkcream font-semibold py-4 px-20 rounded-lg">Processing...</button>
                :
                <button className="w-full text-cream bg-leaf font-semibold py-4 px-20 rounded-lg" onClick={() => submitData(handleSubmit(), productInCart)} >Purchase</button>
            }
        </>
    )
}        


