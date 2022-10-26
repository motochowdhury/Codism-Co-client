import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-[80%] mx-auto mt-10">
        <div className="w-[90%] lg:w-[50%] mx-auto mt-8 lg:flex lg:items-center lg:mr-7">
          <div>
            <h1 className="text-4xl uppercase font-bold text-center lg:text-left">
              Welcome to <span className="text-blue-600">CODISM_CO</span>
            </h1>
            <p className="text-base uppercase text-gray-500 mt-5 mb-10 text-center lg:text-left">
              We promised for your Quality education in Digital sector, we will
              train your from top employees at Google,Amazon,Apple, <br />{" "}
              Uber,MicroSoft and Facebook!
            </p>
            <div className="flex justify-center">
              <Link
                to="/courses"
                className="px-8 py-3 font-semibold rounded-full dark:bg-blue-500 hover:bg-blue-300 dark:text-gray-800">
                Courses
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:w-[50%] mx-auto">
          <img className="w-full rounded-xl mt-10" src={hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
