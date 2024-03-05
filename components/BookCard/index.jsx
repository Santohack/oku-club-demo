"use client";
import { Bookmark, Check, Eye } from "lucide-react";
import React from "react";

const BookTitle = () => {
  const [onHover, setOnHover] = React.useState(false);
  const [onHover1, setOnHover1] = React.useState(false);
  const [onHover2, setOnHover2] = React.useState(false);

  const handleMouseEnter = () => setOnHover(true);
  const handleMouseLeave = () => setOnHover(false);
  const handleMouseEnter1 = () => setOnHover1(true);
  const handleMouseLeave1 = () => setOnHover1(false);
  const handleMouseEnter2 = () => setOnHover2(true);
  const handleMouseLeave2 = () => setOnHover2(false);

  return (
    <div className="md:flex md:flex-row-reverse justify-between py-[80px] text-white w-3/4 mx-10">
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
        className="w-full my-3 md:text-left text-center"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        <div className="text-2xl mb-1">Scythe (Arc of a Scythe, #1)</div>
        <span className="block text-gray-500">by Neal Shusterman</span>
        <div className="flex items-center">
          <div
            className="my-3 flex flex-col justify-center items-center w-[115px] gap-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-4 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:border-red-600 dark:focus:ring-gray-700 transition-all duration-300 hover:text-green-500 hover:border-green-500"
              >
                <Bookmark
                  className={` ${onHover && "text-red-500"}`}
                  style={{ transition: "color 0.5s ease" }}
                />
              </button>
            </div>
            <span className="hidden md:inline-block ml-2">
              {onHover ? "save for later" : "To read"}
            </span>
          </div>
          <div
            className="my-3 flex flex-col justify-center items-center gap-2 w-[120px]"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-4 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-yellow-800 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all duration-300 hover:text-green-500 hover:border-green-500"
            >
              <Eye
                className={` ${onHover1 && "text-yellow-500"}`}
                style={{ transition: "color 0.5s ease" }}
              />
            </button>
            <span className="hidden md:inline-block ml-2">
              {onHover1 ? " Mark as read" : "Reading"}
            </span>
          </div>
          <div
            className="my-3 flex flex-col justify-center items-center gap-2 w-[130px]"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <button
              type="button"
              className={`text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-4 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:border-green-600 dark:focus:ring-gray-700 transition-all duration-300 hover:text-indigo-500 hover:border-indigo-500`}
            >
              <Check
                className={` ${onHover2 && "text-green-500"}`}
                style={{ transition: "color 0.5s ease" }}
              />
            </button>
            <span
              className={`hidden md:inline-block ml-2 ${
                onHover2 && "text-green-500"
              }`}
            >
              {onHover2 ? "Mark as finished" : "Read"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTitle;
