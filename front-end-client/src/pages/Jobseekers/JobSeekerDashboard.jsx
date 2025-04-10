// src/pages/JobSeekerDashboard.jsx
import React from "react";

const JobSeekerDashboard = () => {
  const user = JSON.parse(localStorage.getItem("auth")) || {
    name: "Job Seeker",
    email: "user@example.com",
  };

  const recommendedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Remote",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CloudCore",
      location: "Pune",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Designify",
      location: "Mumbai",
    },
  ];

  const savedJobs = [
    { id: 101, title: "React Developer", company: "Webly", location: "Nashik" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user.name} 👋</h1>
      <p className="text-gray-600 mb-6">
        Explore the latest jobs curated just for you.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Recommended Jobs */}
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-3">Recommended Jobs</h2>
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 bg-white shadow rounded-lg border"
              >
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-500">
                  {job.company} • {job.location}
                </p>
                <button className="mt-2 text-blue-600 hover:underline">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Saved Jobs */}
          <div className="bg-white shadow rounded-lg p-4 border">
            <h2 className="text-lg font-semibold mb-3">Saved Jobs</h2>
            {savedJobs.map((job) => (
              <div key={job.id} className="mb-2">
                <p className="font-medium">{job.title}</p>
                <p className="text-sm text-gray-500">
                  {job.company} - {job.location}
                </p>
              </div>
            ))}
            <button className="mt-2 text-blue-600 hover:underline">
              View All
            </button>
          </div>

          {/* Profile Completion */}
          <div className="bg-white shadow rounded-lg p-4 border">
            <h2 className="text-lg font-semibold mb-2">Profile Completion</h2>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-green-500 h-2 rounded w-[70%]"></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">70% complete</p>
            <button className="mt-2 text-blue-600 hover:underline">
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
