import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { img, title } = useLoaderData();
  return (
    <div>
      <div className="w-[90%] md:w-[70%] lg:w-[40%] mx-auto bg-slate-600 flex flex-col lg:flex-row items-center p-12 mt-16">
        <img
          className="w-[70%] lg:w-[40%] h-full rounded-2xl border-2 border-yellow-500 lg:mr-6"
          src={img}
          alt=""
        />
        <div className="flex flex-col items-center">
          <h4 className="text-gray-300 text-2xl mb-5 text-center">{title}</h4>
          <button className="py-2 px-10 rounded-full mx-auto bg-slate-100 ">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
