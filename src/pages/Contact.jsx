import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Get In Touch</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Whether you have questions about our services, want to work with us, or just want to say hello — we’d love to hear from you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#ea5430] mt-1" size={20} />
              <p>
                Diksha Enterprises<br />
                Ground Floor , 298 Vashudeo Villa , Priyadarshi Nagar , Road No:1 , Bhagwat Nagar, Patna-800026
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-[#ea5430]" size={20} />
              <a href="tel:+91919334650638" className="hover:text-[#ea5430]">+91 9334650638</a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#ea5430]" size={20} />
              <a href="mailto:diksha160520@gmail.com" className="hover:text-[#ea5430]">
              diksha160520@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#ea5430] text-white py-3 px-6 rounded font-semibold hover:bg-[#ea5430] transition"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
