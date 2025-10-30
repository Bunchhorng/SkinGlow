import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLeaf,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { GiButterflyFlower } from "react-icons/gi";

function Contact() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 mb-4 font-medium">
          <GiButterflyFlower className="mr-2" />
          Get In Touch
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about our
          products or need skincare advice, we're here to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaLeaf className="text-emerald-500" />
                Let's Connect
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    title: "Our Location",
                    info: "123 Beauty Street\nPhnom Penh, Cambodia",
                  },
                  {
                    icon: FaPhoneAlt,
                    title: "Phone Number",
                    info: "+855 12 345 678",
                  },
                  {
                    icon: FaEnvelope,
                    title: "Email Address",
                    info: "Malen@gmail.com",
                  },
                  {
                    icon: FaClock,
                    title: "Business Hours",
                    info: "Mon - Fri: 9AM - 6PM\nSat: 10AM - 4PM",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="bg-emerald-500 p-3 rounded-full">
                      <item.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Find Us Here
              </h3>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  title="store-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.480210506236!2d104.89049567480727!3d11.546875644196502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095185b4b1b97f%3A0x2a1e3f0b7ccfa292!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2skh!4v1707372779986!5m2!1sen!2skh"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  placeholder="malen@gmail.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <select className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 transition-all duration-300">
                  <option>General Inquiry</option>
                  <option>Product Questions</option>
                  <option>Skincare Advice</option>
                  <option>Order Support</option>
                  <option>Wholesale Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  required
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
