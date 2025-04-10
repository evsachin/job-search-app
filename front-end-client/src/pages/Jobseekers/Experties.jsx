import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsByCategory, setCategory } from "../../redux/jobSlice";

const categories = [
  "Software Development",
  "Marketing",
  "Design",
  "Sales",
  "Customer Support",
  "Finance",
];

const Expertise = () => {
  const dispatch = useDispatch();
  const { category, jobs, loading } = useSelector((state) => state.jobs);

  const handleCategorySelect = (selectedCategory) => {
    dispatch(setCategory(selectedCategory));
    dispatch(fetchJobsByCategory(selectedCategory));
  };

  useEffect(() => {
    if (category) {
      dispatch(fetchJobsByCategory(category));
    }
  }, [dispatch, category]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Select Your Expertise</h1>
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            className={`px-4 py-2 rounded-full ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3">
        {category ? `Jobs in ${category}` : "Jobs"}
      </h2>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="p-4 border rounded shadow bg-white hover:shadow-md"
            >
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="mt-2 text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Expertise;
