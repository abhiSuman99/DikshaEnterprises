import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-8 mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between mb-8">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-[#ea5430] mb-4">
              Diksha Enterprises
            </h3>
            <p className="text-gray-400">
              Leading the way in innovative solutions and customer-centric services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex justify-center space-x-6">
          {["Home", "About", "Blog", "Careers", "Contact"].map((link, idx) => (
            <li key={idx}>
              <Link to={`/${link.toLowerCase()}`} className="hover:text-[#ea5430]">
                {link}
              </Link>
            </li>
          ))}
        </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@diksha.com" className="hover:text-[#ea5430]">
              diksha160520@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Phone:</strong> +91  9334650638
            </p>
            <p className="text-gray-400">
              <strong>Address:</strong> Diksha Enterprises,Ground Floor , 298 Vashudeo Villa , Priyadarshi Nagar , Road No:1 , Bhagwat Nagar, Patna-800026
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Diksha Enterprises. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#ea5430]">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ea5430]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
