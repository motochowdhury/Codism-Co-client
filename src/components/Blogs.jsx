import React from "react";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1">
        {blogs.map((blog) => {
          const { id, title, img, desc } = blog;
          return (
            <div
              key={id}
              className="w-[90%] lg:w-[70%] bg-slate-400 mx-auto flex flex-col lg:flex-row m-10 p-10 rounded-xl">
              <img
                className="w-[90%] mb-8 lg:w-[40%] max-h-min rounded-xl lg:mr-9 mx-auto"
                src={img}
                alt=""
              />
              <div>
                <h2 className="text-3xl uppercase font-semibold text-center mb-7">
                  {title}
                </h2>
                <p className="text-gray-700 text-lg">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
