import { Link } from "react-router-dom";
import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import CarCardGrid from "../components/CarCardGrid";
import CardCardTabular from "../components/CardCardTabular";

const AllCars = () => {
  const [view, setView] = useState("grid"); // Default to Grid View

  const toggleView = (newView) => {
    setView(newView); // Set view to "grid" or "list"
  };
  return (
    <div className="container mx-auto font-accent">
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
        {view === "grid" ? <CarCardGrid /> : <CardCardTabular />}
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-8">
        {/* Pagination Controls */}
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <button className="w-16 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 text-gray-900">
            <LuChevronLeft />
          </button>

          {/* Page Numbers */}
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-sm hover:bg-gray-200">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-sm hover:bg-gray-200">
            3
          </button>

          <span className="w-8 h-8 flex items-center justify-center text-gray-500">
            ...
          </span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-sm hover:bg-gray-200">
            20
          </button>

          {/* Next Button */}
          <button className="w-16 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 text-gray-900">
            <LuChevronRight />
          </button>
        </div>

        {/* Results Info */}
        <div className="text-sm text-gray-500">
          Showing results 1–30 of 1,415
        </div>
      </div>
    </div>
  );
};

export default AllCars;
