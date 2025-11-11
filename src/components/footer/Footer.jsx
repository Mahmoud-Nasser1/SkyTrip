import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook, IoLocationOutline } from "react-icons/io5";
import { IoMdAirplane } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return <>
    <footer className="w-full bg-white border-t dark:bg-[#0f172a]  dark:border-[#10161E]">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="info max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-white bg-gradient-to-r from-gradient-sky via-gradient-violet to-gradient-peach p-2 rounded-full text-xl">
                <IoMdAirplane />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
                SkyTrip
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed w-64 md:w-78 dark:gray-400">
              Your trusted partner for seamless flight bookings and unforgettable travel experiences around the globe.
            </p>

            <div className="icons flex gap-x-4 text-xl mt-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r text-white from-gradient-violet to-gradient-peach flex items-center justify-center hover:shadow-lg transition-shadow">
                <FiFacebook />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r text-white from-gradient-violet to-gradient-peach flex items-center justify-center hover:shadow-lg transition-shadow">
                <IoLogoTwitter />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r text-white from-gradient-violet to-gradient-peach flex items-center justify-center hover:shadow-lg transition-shadow">
                <IoLogoInstagram />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r text-white from-gradient-violet to-gradient-peach flex items-center justify-center hover:shadow-lg transition-shadow">
                <FiLinkedin/>
              </div>
            </div>
          </div>

          <div className="quick">
            <h1 className=" text-gray-900 mb-3 dark:text-white">Quick Links</h1>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-gradient-violet cursor-pointer dark:text-gray-400">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-gradient-violet cursor-pointer dark:text-gray-400">
                <Link to={"/flights"}>Flights</Link>
              </li>
              <li className="hover:text-gradient-violet cursor-pointer dark:text-gray-400">
                <Link to={"/about-us"}>About Us</Link>
              </li>
            </ul>
          </div>

          <div className="Explore">
            <h1 className="text-gray-900 mb-3 dark:text-white">Explore</h1>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-gradient-violet cursor-pointer dark:text-gray-400">
                <Link to={"/about-us"}>Contact</Link>
              </li>
              <li className="hover:text-gradient-violet cursor-pointer dark:text-gray-400">My Profile</li>
              
              <li className="hover:text-gradient-violet cursor-pointer dark:text-gray-400">
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </div>

          <div className="Contact">
            <h1 className=" text-gray-900 mb-3 dark:text-white">Contact Us</h1>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <MdOutlineMail className="text-gradient-violet text-xl mr-2 " />
                support@skyvoyage.com
              </li>
              <li className="flex items-center">
                <LuPhone className="text-gradient-violet text-xl mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2">
                <IoLocationOutline className="text-gradient-violet mt-1 text-xl" />
                <span>
                  123 Aviation Blvd, Suite 100
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="policy flex flex-col md:flex-row justify-between items-center mt-9 border-t border-gray-200 pt-4 text-sm text-gray-600">
  <h1 className="mb-3 md:mb-0">© 2025 SkyTrip. All rights reserved.</h1>
  
  <div className="terms flex gap-x-6">
    <h1 className="hover:text-gradient-violet cursor-pointer transition-colors duration-200">Privacy Policy</h1>
    <h1 className="hover:text-gradient-violet cursor-pointer transition-colors duration-200">Terms of Service</h1>
    <h1 className="hover:text-gradient-violet cursor-pointer transition-colors duration-200">Cookie Policy</h1>
  </div>
</div>

      </div>
    </footer>
  </>
}
