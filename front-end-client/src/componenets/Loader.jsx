// components/Loader.js
import React from "react";

const Loader = () => (
  <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
    <div className="loader border-4 border-blue-500 border-t-transparent w-10 h-10 rounded-full animate-spin"></div>
  </div>
);

export default Loader;
