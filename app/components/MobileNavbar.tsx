"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductMenu = () => {
    setIsProductMenuOpen(!isProductMenuOpen);
  };

  return (
    <nav className="w-full bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <img
              className="block w-auto h-8 lg:hidden"
              src="/logo.svg"
              alt="Logo"
            />
            <img
              className="hidden w-auto h-8 lg:block"
              src="/logo.svg"
              alt="Logo"
            />
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transition duration-300 ease-in-out ${
                  isOpen ? "hidden" : "block"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 transition duration-300 ease-in-out ${
                  isOpen ? "block" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
            <a
              href="/"
              className="px-3 py-2 text-base font-medium text-gray-700 transition duration-300 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="px-3 py-2 text-base font-medium text-gray-700 transition duration-300 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="px-3 py-2 text-base font-medium text-gray-700 transition duration-300 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100"
            >
              Contact
            </a>
            <div className="relative group">
              <button
                type="button"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 transition duration-300 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={toggleProductMenu}
              >
                <span>Product</span>
                <svg
                  className={`ml-1 h-5 w-5 transform ${
                    isProductMenuOpen ? "rotate-90" : "rotate-0"
                  } transition duration-300 ease-in-out`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 ${
                  isProductMenuOpen ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <a
                    href="/products/category1"
                    className="block px-4 py-2 text-base text-gray-700 transition duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-100"
                  >
                    Category 1
                  </a>
                  <a
                    href="/products/category2"
                    className="block px-4 py-2 text-base text-gray-700 transition duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-100"
                  >
                    Category 2
                  </a>
                  <a
                    href="/products/category3"
                    className="block px-4 py-2 text-base text-gray-700 transition duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-100"
                  >
                    Category 3
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${
          isOpen ? "block" : "hidden"
        } transition duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-300 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100"
          >
            Home
          </a>
          <a
            href="/about-us"
            className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-300 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-300 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100"
          >
            Contact
          </a>
          <div className="relative group">
            <button
              type="button"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 transition duration-300 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleProductMenu}
            >
              <span>Product</span>
              <svg
                className={`ml-1 h-5 w-5 transform ${
                  isProductMenuOpen ? "rotate-90" : "rotate-0"
                } transition duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div
              className={`absolute right-0 mt-2 w-full bg-white rounded-md shadow-lg z-10 transform ${
                isProductMenuOpen ? "translate-x-0" : "translate-x-full"
              } transition duration-300 ease-in-out`}
            >
              <div className="py-1">
                <a
                  href="/products/category1"
                  className="block px-4 py-2 text-base text-gray-700 transition duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-100"
                >
                  Category 1
                </a>
                <a
                  href="/products/category2"
                  className="block px-4 py-2 text-base text-gray-700 transition duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-100"
                >
                  Category 2
                </a>
                <a
                  href="/products/category3"
                  className="block px-4 py-2 text-base text-gray-700 transition duration-300 ease-in-out hover:text-blue-500 hover:bg-blue-100"
                >
                  Category 3
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
