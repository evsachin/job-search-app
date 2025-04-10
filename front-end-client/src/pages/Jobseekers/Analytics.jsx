// src/pages/Analytics.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalytics } from "../../redux/analyticsSlice";

const Analytics = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Job Analytics</h1>
      {loading && <p>Loading analytics...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Total Applications</h2>
            <p className="text-3xl">{data.totalApplied}</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Saved Jobs</h2>
            <p className="text-3xl">{data.totalSaved}</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold">Interviews Scheduled</h2>
            <p className="text-3xl">{data.interviewsScheduled}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
