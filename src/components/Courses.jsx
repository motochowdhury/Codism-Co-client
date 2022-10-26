import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div className="flex">
      <div className="w-[15%] hidden h-full p-4 rounded-xl bg-gray-700 mt-10 lg:flex flex-col">
        {data.map((dt) => {
          return (
            <Link
              key={dt.id}
              to={`/course/${dt.id}`}
              className="p-1 rounded-lg text-gray-700 text-center hover:bg-slate-500 hover:text-blue-400 bg-slate-400 my-3 w-[90%] mx-auto">
              {dt.title}
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mx-auto mt-10 mb-8">
        {data.map((dt) => {
          return (
            <div
              key={dt.id}
              className="w-[90%] mx-auto md:max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                  {dt.title}
                </h1>
              </div>

              <img
                className="object-cover w-full h-48 mt-2"
                src={dt.img}
                alt=""
              />

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <Link
                  to={`/course/${dt.id}`}
                  className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold uppercase mx-auto">
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
