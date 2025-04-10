import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-sm text-gray-500">{job.company}</p>
      <p className="mt-2">{job.description.substring(0, 100)}...</p>
      <button className="mt-2 text-blue-600 hover:underline">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
