import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-400">
      <hr />
      <div className="sm:flex   text-center justify-between p-4">
        <div className="flex flex-wrap justify-center ">
          <div className="mx-2">Explore</div>
          <div className="mx-2">Blog</div>
          <div className="mx-2">Pricing</div>
          <div className="mx-2">Privacy</div>
          <div className="mx-2">Terms</div>
          <div className="mx-2">Contact</div>
        </div>
        <div>
          <div className="text-sm py-2">Copyright © 2022 Readng BV.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
