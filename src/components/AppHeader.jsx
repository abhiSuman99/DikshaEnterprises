import React, { useState } from "react";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = () => {
    setIsProductOpen(false); // Close the dropdown list on product click (web)
    setIsMenuOpen(false); // Close the hamburger menu (mobile)
  };

  return (
    <>
      <header className="bg-[#000000] text-white shadow-md">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo1.jpeg"
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">Diksha Enterprises</span>
            </Link>
            {/* <span className="text-xl font-bold">Diksha Enterprises</span> */}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-white/80 hidden md:block"
              title="Let's Connect"
            >
              <Mail />
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:justify-center px-4 pb-4 md:pb-0 md:px-0`}
        >
          <ul className="space-y-2 md:space-y-0 md:flex md:gap-6">
            <li>
              <Link to="/" className="hover:text-white/80 block">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white/80 block">About</Link>
            </li>

            {/* Product Dropdown */}
            <li
              className="relative group md:hover:bg-transparent"
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-white/80">
                Product <ChevronDown size={16} />
              </div>
              <ul
                className={`ml-4 mt-2 space-y-1 md:absolute md:left-0 md:top-full md:bg-[#ea5430] md:rounded-md md:p-2 md:shadow-lg md:mt-0 md:w-40 z-50 ${
                  isProductOpen ? "block" : "hidden"
                } md:group-hover:block`}
              >
                {[
                  "E-Rickshaw",
                  "Tri-Cycle Garbage Rickshaw",
                  "Plastic Bailing Machine",
                  "Plastic 660L wheel Dustbin",
                  "Industrial Safety Equipment",
                  "Garbage Tipper Trucks",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/product/${encodeURIComponent(item)}`}
                      className="block hover:text-white/80"
                      onClick={handleProductClick} // Close dropdown and hamburger
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link to="/blog" className="hover:text-white/80 block">Blog</Link></li>
            <li><Link to="/career" className="hover:text-white/80 block">Career</Link></li>
            <li><Link to="/contact" className="hover:text-white/80 block">Contact</Link></li>

            {/* Let’s Connect (Mobile Menu) */}
            <li className="md:hidden">
              <button onClick={() => setIsModalOpen(true)} className="hover:text-white/80 flex items-center gap-1">
                <Mail size={18} /> Let's Connect
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Modal for Let’s Connect */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <Dialog.Title className="text-xl font-bold mb-4 text-gray-900">
              Let's Connect
            </Dialog.Title>
            <div className="text-gray-700 space-y-3">
              <p><strong>📍 Address:</strong> Ground Floor , 298 Vashudeo Villa , Priyadarshi Nagar , Road No:1 , Bhagwat Nagar, Patna-800026</p>
              <p><strong>📞 Contact:</strong> +91-9334650638</p>
              <p><strong>✉️ Email:</strong> diksha160520@gmail.com</p>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-[#ea5430] text-white rounded hover:bg-[#d14422]"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default AppHeader;
