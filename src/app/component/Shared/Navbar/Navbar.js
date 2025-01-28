"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    setDropdownClicked(true); // to manage click state
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setDropdownClicked(true); // to manage click state
  };

  const handleMouseLeave = () => {
    if (!dropdownClicked) {
      setIsCategoriesOpen(false);
      setIsCoursesOpen(false);
    }
  };

  return (
    <header className="px-0 lg:px-20 text-gray-600 shadow body-font">
      <div className="container mx-auto flex flex-wrap p-5 justify-between items-center">
        {/* First Row: Logo, Categories Dropdown, and Search Bar */}
        <div className="flex justify-between w-full items-center">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>

          {/* Categories Dropdown */}
          <div
            className="relative inline-block text-left hidden md:block lg:block"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleCategoriesDropdown}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700"
            >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown options */}
            {isCategoriesOpen && (
              <div className="absolute  left-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Category 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Category 2
                </a>
              </div>
            )}
          </div>

          {/* Search bar */}
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search"
              className="border p-2 rounded-lg w-full"
            />
          </div>
        </div>
      </div>













      {/* Second Row: Navigation Links and Buttons */}
      <div className="container mx-auto flex flex-wrap p-5 justify-between items-center">
        {/* Navigation Links */}
        <nav className="hidden md:flex flex-wrap items-center text-base justify-start space-x-4">
          <Link href="/home" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>

          {/* Courses Dropdown */}
          <div
            className="relative  inline-block text-left"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleCoursesDropdown}
              className="inline-flex justify-center w-full text-sm font-medium text-gray-700"
            >
              Courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown options */}
            {isCoursesOpen && (
              <div className="absolute left-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Course 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Course 2
                </a>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-gray-900">
            Blog
          </Link>
        </nav>

        {/* Buttons (hidden on mobile) */}
        <button
          onClick={toggleMenu}
          className="text-gray-600 md:hidden lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className=" md:flex items-center space-x-4">
          <Link
            href="/get-started"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
          >
            Get Started
          </Link>
          <Link
            href="/signup"
            className="text-indigo-500 border border-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white"
          >
            Login
          </Link>
        </div>

        {/* Mobile Full-screen Modal for navigation */}
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex flex-col p-5 transition-transform transform ${isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          style={{ transitionDuration: "0.5s" }}
        >
          <button
            className="self-end text-white focus:outline-none mb-4"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-start text-white">
            <Link href="/home" className="mb-4 text-lg" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" className="mb-4 text-lg" onClick={closeMenu}>
              About
            </Link>
            <Link href="/courses" className="mb-4 text-lg" onClick={closeMenu}>
              Courses
            </Link>
            <Link href="/blog" className="mb-4 text-lg" onClick={closeMenu}>
              Blog
            </Link>
            <Link
              href="/get-started"
              className="mb-4 text-lg bg-indigo-500 text-white px-4 py-2 rounded-lg"
              onClick={closeMenu}
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="mb-4 text-lg text-indigo-500 border border-indigo-500 px-4 py-2 rounded-lg"
              onClick={closeMenu}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



