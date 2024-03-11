"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ItemCard from "../itemCard";
import { menuOptions } from "@/utils/helpher";

const ProfileCard = ({ profileImg, userName, RightIcon,href }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
const path =usePathname()
const active = path === href
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };



  return (
    <div
      className={`my-6 w-full text-center ${active  && "bg-[#1C1C1D]"} hover:bg-[#1C1C1D] absolute pr-4 py-2 rounded-[10px] bottom-1 gap-4 flex items-center justify-between`}
    >
      <Link
        href={href}
        className="relative p-1.5 rounded flex items-center justify-center focus:outline-none right-0 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        {profileImg}
      </Link>

      <Link href={href} className={`text-sm text-gray-50`}>
        {userName}
      </Link>

      <div className="flex relative">
        <button
          className={`text-gray-400  p-3 hover:bg-gray-800 rounded focus:outline-none focus:ring-gray-500 focus:text-white`}
          onClick={handleMenuClick}
        >
          {RightIcon}
        </button>

        {isMenuOpen && (
          <div className="absolute w-[210px] bg-[#131314]  text-gray-400 right-0 bottom-10 mt-2 border-gray-500   border rounded-md ">
            {/* Static menu options */}
            {menuOptions.map((option, index) => (
             
              <div
                key={index}
                className=" py-2 relative rounded hover:bg-[#1C1C1D] cursor-pointer"
              >
                <ItemCard href={option.href} svg={option.svg} label={option.label} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
