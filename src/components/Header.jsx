import React, { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import {
  TfiLayoutListThumb,
  TfiLayoutListThumbAlt,
  TfiNa,
} from "react-icons/tfi";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const logOutUser = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Loged Out");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="bg-gray-700">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center">
            <img className="w-14" src={logo} alt="" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Codism Co
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/home"
                aria-label="Our product"
                title="Our product"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-blue-400 transition-colors duration-200 hover:text-teal-accent-400"
                    : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                aria-label="Our product"
                title="Our product"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-blue-400 transition-colors duration-200 hover:text-teal-accent-400"
                    : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                }>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="Our product"
                title="Our product"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-blue-400 transition-colors duration-200 hover:text-teal-accent-400"
                    : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                }>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-blue-400 transition-colors duration-200 hover:text-teal-accent-400"
                    : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                }>
                FAQ
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              {user?.uid ? (
                <button
                  onClick={logOutUser}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none"
                  aria-label="Log Out"
                  title="Log Out">
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up">
                  Sign up
                </Link>
              )}
            </li>
            <li>
              <div className="relative">
                <input
                  type="checkbox"
                  className="peer
    appearance-none cursor-pointer
    border border-gray-300 rounded-full
    checked:border-gray-900 w-12 h-6"
                />
                <span
                  className="peer-checked:left-7
    peer-checked:bg-gray-900
    transition-all duration-200
    pointer-events-none w-4 h-4
    block absolute top-1 left-1
    rounded-full bg-gray-300"></span>
              </div>
            </li>
            {user?.uid && (
              <li>
                {user?.photoURL ? (
                  <img
                    title={user?.displayName || "Null"}
                    data-tooltip-target="tooltip-animation"
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    title={user?.displayName || "Null"}
                    className="w-12 h-12 rounded-full"
                    src={profile}
                    alt=""
                  />
                )}
              </li>
            )}
          </ul>
          <div className="lg:hidden flex items-center">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}>
              <TfiLayoutListThumb className="text-3xl text-blue-500" />
            </button>
            {user?.uid && (
              <>
                {user?.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full ml-3"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-10 h-10 rounded-full ml-3"
                    src={profile}
                    alt=""
                  />
                )}
              </>
            )}
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center">
                        <img className="w-12" src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Codism Co
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}>
                        <TfiLayoutListThumbAlt className="text-3xl" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/home"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blogs"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        {user?.uid ? (
                          <button
                            onClick={logOutUser}
                            className="inline-flex items-center justify-center w-[30%] h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up">
                            Log Out
                          </button>
                        ) : (
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center w-[30%] h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up">
                            Sign up
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
