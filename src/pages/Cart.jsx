import React from "react";
import { useCart } from "../context/ContextCart";
import Swal from "sweetalert2";

function Cart() {
  const { cartItems, addToCart, removeFromCart, buyCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="text-center text-gray-500 text-xl py-50 text-[50px]">Your cart is empty</h2>;
  }

  const handleBuy = () => {
    buyCart();
    Swal.fire({
    title: "Purchase Successful!",
    text: "Thank you for your order!",
    icon: "success",
    confirmButtonColor: "#10B981",
    timer: 2000,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
  };

  return (
    <div className="max-w-4xl mx-auto my-16 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id + item.selectedImage} // unique for same product with different images
            className="flex justify-between items-center p-4 border rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image + Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.selectedImage || item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-emerald-600 font-bold">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 font-semibold transition-colors"
              >
                -
              </button>
              <span className="px-2 font-semibold text-gray-800">{item.qty}</span>
              <button
                onClick={() => addToCart({ ...item, image: item.selectedImage })}
                className="bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600 font-semibold transition-colors"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Buy */}
      <div className="mt-8 flex justify-between items-center p-4 bg-amber-50 rounded-xl shadow-sm">
        <p className="text-lg font-semibold text-gray-800">
          Total: <span className="text-emerald-600">${totalPrice.toFixed(2)}</span>
        </p>
        <button
          onClick={handleBuy}
          className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 font-bold transition-transform hover:scale-105"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cart;
