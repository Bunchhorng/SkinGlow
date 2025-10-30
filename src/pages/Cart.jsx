import React from "react";
import { useCart } from "../context/ContextCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, checkoutCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
  const result = checkoutCart();
  if (result.success) {
    Swal.fire({
      title: "Purchase Successful!",
      text: `Total: $${result.orderData.totalAmount}\nThank you for your order!`,
      icon: "success",
      confirmButtonColor: "#10B981",
      timer: 2500,
      timerProgressBar: true,
    });
  } else {
    Swal.fire({
      title: "Cart is Empty",
      text: "Please add some products first!",
      icon: "warning",
      confirmButtonColor: "#F59E0B",
    });
  }
};
  return (
    <div className="max-w-5xl mx-auto px-6 my-25">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-800">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">Your cart is empty.</p>
          <Link
            to="/products"
            className="inline-block bg-emerald-500 text-white font-medium px-6 py-3 rounded-full hover:bg-emerald-600 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white shadow-md rounded-2xl p-5"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.selectedImage || item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl border"
                />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">
                    {item.name}
                  </h3>
                  <p className="text-slate-600">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => removeFromCart(item.id, item.selectedImage)}
                  className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors"
                >
                  -
                </button>
                <span className="font-semibold text-slate-800">{item.qty}</span>
                <button
                  onClick={() =>
                    addToCart({
                      ...item,
                      selectedImage: item.selectedImage,
                    })
                  }
                  className="bg-emerald-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t pt-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button
                onClick={clearCart}
                className="px-6 py-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all font-medium"
              >
                Clear Cart
              </button>
              <button onClick={handleCheckout}
               className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all font-medium">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
