import React from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSeedling,
  FaRecycle,
  FaHeart,
} from "react-icons/fa";
import { GiButterflyFlower } from "react-icons/gi";

function Footer() {
  return (
    <footer className="bg-linear-to-b from-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-500 p-2 rounded-full">
                <FaLeaf className="text-white text-xl" />
              </div>
              <h1 className="text-2xl font-bold">
                <span className="text-emerald-400">Skin</span>
                <span className="text-amber-400">Glow</span>
              </h1>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted partner in natural skincare. We combine nature's
              finest ingredients with scientific innovation to bring you
              radiant, healthy skin.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, color: "hover:text-blue-400" },
                { icon: FaInstagram, color: "hover:text-pink-400" },
                { icon: FaTwitter, color: "hover:text-blue-300" },
                { icon: FaPinterestP, color: "hover:text-red-400" },
              ].map((SocialIcon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-slate-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${SocialIcon.color} hover:bg-slate-600`}
                >
                  <SocialIcon.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 flex items-center gap-2">
              <GiButterflyFlower />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "All Products", path: "/products" },
                { name: "Best Sellers", path: "/products?filter=bestsellers" },
                { name: "New Arrivals", path: "/products?filter=new" },
                { name: "Skincare Guide", path: "/guide" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 flex items-center gap-2">
              <FaHeart />
              Customer Care
            </h3>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "Shipping Info",
                "Returns & Exchanges",
                "FAQ",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 flex items-center gap-2">
              <FaEnvelope />
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1 shrink-0" />
                <p className="text-slate-300">
                  123 Beauty Street
                  <br />
                  Phnom Penh, Cambodia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-400 shrink-0" />
                <p className="text-slate-300">+855 12 345 678</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400 shrink-0" />
                <p className="text-slate-300">hello@skinglow.com</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-slate-200">
                Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700">
          {[
            {
              icon: FaSeedling,
              title: "100% Natural",
              description: "Plant-based ingredients",
            },
            {
              icon: FaRecycle,
              title: "Eco-Friendly",
              description: "Sustainable packaging",
            },
            {
              icon: FaHeart,
              title: "Cruelty-Free",
              description: "Never tested on animals",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-colors duration-300"
            >
              <value.icon className="text-2xl text-amber-400 mx-auto mb-3" />
              <h4 className="font-semibold text-emerald-400 mb-1">
                {value.title}
              </h4>
              <p className="text-slate-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <p>&copy; 2024 SkinGlow. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Terms
                </a>
                <span>•</span>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Privacy
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-sm">Made with</span>
              <FaHeart className="text-red-400 text-xs" />
              <span className="text-sm">for beautiful skin</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaLeaf className="text-emerald-400" />
              <span>Proudly natural, sustainably made</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
