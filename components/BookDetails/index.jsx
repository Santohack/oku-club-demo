import React from "react";
import TabsDescription from "./TabsDescription";
import Rating from "./Rating";
import Collections from "./Collections";
import Buy from "./Buy";

const BookDetails = () => {
  return (
    <div className="lg:flex justify-between mx-auto w-3/4">
      <div>
        <TabsDescription />
      </div>
      <div className="text-white">
        <Rating />
        <Collections />
        <Buy />
      </div>
    </div>
  );
};

export default BookDetails;
