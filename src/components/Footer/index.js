import React from "react";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import YouTubeIcon from "../icons/YouTubeIcon";
import siLogo from "../../Images/assests/si-logo.png";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-10 px-4 sm:px-6 md:px-20 font-['DM_Sans']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div className="flex flex-col justify-start">
          <div className="flex items-center space-x-3 mb-4">
            <img src={siLogo} alt="SI Logo" className="w-14 h-14 object-contain" />
          </div>
          <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-xs">
            Sajan International, your trusted NBFC for quicker and easy loans.
          </p>

          <div className="flex space-x-4">
            {/* <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon /> */}
            <LinkedInIcon />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
            {/* <li><a href="#" className="hover:text-orange-500">Blog</a></li> */}
            <li><a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="/terms-conditions" className="hover:text-orange-500">Terms & Conditions</a></li>
            {/* <li><a href="#" className="hover:text-orange-500">FAQs</a></li> */}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-slate-600 text-sm sm:text-base">Email: support@creditmitra.in</p>
          <p className="text-slate-600 text-sm sm:text-base">Phone: +91 9951703178</p>
          <p className="text-slate-600 text-sm sm:text-base">Address: 123 Main St, Hyderabad</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 mt-10 pt-6 text-center text-xs sm:text-sm text-slate-500 text-roboto">
        © {new Date().getFullYear()} Sajan International. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
