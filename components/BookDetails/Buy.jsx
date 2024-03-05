import React from "react";

const Buy = () => {
  return (
    <div>
      <h2 className="text-white text-lg font-medium mt-5">Buy</h2>
      <div className="px-3 py-2 m-2   rounded-lg border-gray-500 border-2 text-gray-400">
        <div className="mb-3">
          <div className="text-lg">Get this book</div>
          <div className="text-sm">
            We partner with some online stores that will give us a small
            affiliate fee on purchase.
          </div>
        </div>
        <hr />
        <div className="underline my-3">bookshop.org</div>
      </div>
    </div>
  );
};

export default Buy;
