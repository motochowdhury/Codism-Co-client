import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto mt-8 mb-5">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        novalidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div className="space-y-1 text-sm">
          <label for="fullname" className="block dark:text-gray-400">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="photourl" className="block dark:text-gray-400">
            Photo URL
          </label>
          <input
            type="text"
            name="photourl"
            id="photourl"
            placeholder="Photo URL"
            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="email" className="block dark:text-gray-400">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md 
        border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <button className="block w-[50%] mx-auto p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
          Sign Up
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
          <FaGoogle className="text-2xl" />
        </button>
        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <FaGithub className="text-2xl" />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/register"
          className="underline dark:text-gray-100">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Register;
