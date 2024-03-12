import React from "react";
import TabsDescription from "./TabsDescription";
import Rating from "./Rating";
import Collections from "./Collections";
import Buy from "./Buy";

const BookDetails = () => {
  return (
    <div className="lg:flex justify-between mx-auto">
      <div>
        <TabsDescription />
      </div>
      <div className="text-white ml-10">
        <Rating />
        <Collections />
        <Buy />
      </div>
    </div>
  );
};

export default BookDetails;
