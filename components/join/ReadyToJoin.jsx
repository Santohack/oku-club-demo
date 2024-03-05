import React from "react";

const ReadyToJoin = () => {
  return (
    <div className="h-screen ">
      <div className=" text-center text-white flex flex-col min-h-screen justify-center items-center">
        <div className="text-5xl py-5">Ready To Join Us</div>
        <div className="text-md">
          Oku is the companion app for every book. <br /> Become a member for
          free to track, rate & review your <br /> favorite books with a
          community of others.
        </div>
        <button
          type="button"
          class="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Create a free account
        </button>
      </div>
    </div>
  );
};

export default ReadyToJoin;
