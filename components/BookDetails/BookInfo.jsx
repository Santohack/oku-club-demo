import React from "react";

const BookInfo = () => {
  return (
    <div className="py-4">
      <h2 className="text-white text-lg font-medium ">Description</h2>
      <p className="text-gray-400">
        "In a world where disease has been eliminated, the only way to die is to
        be randomly killed ('gleaned') by professional reapers ('scythes'). Two
        teens must compete with each other to become a scythe--a position
        neither of them wants. The one who becomes a scythe must kill the one
        who doesn't"--
      </p>

      <h2 className="text-white text-lg font-medium mt-5">Details</h2>
      <table className="text-gray-400">
        <tbody>
          <tr>
            <td>pages</td>
            <td>435</td>
          </tr>
          <tr>
            <td>Relesed</td>
            <td>November 22 2016</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>English</td>
          </tr>
          <tr>
            <td>ISBN</td>
            <td>9781442472426</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookInfo;
