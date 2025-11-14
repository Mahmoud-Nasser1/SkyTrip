import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdAirplane } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import useDarkMode from "../../hooks/darkMode";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();
  const { user, isLogged, logout } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <nav className="top-0 left-0 right-0 fixed z-50 backdrop-blur-md bg-white/70 dark:bg-[#111928] border-white/20 shadow-lg border-b border-gray-200 dark:border-gray-800 transition">
        <div className="max-w-screen-3xl mx-auto flex items-center justify-between px-6 py-4 container m-auto">
          <div className="flex items-center gap-2">
            <div className="text-white bg-gradient-to-r from-gradient-sky via-gradient-violet to-gradient-peach p-2 rounded-full text-xl">
              <IoMdAirplane />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
              SkyTrip
            </span>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "dark" ? (
                <CiSun className="text-xl text-yellow-400" />
              ) : (
                <FiMoon className="text-xl text-gray-700 dark:text-gray-200" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {isOpen ? (
                <>
                  <IoClose className="text-3xl" />
                </>
              ) : (
                <>
                  <RxHamburgerMenu className="text-2xl" />
                </>
              )}
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `transition dark:text-white hover:text-gradient-violet ${
                      isActive ? "text-gradient-violet" : "text-gray-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/flights"}
                  className={({ isActive }) =>
                    `transition dark:text-white hover:text-gradient-violet ${
                      isActive ? "text-gradient-violet" : "text-gray-600"
                    }`
                  }
                >
                  Flights
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about-us"}
                  className={({ isActive }) =>
                    `transition dark:text-white hover:text-gradient-violet ${
                      isActive ? "text-gradient-violet" : "text-gray-600"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact-us"}
                  className={({ isActive }) =>
                    `transition dark:text-white hover:text-gradient-violet ${
                      isActive ? "text-gradient-violet" : "text-gray-600"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all border border-white/30 hover:scale-110"
            >
              {theme === "dark" ? (
                <CiSun className="text-xl text-yellow-400" />
              ) : (
                <FiMoon className="text-xl text-gradient-violet dark:text-gray-200" />
              )}
            </button>
            {isLogged ? (
              <div className="relative group">
                <button className="py-2 px-4 md:px-6 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                  Welcome, {user?.firstName || ""}
                </button>

                <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-dark-card shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                    {user?.role === "admin" ? (
                      <Link to="/admin" className="flex items-center gap-2">
                        <FaUserCircle className="w-5 h-5 text-gradient-violet" />
                        <span className="text-light-muted-foreground dark:text-dark-muted-foreground">
                          Dashboard
                        </span>
                      </Link>
                    ) : (
                      <Link to="/profile" className="flex items-center gap-2">
                        <FaUserCircle className="w-5 h-5 text-gradient-violet" />
                        <span className="text-light-muted-foreground dark:text-dark-muted-foreground">
                          Profile
                        </span>
                      </Link>
                    )}
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                  >
                    <CgLogOut className="w-5 h-5 text-gradient-violet" />
                    <span className="text-light-muted-foreground dark:text-dark-muted-foreground">
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="py-2 px-6 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-lg transition-shadow"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-1/2 z-[9999] lg:hidden bg-white dark:bg-[#111928] shadow-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-full pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-gray-700 dark:text-gray-200"
        >
          <IoClose className="text-3xl" />
        </button>

        <ul className="flex flex-col items-center justify-center gap-8">
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to={"/"}
              className={({ isActive }) =>
                `text-2xl transition dark:text-white hover:text-gradient-violet ${
                  isActive ? "text-gradient-violet" : "text-gray-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to={"/flights"}
              className={({ isActive }) =>
                `text-2xl transition dark:text-white hover:text-gradient-violet ${
                  isActive ? "text-gradient-violet" : "text-gray-600"
                }`
              }
            >
              Flights
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to={"/about-us"}
              className={({ isActive }) =>
                `text-2xl transition dark:text-white hover:text-gradient-violet ${
                  isActive ? "text-gradient-violet" : "text-gray-600"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to={"/contact-us"}
              className={({ isActive }) =>
                `text-2xl transition dark:text-white hover:text-gradient-violet ${
                  isActive ? "text-gradient-violet" : "text-gray-600"
                }`
              }
            >
              Contact
            </NavLink>
          </li>

          {isLogged ? (
            <li className="relative group">
              <button className="py-2 px-4 md:px-6 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                Welcome, {user?.firstName || ""}
              </button>

              <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-dark-card shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                  {user?.role === "admin" ? (
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <FaUserCircle className="w-5 h-5 text-gradient-violet" />
                      <span className="text-light-muted-foreground dark:text-dark-muted-foreground">
                        Dashboard
                      </span>
                    </Link>
                  ) : (
                    <Link
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <FaUserCircle className="w-5 h-5 text-gradient-violet" />
                      <span className="text-light-muted-foreground dark:text-dark-muted-foreground">
                        Profile
                      </span>
                    </Link>
                  )}
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                    navigate("/login");
                  }}
                >
                  <CgLogOut className="w-5 h-5 text-gradient-violet" />
                  <span className="text-light-muted-foreground dark:text-dark-muted-foreground">
                    Logout
                  </span>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to={"/login"}
                className="py-2 px-6 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-lg transition-shadow"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
