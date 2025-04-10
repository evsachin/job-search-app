// src/pages/JobCategory.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, fetchJobsByCategory } from "../../redux/jobSlice";

const categories = ["Software", "Marketing", "Finance", "Design", "Sales"];

const JobCategory = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.jobs.category);

  const handleSelect = (cat) => {
    dispatch(setCategory(cat));
    dispatch(fetchJobsByCategory(cat));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose a Job Category</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            className={`px-4 py-2 rounded border ${
              selectedCategory === cat ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
