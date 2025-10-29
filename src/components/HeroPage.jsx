import React from "react";
import heroImage from "../assets/Heropage.png";
import heroImage2 from "../assets/heroImage.png";
import { Link } from "react-router-dom";

function HeroPage() {
  return (
    <section className="relative bg-emerald-400 overflow-hidden rounded-t-[20px]">
      <img
        src={heroImage}
        alt="Skincare hero"
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 drop-shadow-lg leading-tight">
            Radiant Skin,{" "}
            <br className="hidden md:block" /> Timeless Beauty
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Explore our exclusive skincare line crafted to nourish, protect,
            and glow — because you deserve flawless confidence every day.
          </p>
          <button className="bg-white text-emerald-600 font-bold px-8 sm:px-10 py-3 rounded-full shadow-lg hover:bg-emerald-50 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Link to='/products'>Shop Now</Link>
          </button>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden">
            <img
              src={heroImage2}
              alt="Product"
              className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
