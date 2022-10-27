import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { TfiBook } from "react-icons/tfi";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div className="flex">
      <div className="w-[15%] hidden h-full p-4 rounded-xl bg-white mt-10 lg:flex flex-col">
        {data.map((currData) => {
          const { id, title } = currData;
          return (
            <Link
              key={id}
              to={`/course/${id}`}
              className="p-1 rounded-lg text-gray-700 text-center hover:bg-slate-500 hover:text-blue-400 bg-slate-400 my-3 w-[90%] mx-auto">
              {title}
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mx-auto mt-10 mb-8">
        {data.map((currData) => {
          const { id, img, title } = currData;
          return (
            <div
              key={id}
              className="w-[90%] mx-auto md:max-w-xs overflow-hidden bg-white rounded-lg shadow-2xl border p-4 hover:shadow-black">
              <img className="w-full h-48 rounded-xl" src={img} alt="" />
              <div className="px-4 py-2">
                <h1 className="text-xl font-semibold text-center text-blue-500 uppercase">
                  {title}
                </h1>
              </div>
              <div>
                <Link
                  to={`/course/${id}`}
                  className="flex items-center justify-center py-2 px-4 w-full text-center rounded-lg bg-gray-500 hover:bg-slate-800 text-white font-semibold uppercase mx-auto mt-7">
                  <TfiBook className="mr-2" /> Details
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
