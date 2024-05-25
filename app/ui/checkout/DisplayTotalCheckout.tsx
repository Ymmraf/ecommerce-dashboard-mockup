export default function DisplayTotalCheckout({totalProductPrice, deliveryFee, totalPrice} : {totalProductPrice : number, deliveryFee : number, totalPrice : number}) {
    return (
        <div className="mt-8 bg-white p-4 rounded-xl text-coal">
              <div className="flex justify-between mb-2">
                <p>Subtotal:</p>
                <p>${totalProductPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Delivery:</p>
                <p>${deliveryFee.toFixed(2)}</p>
              </div>
              <div className="h-px w-full bg-coal my-6"></div>
              <div className="flex justify-between mb-2 text-xl">
                <p className="font-bold">Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
        </div>
    )
}