import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold tracking-wide mb-4">JobHunt</h1>
        <p className="text-lg">Your Career Starts Here 🚀</p>
      </motion.div>
    </div>
  );
};

export default Splash;
