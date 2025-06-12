import React from "react";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import YouTubeIcon from "../icons/YouTubeIcon";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-10 px-4 sm:px-6 md:px-20 font-['DM_Sans']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-orange-500 text-2xl sm:text-3xl font-black mb-4">Logo</h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            feugiat.
          </p>
          <div className="flex space-x-4">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Services</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
            {/* <li><a href="#" className="hover:text-orange-500">Blog</a></li> */}
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-slate-600 text-sm sm:text-base">Email: support@example.com</p>
          <p className="text-slate-600 text-sm sm:text-base">Phone: +1 234 567 890</p>
          <p className="text-slate-600 text-sm sm:text-base">Address: 123 Main St, Hyderabad</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 mt-10 pt-6 text-center text-xs sm:text-sm text-slate-500">
        © {new Date().getFullYear()} Credit Mitra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
