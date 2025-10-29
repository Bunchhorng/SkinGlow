import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Product({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        <div className="w-full md:w-1/3">
          <select
            value={selectedCategory}
            className="w-full bg-white border border-gray-300 rounded-[10px] px-5 py-2 text-gray-700 font-medium shadow-sm hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-full md:w-2/3">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-5 py-2 rounded-[10px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm placeholder-gray-400 text-gray-700 font-medium transition-all"
          />
        </div>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-12">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 italic">{item.category}</p>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <p className="text-emerald-600 font-bold text-lg">${item.price.toFixed(2)}</p>
                  <p className="inline-block text-center px-4 py-2 bg-emerald-500 text-white font-medium rounded-full cursor-pointer transition-all duration-300 hover:bg-emerald-600 hover:scale-105 hover:shadow-lg">
                    View Detail
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-500 col-span-full py-20">
            <p className="text-3xl mb-3">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
