import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">Total Users: 120</div>
        <div className="bg-white p-4 rounded-xl shadow">Jobs Posted: 45</div>
        <div className="bg-white p-4 rounded-xl shadow">Applications: 340</div>
      </div>

    </div>
  );
};

export default AdminDashboard