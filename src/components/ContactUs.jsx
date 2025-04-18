import React, { useState } from "react";
import { MapPin, PhoneCall, Mail, MessageSquareText } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request Callback:", formData);
    // Optional: Add toast or reset form
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-white shadow-xl">
        {/* Left Side */}
        <div className="p-8 lg:p-12 space-y-8 text-gray-800">
          <h2 className="text-4xl font-bold text-[#ea5430]">Get in Touch With Us</h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin className="text-[#ea5430] w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p>Diksha Enterprises,Ground Floor , 298 Vashudeo Villa , Priyadarshi Nagar , Road No:1 , Bhagwat Nagar, Patna-800026</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <PhoneCall className="text-[#ea5430] w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p>+91 9334650638</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Mail className="text-[#ea5430] w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p>diksha160520@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <a
              href={`https://wa.me/919334650638`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-base font-medium transition"
            >
              <MessageSquareText className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 lg:p-12 bg-[#f9fafb] rounded-xl shadow-md text-gray-800">
          <h3 className="text-3xl font-semibold mb-8 text-[#ea5430]">Request a Callback</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea5430]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea5430]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ea5430]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ea5430] hover:bg-[#d94e28] text-white py-3 rounded-lg font-semibold shadow-md transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
