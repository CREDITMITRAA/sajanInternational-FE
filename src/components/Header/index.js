import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import siLogo from "../../Images/assests/si-logo.png";
import DownArrowIcon from '../icons/DownArrowIcon';
import MenuIcon from '../icons/MenuIcon';
import { XMarkIcon } from '@heroicons/react/24/solid'; // Tailwind-compatible close icon

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-sky-200 py-2 px-4 mt-4 rounded-[70px] max-w-screen-xl mx-auto shadow-md relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 ml-4">
          <img src={siLogo} alt="SI Logo" className="w-12 h-12 object-contain" />
          <div className="text-center sm:text-left ml-2 sm:ml-3">
            <h1 className="text-orange-400 font-serif text-lg sm:text-xl font-bold tracking-wide">
              Sajan International
            </h1>
            {/* <p className="text-blue-950 text-xs sm:text-sm font-light">Empowering Dreams Since 1998</p> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-blue-950 font-roboto text-base font-semibold">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-1 px-4 py-2 rounded-full transition ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
            }
          >
            <span>About Us</span>
            <DownArrowIcon />
          </NavLink>

          <NavLink
            to="/#"
            className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-blue-950/10 transition"
          >
            <span>Disclosures</span>
            <DownArrowIcon />
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-1 px-4 py-2 rounded-full transition ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(true)}>
          <MenuIcon />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-sky-100 shadow-lg transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-sky-300">
          <img src={siLogo} alt="SI Logo" className="w-10 h-10 object-contain" />
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <XMarkIcon className="w-6 h-6 text-blue-950" />
          </button>
        </div>
        <nav className="flex flex-col text-blue-950 font-roboto font-medium px-4 py-6 gap-4">
          <NavLink
            to="/"
            end
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 rounded-lg px-3 ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 rounded-lg px-3 ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/disclosures"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 rounded-lg px-3 ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
            }
          >
            Disclosures
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 rounded-lg px-3 ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>

      {/* Background overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
