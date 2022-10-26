import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, profileUpdate, loginWithGithub, loginWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const createUserWithEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullname.value;
    const url = form.photourl.value;
    const email = form.email.value;
    const pass = form.password.value;

    console.log(name, email, pass);

    createUser(email, pass)
      .then(() => {
        toast.success("account created successfully");
        profileUpdate(name, url)
          .then(() => {})
          .catch((error) => toast.error(error.message));
        navigate("/login");
      })
      .catch((error) => toast.error(error.message));
  };
  const googleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Loged in Successfull");
      })
      .catch((error) => toast.error(error.message));
  };
  const githubLogin = () => {
    loginWithGithub()
      .then(() => {
        toast.success("Loged in Successfully");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto mt-8 mb-5">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form
        onSubmit={createUserWithEmail}
        noValidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div className="space-y-1 text-sm">
          <label htmlFor="fullname" className="block dark:text-gray-400">
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
          <label htmlFor="photourl" className="block dark:text-gray-400">
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
          <label htmlFor="email" className="block dark:text-gray-400">
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
          <label htmlFor="password" className="block dark:text-gray-400">
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
        <button
          type="submit"
          className="block w-[50%] mx-auto p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
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
        <button
          onClick={googleLogin}
          aria-label="Log in with Google"
          className="p-3 rounded-sm">
          <FaGoogle className="text-2xl" />
        </button>
        <button
          onClick={githubLogin}
          aria-label="Log in with GitHub"
          className="p-3 rounded-sm">
          <FaGithub className="text-2xl" />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Already have an account?
        <Link
          rel="noopener noreferrer"
          to="/login"
          className="underline dark:text-gray-100">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
