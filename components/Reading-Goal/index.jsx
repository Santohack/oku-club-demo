"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const ReadingGoal = () => {
  const path = usePathname();
  const [isreadOpen, setreadOpen] = useState(false);
  const active = path === "/readgoal";
  const menuOptions = ["Option 1", "Option 2", "Option 3"]; // Static menu options
  return (
    <div
      className={`my-6 w-full bottom-[55px] ${
        active && "bg-[#1C1C1D]"
      } hover:bg-[#1C1C1D] text-[14px] text-gray-400 px-3 text-center absolute pr-4 py-2 rounded-[10px]   gap-4 flex items-center justify-between`}
    >
      <Link
        href="/readgoal"
        className="relative p-1.5 rounded flex items-center justify-center focus:outline-none right-0 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <svg
          height="18"
          viewBox="0 0 18 18"
          width="18"
          className="css-j2l39w"
          fill="currentColor"
        >
          <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            fill="currentColor"
          >
            <path d="m12.375 13v-1.125c0-.8951-.3556-1.7536-.9885-2.38649-.6329-.63293-1.49139-.98851-2.3865-.98851s-1.75355.35558-2.38649.98851c-.63293.63289-.98851 1.49139-.98851 2.38649v1.125"></path>
            <path d="m14.625 13v-1.125c0-1.4918-.5926-2.92258-1.6475-3.97748-1.0549-1.05489-2.4857-1.64752-3.9775-1.64752-1.49184 0-2.92258.59263-3.97748 1.64752-1.05489 1.0549-1.64752 2.48568-1.64752 3.97748v1.125"></path>
            <path d="m16.875 13v-1.125c0-2.08858-.8297-4.09162-2.3065-5.56847-1.4769-1.47684-3.4799-2.30653-5.5685-2.30653-2.08858 0-4.09162.82969-5.56847 2.30653-1.47684 1.47685-2.30653 3.47989-2.30653 5.56847v1.125"></path>
          </g>
        </svg>
      </Link>

      <Link href={"/readgoal"}>Reading Goal</Link>

      <div className="flex">
        <button
          className={`text-gray-400 p-3 hover:bg-gray-800 rounded focus:outline-none focus:ring-gray-500 focus:text-white`}
          onClick={() => setreadOpen(!isreadOpen)}
        >
          <svg
            height="6"
            viewBox="0 0 10 6"
            width="11"
            className="css-y7zllx"
            fill="currentColor"
          >
            <path
              clipRule="evenodd"
              d="m9.79079 5.64134c-.27895.27825-.73121.27825-1.01015 0l-3.78064-3.77119-3.78064 3.77119c-.278944.27825-.731204.27825-1.010151 0-.2789454-.27825-.2789454-.72938 0-1.00763l4.285711-4.274999c.13396-.13362.31564-.208687.50508-.208687s.37112.075067.50508.208687l4.28571 4.274999c.27891.27825.27891.72938 0 1.00763z"
              fillRule="evenodd"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        {isreadOpen && (
          <div className="h-[100px]  items-start flex absolute w-[220px] bg-[#131314] transition-all duration-300 text-gray-400 right-0 bottom-0 mt-2 border-gray-500   border rounded-md shadow-md">
            <div className="flex m-3 gap-3 items-center justify-between ">
              <Link
                href="/readgoal"
                className="relative p-1.5 rounded flex items-center justify-center focus:outline-none right-0 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <svg
                  height="18"
                  viewBox="0 0 18 18"
                  width="18"
                  className="css-j2l39w"
                  fill="currentColor"
                >
                  <g
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fill="currentColor"
                  >
                    <path d="m12.375 13v-1.125c0-.8951-.3556-1.7536-.9885-2.38649-.6329-.63293-1.49139-.98851-2.3865-.98851s-1.75355.35558-2.38649.98851c-.63293.63289-.98851 1.49139-.98851 2.38649v1.125"></path>
                    <path d="m14.625 13v-1.125c0-1.4918-.5926-2.92258-1.6475-3.97748-1.0549-1.05489-2.4857-1.64752-3.9775-1.64752-1.49184 0-2.92258.59263-3.97748 1.64752-1.05489 1.0549-1.64752 2.48568-1.64752 3.97748v1.125"></path>
                    <path d="m16.875 13v-1.125c0-2.08858-.8297-4.09162-2.3065-5.56847-1.4769-1.47684-3.4799-2.30653-5.5685-2.30653-2.08858 0-4.09162.82969-5.56847 2.30653-1.47684 1.47685-2.30653 3.47989-2.30653 5.56847v1.125"></path>
                  </g>
                </svg>
              </Link>

              <Link href={"/readgoal"}>Reading Goal</Link>

              <div className="flex">
                <button
                  className={`text-gray-400 p-3 hover:bg-gray-800 rounded focus:outline-none focus:ring-gray-500 focus:text-white`}
                  onClick={() => setreadOpen(!isreadOpen)}
                >
                  <svg
                    height="6"
                    viewBox="0 0 10 6"
                    width="11"
                    className="css-y7zllx"
                    fill="currentColor"
                  >
                    <path
                      clipRule="evenodd"
                      d="m9.79079 5.64134c-.27895.27825-.73121.27825-1.01015 0l-3.78064-3.77119-3.78064 3.77119c-.278944.27825-.731204.27825-1.010151 0-.2789454-.27825-.2789454-.72938 0-1.00763l4.285711-4.274999c.13396-.13362.31564-.208687.50508-.208687s.37112.075067.50508.208687l4.28571 4.274999c.27891.27825.27891.72938 0 1.00763z"
                      fillRule="evenodd"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" absolute bottom-8 left-3 w-3/4 border-b-2  border-b-gray-600 my-4 border-red flex flex-col " />
            <div className="absolute bottom-4 left-10 w-4/5 ml-10 underline cursor-pointer font-medium ">
              set goal
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingGoal;
