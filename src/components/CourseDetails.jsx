import React from "react";
import { MdDownloading } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const { id, title, desc, img } = useLoaderData();
  return (
    <div>
      <div
        ref={ref}
        className="w-[80%] lg:max-w-[50%] p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 mx-auto mt-10 mb-8">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2 flex items-center justify-between">
          <h2 className="text-4xl text-blue-500 font-semibold tracking-wide">
            {title}
          </h2>
          <div>
            <ReactToPdf
              targetRef={ref}
              filename={`${title}.pdf`}
              x={15}
              y={0.5}>
              {({ toPdf }) => (
                <button onClick={toPdf}>
                  <MdDownloading className="text-2xl hover:bg-slate-400 rounded-full" />
                </button>
              )}
            </ReactToPdf>
          </div>
        </div>
        <p className="dark:text-gray-100 mb-7">{desc}</p>
        <div className="w-full">
          <Link className="py-2 px-8 bg-blue-500 mx-auto">
            Get premium access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
