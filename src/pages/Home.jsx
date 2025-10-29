import React from "react";
import { Link } from "react-router-dom";
import HeroPage from "../components/HeroPage";

function Home({ products }) {
  const FeatureProducts = products.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <HeroPage />
      <h1 className="text-3xl font-semibold text-center text-slate-800 mb-8 pt-10">
        Feature Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {FeatureProducts.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative overflow-hidden bg-white h-64">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-slate-800 text-lg mb-2 line-clamp-1">
                {item.name}
              </h3>

              <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>

              <p className="text-emerald-600 font-bold text-xl">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/products">
          <button className="inline-block text-center px-4 py-2 bg-emerald-500 text-white font-medium rounded-full cursor-pointer transition-all duration-300 hover:bg-emerald-600 hover:scale-105 hover:shadow-lg">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
