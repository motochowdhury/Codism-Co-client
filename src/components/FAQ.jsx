import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen w-[90%] lg:w-[50%] mx-auto">
        <div className="bg-white w-full">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 mb-8 text-gray-600">
              React Interview Questions And Answers
            </p>
            <div className="space-y-4">
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">What is React?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  React is a front-end JavaScript library developed by Facebook
                  in 2011.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">
                  What is Props and how to use it give some example?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Props is the shorthand for Properties in React. it passed data
                  one component to another components
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">What is JSX?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  JSX is a syntax extension of JavaScript. It is used with React
                  to describe what the user interface should look like. By using
                  JSX, we can write HTML structures in the same file that
                  contains JavaScript code.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">What is Firebase?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Google Firebase is a Google-backed app development platform
                  that allows developers to create apps for iOS, Android, and
                  the web. Firebase Realtime Database (Firebase) is a
                  cloud-based NoSQL database that syncs and stores data in
                  real-time across users. Firebase, developed by Google and
                  released in 2017, allows for expressive searches that scale
                  with the size of the result set via Android, iOS, and
                  JavaScript SDKs.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">
                  Is firebase frontend or backend?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Since Firebase is a backend solution, users can do anything on
                  backend with the Firebase admin sdk.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
