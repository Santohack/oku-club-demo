import { Keyboard, Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const SearchBox = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center relative">
        <Search className="absolute text-gray-400 ml-2" size={20} />
        <input
          type="text"
          placeholder="Search for books, authors or paste ISBN"
          className="w-[600px] pl-10 border-gray-500 border-2 bg-[#1C1C1D] rounded-lg p-2"
        />
      </div>
      <Button
        variant="outline"
        className="ml-4 gap-3 bg-inherit hover:bg-[#1C1C1D] hover:text-gray-400"
      >
        <span role="img" aria-label="Globe icon">
          🌍
        </span>{" "}
        English
      </Button>
      <Button
        variant="outline"
        className="ml-4 gap-3 bg-inherit hover:bg-[#1C1C1D] hover:text-gray-400"
      >
        <Keyboard className="text-gray-400" size={20} />
        Missing Books?
      </Button>
    </div>
  );
};

export default SearchBox;
