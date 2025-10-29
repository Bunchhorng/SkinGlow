import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/ContextCart";
import { FaArrowLeft } from "react-icons/fa";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((pro) => pro.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.image);
  const { addToCart } = useCart();

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, selectedImage: mainImage });
  };

  return (
    <div className="max-w-6xl mx-auto my-16 px-6 flex flex-col lg:flex-row gap-10 shadow-xl p-3 rounded-2xl">
      {/* Left: Images */}
      <div className="flex-1">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex gap-4 mt-4 justify-center lg:justify-start">
          {[product.image, product.image1, product.image2, product.image3].map(
            (img, index) =>
              img && (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name}-${index}`}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all ${
                    mainImage === img
                      ? "border-emerald-500"
                      : "border-gray-300 hover:border-emerald-500"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              )
          )}
        </div>
      </div>

      {/* Right: Info */}
      <div className="flex-1 flex flex-col justify-center p-4 lg:p-0">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
        <p className="text-emerald-600 text-3xl lg:text-4xl font-bold mb-8">${product.price.toFixed(2)}</p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-300 transition-transform hover:scale-105"
          >
            Add to Cart
          </button>

          <Link
            to="/products"
            className="text-emerald-600 flex items-center font-semibold underline-offset-4 hover:underline hover:text-emerald-700 transition-colors gap-2"
          >
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
