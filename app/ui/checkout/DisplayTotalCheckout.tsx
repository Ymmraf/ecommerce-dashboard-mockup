export default function DisplayTotalCheckout({totalProductPrice, deliveryFee, totalPrice} : {totalProductPrice : number, deliveryFee : number, totalPrice : number}) {
    return (
        <div className="mt-8 bg-white p-4 rounded-xl">
              <div className="flex justify-between mb-2">
                <p className="text-coal">Subtotal:</p>
                <p className="text-coal">${totalProductPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-coal">Delivery:</p>
                <p className="text-coal">${deliveryFee.toFixed(2)}</p>
              </div>
              <div className="h-px w-full bg-coal my-6"></div>
              <div className="flex justify-between mb-2">
                <p className="text-coal text-xl font-bold">Total:</p>
                <p className="text-coal text-xl">${totalPrice.toFixed(2)}</p>
              </div>
        </div>
    )
}