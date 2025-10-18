import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdAirplane } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return <>
  
    <nav className="bg-blue dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 relative z-50">
      <div className="max-w-screen-3xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-full text-xl">
            <IoMdAirplane />
          </div>
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">
            SkyTrip
          </span>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <FiMoon className="text-xl text-gray-700 dark:text-gray-200" />
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {isOpen ? <IoClose className="text-3xl" /> : <RxHamburgerMenu className="text-2xl" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-8">

          <ul className="flex items-center gap-8">
            <li><NavLink to="/" className={({ isActive }) => `transition dark:text-white hover:text-purple-600 ${isActive ? "text-purple-900" : "text-gray-900"}`}>Home</NavLink></li>
            <li><NavLink to={"/flights"} className={({ isActive }) => `transition dark:text-white hover:text-purple-600 ${isActive ? "text-purple-900" : "text-gray-900"}`}>Flights</NavLink></li>
            <li><NavLink to={"/about-us"} className={({ isActive }) => `transition dark:text-white hover:text-purple-600 ${isActive ? "text-purple-900" : "text-gray-900"}`}>About Us</NavLink></li>
            <li><NavLink to={"/dashboard"} className={({ isActive }) => `transition dark:text-white hover:text-purple-600 ${isActive ? "text-purple-900" : "text-gray-900"}`}>Dashboard</NavLink></li>
            <li> <NavLink to={"/contact-us"} className={({ isActive }) => `transition dark:text-white hover:text-purple-600 ${isActive ? "text-purple-900" : "text-gray-900"}`}>Contact</NavLink> </li>
            <li></li>
          </ul>

          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <FiMoon className="text-xl text-gray-700 dark:text-gray-200" />
          </button>

          <Link to={"/login"} className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">Login</Link>
        </div>
      </div>

      <div className={`fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-8  transition-all duration-500 ease-in-out  ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-gray-700 dark:text-gray-200">
          <IoClose className="text-3xl" />
        </button>

        <ul className="flex flex-col items-center justify-center gap-8">
          <li><Link to={"/"} className="text-2xl text-gray-900 dark:text-white hover:text-purple-600 transition"> Home </Link></li>
          <li><Link to={"/flights"} className="text-2xl text-gray-900 dark:text-white hover:text-purple-600 transition">Flights</Link></li>
          <li><Link to={"/about-us"} className="text-2xl text-gray-900 dark:text-white hover:text-purple-600 transition" >About Us</Link></li>
          <li><Link to={"/dashboard"} className="text-2xl text-gray-900 dark:text-white hover:text-purple-600 transition">Dashboard</Link></li>
          <li><Link to={"/contact-us"} className="text-2xl text-gray-900 dark:text-white hover:text-purple-600 transition">Contact</Link></li>
          <li><Link to={"/login"} className="bg-blue-700 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition"> Login </Link></li>
        </ul>
      </div>
    </nav>
  </>
}
