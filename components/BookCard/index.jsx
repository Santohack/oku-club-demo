import { Bookmark, Check, Eye } from "lucide-react";
import React from "react";

const BookTitle = () => {
  return (
    <div className="md:flex md:flex-row-reverse justify-between  py-[80px] text-white w-3/4 mx-10 ">
      <div>
        <img
          src="https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg"
          alt="cover_image"
          width="160px"
          height="242px"
          className="mx-auto"
        />
      </div>

      <div
        className="my-3 md:text-left text-center"
        style={{ fontFamily: "real" }}
      >
        <div className="text-2xl mb-1">Scythe (Arc of a Scythe, #1)</div>
        <span className="block text-gray-500">by Neal Shusterman</span>
        <div className="flex gap-4 items-center">
          <div className="my-3 flex flex-col justify-center items-center gap-4">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4  focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-4 dark:bg-transparent dark:text-white dark:border-gray-600  dark:hover:border-red-600 dark:focus:ring-gray-700 transition-all duration-300 hover:text-green-500 hover:border-green-500"
            >
              <Bookmark />
            </button>
            <span className="hidden md:inline-block ml-2">Bookmark</span>
          </div>
          <div className="my-3 flex flex-col justify-center items-center gap-2">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4  focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-4 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all duration-300 hover:text-green-500 hover:border-green-500"
            >
              <Eye />
            </button>
            <span className="hidden md:inline-block ml-2">Read</span>
          </div>
          <div className="my-3 flex flex-col justify-center items-center gap-2">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-4 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all duration-300 hover:text-indigo-500 hover:border-indigo-500"
            >
              <Check />
            </button>
            <span className="hidden md:inline-block ml-2">Mark as Read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTitle;
