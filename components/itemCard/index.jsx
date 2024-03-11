"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ItemCard = ({ href, label ,svg}) => {
  const path = usePathname();
  const active = path === href;

  return (
    <div
      className={`hover:bg-[#1C1C1D] text-[14px] rounded px-3 ${
        active ? "bg-[#1C1C1D] text-gray-400" : "text-gray-400"
      }`}
    >
      <Link
        href={href}
        className={`inset-y-0 left-0 flex items-center focus:outline-none bg-red-600 focus:ring-gray-500 focus:bg-[#1C1C1D] ${
          active ? "bg-[#272E39] text-gray-400" : "text-gray-400"
        }`}
      >
        <div className="absolute inset-y-0 left-1 flex items-center pl-2 ">
         {svg}
        </div>
      </Link>
      <Link
        href="/contacts"
        className={`inline-block 
               "scale-0"
              } w-full py-2 pl-8 pr-4   `}
      >
        {label}
      </Link>
    </div>
  );
};

export default ItemCard;
