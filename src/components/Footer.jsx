import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-md mx-4 mt-10">
      <p className="text-xs mt-2 text-gray-500">
        ©MovieApp {new Date().getFullYear}, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
