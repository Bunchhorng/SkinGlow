import React from 'react'
import { 
  FaLeaf, 
  FaHeart, 
  FaRecycle, 
  FaStar, 
  FaEnvelope, 
  FaShoppingBag,
  FaSeedling,
  FaHandHoldingHeart
} from 'react-icons/fa'
import { GiFlowerEmblem, GiButterflyFlower } from 'react-icons/gi'
import { LuSparkle } from 'react-icons/lu' 
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <GiButterflyFlower className="text-4xl text-emerald-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            About Our Skincare Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where nature's purity meets skincare science for your radiant transformation
          </p>
          <div className="mt-8">
            <div className="w-24 h-1 bg-emerald-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="relative">
              <img
                src="https://sublimelife.in/cdn/shop/articles/Artboard_7_copy.jpg?v=1686305736"
                alt="Skincare products collection"
                className="rounded-2xl shadow-lg w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                <LuSparkle className="text-emerald-500 text-xl" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 mb-4 font-medium">
              <GiFlowerEmblem className="mr-2 text-emerald-600" />
              Glow Naturally with Us
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800">
              Your Skin's Best Friend
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to our skincare sanctuary! True beauty begins with 
              healthy, happy skin. Our journey started with a vision: to create 
              effective skincare solutions that celebrate your natural beauty while 
              respecting our planet.
            </p>
            
            <div className="space-y-4">
              {[{
                icon: FaStar,
                text: "Premium ingredients sourced from nature's finest resources"
              },{
                icon: FaSeedling,
                text: "Scientifically formulated for visible, lasting results"
              },{
                icon: FaHandHoldingHeart,
                text: "Perfect for both skincare beginners and beauty experts"
              }].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <item.icon className="w-3 h-3 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[{
            icon: FaLeaf,
            title: "Natural Ingredients",
            text: "Pure, plant-based formulas that work in harmony with your skin",
            bg: "bg-emerald-100",
            iconColor: "text-emerald-600"
          },{
            icon: FaHeart,
            title: "Cruelty-Free",
            text: "Never tested on animals, always tested with love and care",
            bg: "bg-amber-100",
            iconColor: "text-amber-500"
          },{
            icon: FaRecycle,
            title: "Eco-Friendly",
            text: "Sustainable packaging and environmentally conscious practices",
            bg: "bg-green-100",
            iconColor: "text-green-500"
          }].map((item, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition duration-300 group hover:-translate-y-2 border border-gray-200">
              <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:opacity-90 transition duration-300`}>
                <item.icon className={`text-2xl ${item.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-20">
          <div className="inline-block bg-emerald-500 text-white px-8 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              To illuminate your natural beauty through safe, effective, and sustainable 
              skincare that nurtures both your skin and our planet.
            </p>
          </div>
        </div>
        <div className="bg-emerald-500 rounded-3xl p-12 text-center text-white shadow-lg relative overflow-hidden mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Skincare Family</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Ready to start your skincare journey? Have questions or want to collaborate? 
            We're here to help you glow!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to='/contact'
              className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaEnvelope className="mr-2" />
              Contact Us
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition duration-300 transform hover:scale-105"
            >
              <FaShoppingBag className="mr-2" />
              Explore Products
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{
            value: "50K+",
            label: "Happy Customers"
          },{
            value: "100%",
            label: "Natural Ingredients"
          },{
            value: "5★",
            label: "Customer Rating"
          },{
            value: "2020",
            label: "Founded"
          }].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="text-2xl font-bold text-emerald-600 mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default About
