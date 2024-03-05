import { X } from "lucide-react";
import React from "react";

const Rating = () => {
  return (
    <div>
      <h2 className="text-white text-lg font-medium mt-5">Rating</h2>
      <div className="px-3 py-2 m-2  rounded-lg border-gray-500 border-2 text-gray-400">
        <div className="text-lg">86% recommend this</div>
        <div className="text-sm">Based on 7 community rating.</div>
        <div className="my-3 flex flex-wrap">
          <div className="text-sm border-gray-600 border-2 px-3 pb-1 rounded-lg bg-gray-700 mr-2 mt-1 ">
            Readable
          </div>
          <div className="text-sm border-gray-600 border-2 px-3 pb-1 rounded-lg bg-gray-700 mr-2 mt-1">
            Adventurous
          </div>
          <div className="text-sm border-gray-600 border-2 px-3 pb-1 rounded-lg bg-gray-700 mr-2 mt-1 ">
            Insightful
          </div>
          <div className="text-sm border-gray-600 border-2 px-3 pb-1 rounded-lg bg-gray-700 mr-2 mt-1">
            Reflective
          </div>
        </div>
        <hr />
        <div className="text-lg my-3">
          <X size={24} /> - 4.3/5 on Goodreads
        </div>

        <div className="text-lg my-3">
          <X size={24} /> - 4.3/5 on Google
        </div>
      </div>
    </div>
  );
};

export default Rating;
