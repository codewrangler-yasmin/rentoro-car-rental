import { Link } from "react-router-dom";
import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import CarCardGrid from "../components/CarCardGrid";
import CarCardTabular from "../components/CarCardTabular";
import { Helmet } from "react-helmet-async";

const AllCars = () => {
  const [view, setView] = useState("grid"); // Default to Grid View

  const toggleView = (newView) => {
    setView(newView); // Set view to "grid" or "list"
  };
  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>Available Cars | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="container mx-auto font-accent py-20">
        <div className="bg-gray-100 flex justify-between">
          <div>
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">
              <Link href="#" className="text-blue-600">
                Home
              </Link>{" "}
              / <span>Available Cars</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Available Cars for Rent
            </h1>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="flex items-center w-full md:w-auto">
              <input
                type="text"
                placeholder="Search Cars e.g. Audi Q7"
                className="text-gray-400 flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            {/* Sort Options */}

            <select
              className="px-4 py-2 text-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="newest"
            >
              <option value="">Sort By Price/Date</option>
              <option value="newest">Newest By Date</option>
              <option value="oldest">Oldest By Date</option>
              <option value="lowestPrice">Lowest By Price</option>
              <option value="highestPrice">Highest By Price</option>
            </select>
            {/* Toggle Buttons */}
            <div className="flex items-center space-x-2">
              {/* Grid View Button */}
              <button
                onClick={() => toggleView("grid")}
                className={`p-2 rounded-md ${
                  view === "grid"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 border border-gray-300"
                } hover:bg-blue-600 hover:text-white`}
              >
                <IoGridOutline className="w-5 h-5" />
              </button>

              {/* List View Button */}
              <button
                onClick={() => toggleView("list")}
                className={`p-2 rounded-md ${
                  view === "list"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 border border-gray-300"
                } hover:bg-blue-600 hover:text-white`}
              >
                <FaThList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 my-12">
          {view === "grid" ? <CarCardGrid /> : <CarCardTabular />}
        </div>

        <div className="flex justify-center items-center">
          <Pagination count={10} variant="outlined" color="primary" />
        </div>
      </div>
    </>
  );
};

export default AllCars;
