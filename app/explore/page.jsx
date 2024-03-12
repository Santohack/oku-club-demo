import BookCollection from "@/components/BookCollection";
import SearchBox from "@/components/searchBox";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-6  flex-col mx-10 ml-32 justify-between">
      <SearchBox />
      <BookCollection />
    </div>
  );
};

export default page;
