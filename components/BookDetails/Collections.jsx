import React from "react";

const collectionData = [
  {
    collectionName: "Wishlist Eng",
    userName: "barbpantogz",
  },
  {
    collectionName: "book club",
    userName: "fmalfonso23",
  },
  {
    collectionName: "SCifi lc",
    userName: "Daniella",
  },
];

const Collections = () => {
  return (
    <div>
      <h2 className="text-white text-lg font-medium mt-5">Collections</h2>
      <div className="px-3 py-2 m-2  rounded-lg border-gray-500 border-2 text-gray-400">
        {collectionData.map((collection,i) => (
          <div key={i} className="hover:bg-gray-800 p-2 rounded-lg">
            <div className="text-md">{collection.collectionName}</div>
            <div className="text-xs">by {collection.userName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
