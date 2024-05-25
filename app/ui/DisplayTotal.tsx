export default function DisplayTotal({subTotal, deliveryFee, total} : {subTotal : number, deliveryFee : number, total : number}) {
    return (
        <div className="text-coal">
              <h2 className="text-xl font-semibold mb-4">
                Your Order
              </h2>
              <div className="flex justify-between mb-2">
                <p>Subtotal:</p>
                <p>${subTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Delivery:</p>
                <p>${deliveryFee.toFixed(2)}</p>
              </div>
              <div className="h-px w-full bg-coal my-6"></div>
              <div className="flex justify-between mb-2 text-xl">
                <p className="font-bold">Total:</p>
                <p>${total.toFixed(2)}</p>
              </div>
        </div>
    )
}