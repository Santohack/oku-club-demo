"use client";
import React from "react";
import { BookTab, BookTabs } from "./BookTab";
import Image from "next/image";
import EmblaCarousel from "../Slider";
const OPTIONS = { align: 'start' }
const IMAGES = [
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  "https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/07/feeab6a6c713bb197b9258d7f090f2d1.jpg",
  // Add more image URLs as needed
];
const BookCollection = () => {
  return (
    <div className="min-h-screen lg:mr-367 md:-ml-700 items-start">
      <BookTabs>
        <BookTab label="Tab" title="Books">
        <EmblaCarousel images={IMAGES} options={OPTIONS} />
        </BookTab>
        <BookTab label="Tab 2" title="Members">
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

export default BookCollection;
