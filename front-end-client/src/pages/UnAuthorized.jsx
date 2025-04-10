import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-red-700">
      <h1 className="text-4xl font-bold mb-4">403 - Unauthorized</h1>
      <p className="mb-6 text-center max-w-md">
        Oops! You don’t have permission to view this page. Please contact the
        admin if you think this is a mistake.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Unauthorized;
