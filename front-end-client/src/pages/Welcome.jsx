import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {IMAGES} from '../constants'

const slides = [
  {
    title: "Find Your Dream Job",
    desc: "Explore top companies hiring near you.",
    img: IMAGES.img1,
  },
  {
    title: "Track Your Applications",
    desc: "Save jobs and view your application analytics.",
    img: IMAGES.img2,
  },
  {
    title: "Easy and Fast Apply",
    desc: "Apply for jobs with one click.",
    img: IMAGES.img3,
  },
];

const Welcome = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Dark mode logic
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">JobHunt</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          Toggle Theme
        </button>
      </div>

      {/* Slideshow */}
      <div className="w-full max-w-lg mb-10 text-center">
        <motion.img
          key={slides[current].img}
          src={slides[current].img}
          alt="slide"
          className="w-full h-56 object-cover rounded-xl mb-4 shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        />
        <h2 className="text-xl font-semibold">{slides[current].title}</h2>
        <p className="text-sm mt-1">{slides[current].desc}</p>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <button
          onClick={() => navigate("/login")}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/home")}
          className="w-full py-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-lg transition"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default Welcome;
