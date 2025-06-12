import React from 'react';
import { NavLink } from 'react-router-dom';
import siLogo from "../../Images/assests/si-logo.png";
import DownArrowIcon from '../icons/DownArrowIcon';
import MenuIcon from '../icons/MenuIcon';

const Header = () => {
  return (
    <header className="bg-sky-200 py-2 px-4 mt-4 rounded-[70px] max-w-screen-xl mx-auto overfolw-hidden shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ml-4">
          <img src={siLogo} alt="SI Logo" className="w-12 h-12 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-blue-950 font-roboto text-base font-semibold">
           <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
              }
              // className="px-4 py-2 rounded-full hover:bg-blue-950/10 transition"
            >
              Home
            </NavLink>

          <div className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-blue-950/10 transition cursor-pointer">
          <NavLink 
            to="/about" 
            className={({ isActive }) =>
            `flex items-center gap-1 px-4 py-2 rounded-full transition ${isActive ? 'bg-blue-950/10' : 'hover:bg-blue-950/10'}`
          }
            >
            <span>About Us</span>
            <DownArrowIcon />
          </NavLink>
          </div>

          <div className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-blue-950/10 transition cursor-pointer">
            <NavLink 
            to="/disclosures" 
            className="flex items-center gap-1"
            >
            <span>Disclosures</span>
            <DownArrowIcon />
            </NavLink>
            {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M10.5883 13.0893C10.432 13.2455 10.2201 13.3333 9.99915 13.3333C9.77818 13.3333 9.56625 13.2455 9.40998 13.0893L4.69581 8.37512C4.45274 8.14012 4.45274 7.75988 4.69581 7.51681C4.93888 7.27374 5.31912 7.27374 5.56219 7.51681L9.99915 11.9538L14.4361 7.51681C14.6792 7.27374 15.0595 7.27374 15.3025 7.51681C15.5456 7.75988 15.5456 8.14012 15.3025 8.38319L10.5883 13.0893Z"
                fill="#061B4E"
              />
            </svg> */}
          </div>

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
        <div className="block md:hidden cursor-pointer">
          <div data-svg-wrapper data-layer="jam:menu" className="JamMenu relative">
            <MenuIcon />
            {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.9987 8.16553H12.832C13.1415 8.16553 13.4382 8.28844 13.657 8.50724C13.8758 8.72603 13.9987 9.02277 13.9987 9.33219C13.9987 9.64161 13.8758 9.93836 13.657 10.1572C13.4382 10.3759 13.1415 10.4989 12.832 10.4989H6.9987C6.68928 10.4989 6.39253 10.3759 6.17374 10.1572C5.95495 9.93836 5.83203 9.64161 5.83203 9.33219C5.83203 9.02277 5.95495 8.72603 6.17374 8.50724C6.39253 8.28844 6.68928 8.16553 6.9987 8.16553ZM15.1654 17.4989H20.9987C21.3081 17.4989 21.6049 17.6218 21.8237 17.8406C22.0424 18.0594 22.1654 18.3561 22.1654 18.6655C22.1654 18.9749 22.0424 19.2717 21.8237 19.4905C21.6049 19.7093 21.3081 19.8322 20.9987 19.8322H15.1654C14.8559 19.8322 14.5592 19.7093 14.3404 19.4905C14.1216 19.2717 13.9987 18.9749 13.9987 18.6655C13.9987 18.3561 14.1216 18.0594 14.3404 17.8406C14.5592 17.6218 14.8559 17.4989 15.1654 17.4989ZM6.9987 12.8322H20.9987C21.3081 12.8322 21.6049 12.9551 21.8237 13.1739C22.0424 13.3927 22.1654 13.6894 22.1654 13.9989C22.1654 14.3083 22.0424 14.605 21.8237 14.8238C21.6049 15.0426 21.3081 15.1655 20.9987 15.1655H6.9987C6.68928 15.1655 6.39253 15.0426 6.17374 14.8238C5.95495 14.605 5.83203 14.3083 5.83203 13.9989C5.83203 13.6894 5.95495 13.3927 6.17374 13.1739C6.39253 12.9551 6.68928 12.8322 6.9987 12.8322Z" fill="#061B4E"/>
            </svg> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
