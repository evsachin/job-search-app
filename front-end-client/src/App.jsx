import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import {
  Splash,
  Welcome,
  Login,
  Register,
  Home,
  JobCategory,
  Expertise,
  ProfileCompletion,
  SavedJobs,
  Analytics,
  Settings,
  Profile,
  Dashboard,
} from "./pages";

import Unauthorized from "./pages/UnAuthorized";
import ProtectedRoute from "./componenets/ProtectedRoute";
import Loader from "./componenets/Loader";
import PageWrapper from "./componenets/PageWrapper";
import { AnimatePresence } from "framer-motion";
import JobseekerDashboard from "./pages/JobSeekerDashboard";

// 👇 Separated AppRoutes logic for route animation
const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <Splash />
              </PageWrapper>
            }
          />
          <Route
            path="/welcome"
            element={
              <PageWrapper>
                <Welcome />
              </PageWrapper>
            }
          />
          <Route
            path="/login"
            element={
              <PageWrapper>
                <Login />
              </PageWrapper>
            }
          />
          <Route
            path="/register"
            element={
              <PageWrapper>
                <Register />
              </PageWrapper>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <PageWrapper>
                  <Home />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/category"
            element={
              <ProtectedRoute>
                <PageWrapper>
                  <JobCategory />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/expertise"
            element={
              <ProtectedRoute>
                <PageWrapper>
                  <Expertise />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile-completion"
            element={
              <ProtectedRoute>
                <PageWrapper>
                  <ProfileCompletion />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-jobs"
            element={
              <ProtectedRoute allowedRoles={["jobseeker"]}>
                <PageWrapper>
                  <SavedJobs />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <PageWrapper>
                  <Analytics />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <PageWrapper>
                  <Settings />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <PageWrapper>
                  <Profile />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin", "jobseeker"]}>
                <PageWrapper>
                  <JobseekerDashboard />
                </PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/unauthorized"
            element={
              <PageWrapper>
                <Unauthorized />
              </PageWrapper>
            }
          />
          {/* Redirect unknown routes to Splash or 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
