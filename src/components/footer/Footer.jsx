import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram, IoLogoTwitter, IoMdAirplane } from "react-icons/io";
import { IoLocationOutline, IoLogoFacebook } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="info max-w-md ">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-600 text-white p-2 rounded-full text-xl">
                <IoMdAirplane />
              </div>
              <span className="text-2xl font-semibold text-gray-900">
                SkyTrip
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed w-64 md:w-78">
            Your trusted partner for seamless flight bookings and unforgettable
            travel experiences around the globe.
            </p>
            <div className="icons flex gap-x-4 text-2xl mt-4">
            <IoLogoFacebook />
            <IoLogoTwitter/>
            <IoLogoInstagram/>
            <FaLinkedin/>
            </div>
          </div>

          <div className="quick">
            <h1 className="font-semibold text-gray-900 mb-3">Quick Links</h1>
            <ul className="space-y-2 text-gray-600 ">
              <li className="hover:text-purple-700 cursor-pointer"><Link to={'/'}>Home</Link></li>
              <li className="hover:text-purple-700 cursor-pointer"><Link to={'/flights'}>Flights</Link></li>
              <li className="hover:text-purple-700 cursor-pointer"><Link to={'/about-us'}>About Us</Link></li>
              <li className="hover:text-purple-700 cursor-pointer"><Link to={'/dashboard'}>Dashboard</Link></li>
            </ul>
          </div>

          <div className="Explore">
            <h1 className="font-semibold text-gray-900 mb-3">Explore</h1>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-purple-700 cursor-pointer">Places</li>
              <li className="hover:text-purple-700 cursor-pointer">Contact</li>
              <li className="hover:text-purple-700 cursor-pointer">My profile</li>
              <li className="hover:text-purple-700 cursor-pointer">Login</li>
            </ul>
          </div>
          <div className="Contact">
            <h1 className="font-semibold text-gray-900 mb-3">Contact Us</h1>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><MdOutlineMail className="text-purple-600 text-xl"/> support@skyvoyage.com</li>
              <li className="flex items-center "><LuPhone className="text-purple-600 text-xl"/> +1 (555) 123-4567</li>
              <li className="flex items-start gap-2">
                <IoLocationOutline className="text-purple-600 mt-1 text-xl" />
                <span>
                  123 Aviation Blvd, Suite 100<br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
