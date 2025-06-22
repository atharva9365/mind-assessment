import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 h-[70px] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">

      <a href="#Home">
        <h1 className="flex text-3xl font-extrabold tracking-wide h-9">
          <span className="text-[#1B2143]">A</span>
          <span className="text-[#F19A8E]">A</span>
          <span className="text-[#1B2143]">L</span>
          <span className="text-[#F27542]">O</span>
          <span className="text-[#1B2143]">C</span>
          <span className="text-[#E0C15A]">H</span>
          <span className="text-[#1B2143]">A</span>
          <span className="text-[#1B2143]">N</span>
          <span className="text-[#E0C15A]">A</span>
        </h1>
      </a>

      <ul className="md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-gray-500/80 transition text-lg" href="#Home" >
            Home
          </a>
        </li>
        
           <li>
          <a className="hover:text-gray-500/80 transition text-lg" href="#About">
            About Us
          </a>
        </li>
       
        <li>
          <a className="hover:text-gray-500/80 transition text-lg" href="#Programs">
            Programs
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition text-lg" href="#Publications">
            Publications
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition text-lg" href="#Contact">
            Contact
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="bg-blue-900 text-white border border-gray-300 md:inline hidden text-sm  active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Donate
      </button>

      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#000"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <a href="#" className="text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Pricing
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="bg-blue-900 text-white border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Donate
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
