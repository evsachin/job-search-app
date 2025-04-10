import React from "react";

const JobseekerDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome Job Seeker!</h1>
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="font-semibold">Profile Completion</p>
          <progress value="70" max="100" className="w-full" />
        </div>
        <div className="bg-white p-4 rounded-xl shadow">Saved Jobs: 5</div>
        <div className="bg-white p-4 rounded-xl shadow">Jobs Applied: 10</div>
      </div>
    </div>
  );
};

export default JobseekerDashboard;