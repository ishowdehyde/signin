"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Ahmed Gas</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="/signup" className="text-gray-300 hover:text-white">
            Signup
          </Link>
          <Link href="/profile" className="text-gray-300 hover:text-white">
            Logout
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmins="http://wwww.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <Link
          href="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/login"
          className="text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Signup
        </Link>
        <Link
          href="/profile"
          className="text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
