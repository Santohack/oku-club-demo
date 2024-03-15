"use client";
import React, { useRef } from "react";

import Image from "next/image";
import EmblaCarousel from "../Slider";
import CollectionUpdates from "../Slider/CollectionUpdates";
import FeaturedCollections from "../Slider/FeaturedCollections";
import LatestReviews from "../Slider/LatestReviews";
import { BookTab, BookTabs } from "../BookCollection/BookTab";
import { Button } from "../ui/button";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
const OPTIONS = { align: "start" };
const IMAGES = [
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  // Add more image URLs as needed
];
const ProfleCollection = () => {
  const fileInputRef = useRef(null);

  const handlePlusIconClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="min-h-screen lg:mr-367 md:-ml-700 items-start">
      <BookTabs>
        <BookTab label="Tab" title="Library">
          <div className="flex my-10 flex-col text-center gap-2 ml-12 py-10 items-center justify-center">
            <h3 className="text-2xl">Nothing but cobwebs</h3>{" "}
            <span>
              Take a look at Explore to get started building your library or
              import your books from Goodreads.
            </span>
            <div className="flex flex-col py-4 gap-5">
              <Link
                variant="outline"
                href="/"
                className="ml-4 gap-3 border py-2 px-4 rounded-lg bg-inherit hover:bg-[#1C1C1D] hover:text-gray-400"
              >
                Browser Explore
              </Link>
              <Link
                variant="outline"
                href="/"
                className="ml-4 gap-3 border border-[#1C1C1D] bg-[#1C1C1D] py-2 px-4 rounded-lg  hover:bg-[#1C1C1D] hover:text-gray-400"
              >
                Import from Goodreads
              </Link>
            </div>
          </div>
        </BookTab>
        <BookTab label="Tab1" counter={5} title="Collections">
          <div className="flex  my-10 flex-col  ml-8 hover:bg-[#1C1C1D]  border border-gray-800 rounded-3xl h-[300px] w-[400px]">
            <div className="flex  flex-col items-center justify-center m-4">
              <div className="flex gap-3 relative">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="opacity-0 absolute h-full w-full inset-0"
                />
                <div className="pt-[70px]">
                <PlusIcon
                  className="text-black  bg-white rounded-full  border absolute inset-0 m-auto cursor-pointer"
                  style={{ zIndex: 1 }}
                  onClick={handlePlusIconClick}
                />
                </div>
              </div>
              <Button className=" bg-inherit  hover:bg-[#1C1C1D] hover:text-gray-400">
                Create a new collection
              </Button>
              <Image
                className=""
                src="/gl.png"
                alt="okulogo"
                style={{
                  color: "rgba(0, 0, 0, 0)",
                  display: "block",
                  filter: "invert(100%)",
                  height: "auto",
                  maxWidth: "200px",
                  width: "100%",
                  mixBlendMode: "lighten",
                }}
                width={400}
                height={400}
              />
            </div>
          </div>
        </BookTab>
        <BookTab label="Tab3" counter={5} title="Reviews">
          <div className="flex my-10 flex-col  ml-32 py-10 items-center justify-center">
            <h3 className="text-3xl"> Search Oku</h3> <br /> Find people within
            the Oku community
          </div>
          <div className="flex relative justify-end items-center">
            <Image
              src="/gl.png"
              alt="okulogo"
              style={{
                color: "rgba(0, 0, 0, 0)",
                display: "block",
                filter: "invert(100%)",
                height: "auto",
                maxWidth: "300px",
                width: "100%",
                mixBlendMode: "lighten",
              }}
              width={400}
              height={400}
            />
          </div>
        </BookTab>
        <BookTab label="Tab4" counter={5} title="Highlights">
          <div className="flex my-10 flex-col  ml-32 py-10 items-center justify-center">
            <h3 className="text-3xl"> Search Oku</h3> <br /> Find people within
            the Oku community
          </div>
          <div className="flex relative justify-end items-center">
            <Image
              src="/gl.png"
              alt="okulogo"
              style={{
                color: "rgba(0, 0, 0, 0)",
                display: "block",
                filter: "invert(100%)",
                height: "auto",
                maxWidth: "300px",
                width: "100%",
                mixBlendMode: "lighten",
              }}
              width={400}
              height={400}
            />
          </div>
        </BookTab>
      </BookTabs>
    </div>
  );
};

export default ProfleCollection;
