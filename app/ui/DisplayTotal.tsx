export default function DisplayTotal({subTotal, deliveryFee, total} : {subTotal : number, deliveryFee : number, total : number}) {
    return (
        <div>
              <h2 className="text-xl font-semibold text-coal mb-4">
                Your Order
              </h2>
              <div className="flex justify-between mb-2">
                <p className="text-coal">Subtotal:</p>
                <p className="text-coal">${subTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-coal">Delivery:</p>
                <p className="text-coal">${deliveryFee.toFixed(2)}</p>
              </div>
              <div className="h-px w-full bg-coal my-6"></div>
              <div className="flex justify-between mb-2">
                <p className="text-coal text-xl font-bold">Total:</p>
                <p className="text-coal text-xl">${total.toFixed(2)}</p>
              </div>
        </div>
    )
}