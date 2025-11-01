import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../assets/heroImage2.png';
function HeroPage() {
  return (
    <section className="relative h-96 sm:h-[500px] md:h-[600px] w-full overflow-hidden rounded-t-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
      >
        <img src={Image1} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          Radiant Skin Starts Here
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-white mb-6 max-w-lg">
          Discover skincare solutions that are gentle, effective, and made with
          natural ingredients.
        </p>
        <div className="sm:flex-row">
          <Link
            to="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
