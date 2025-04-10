// src/pages/Dashboard.js
import React from "react";
import { useSelector } from "react-redux";
import {jwtDecode} from "jwt-decode";
import AdminDashboard from "./AdminDashboard";
import JobseekerDashboard from "./JobSeekerDashboard";

const Dashboard = () => {
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
  let role = "jobseeker";

  try {
    const decoded = jwtDecode(token);
    role = decoded.role;
  } catch (err) {
    console.error("Invalid token", err);
  }

  return <JobseekerDashboard />;
};

export default Dashboard;

