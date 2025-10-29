import React, { useState } from "react";
import { FaBars, FaTimes, FaLeaf } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/ContextCart";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-emerald-100 p-2 rounded-full">
            <FaLeaf className="text-emerald-600 text-xl" />
          </div>
          <h1 className="text-3xl font-bold">
            <span className="text-emerald-600 font-serif">Skin</span>
            <span className="text-amber-500 font-serif">Glow</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-lg font-medium">
            {["/", "/products", "/about", "/contact"].map((path, i) => {
              const name = ["Home", "Products", "About", "Contact"][i];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `pb-1 transition-all duration-300 ${
                      isActive
                        ? "text-emerald-500 border-b-2 border-emerald-500 font-semibold"
                        : "text-slate-700 hover:text-emerald-400 hover:border-b-2 hover:border-emerald-300"
                    }`
                  }
                >
                  {name}
                </NavLink>
              );
            })}
          </ul>

          {/* Cart Icon */}
          <Link to="/cart" className="relative ml-3 p-2 rounded-full hover:bg-amber-50 transition-all duration-300 group">
            <IoCartOutline className="h-6 w-6 text-slate-700 group-hover:text-emerald-500 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-5 text-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 text-2xl focus:outline-none p-2 rounded-full hover:bg-amber-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100 shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg font-medium">
            {["/", "/products", "/about", "/contact"].map((path, i) => {
              const name = ["Home", "Products", "About", "Contact"][i];
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full text-center py-3 transition-colors ${
                      isActive
                        ? "text-emerald-500 bg-emerald-50 font-semibold"
                        : "text-slate-700 hover:text-emerald-500 hover:bg-amber-50"
                    }`
                  }
                >
                  {name}
                </NavLink>
              );
            })}

            {/* Mobile Cart Link */}
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="relative p-3 rounded-full hover:bg-amber-50 transition-all duration-300 group"
            >
              <IoCartOutline className="h-7 w-7 text-slate-700 group-hover:text-emerald-500 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-5 text-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
