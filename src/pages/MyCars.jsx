import Pagination from "@mui/material/Pagination";
import { Helmet } from "react-helmet-async";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyCars = () => {
  // Static car data
  const cars = [
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      model: "Mercedes-Benz C Class",
      dailyPrice: "$399",
      availability: "Available",
      dateAdded: "2023-12-20",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      model: "BMW 5 Series",
      dailyPrice: "$450",
      availability: "Unavailable",
      dateAdded: "2023-12-18",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/80",
      model: "Audi A4",
      dailyPrice: "$350",
      availability: "Available",
      dateAdded: "2023-12-15",
    },
  ];

  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>My Cars | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="p-10 rounded-2xl border border-gray-200 bg-gray-50 font-accent">
        {/* Sorting Options */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-700 flex gap-3">
              <span>My Listed Cars</span>
              <span className="bg-blue-200 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                0 Cars
              </span>
            </h2>
            <p className="text-gray-500 mb-6">
              Update and Manage All Your Listed Cars.
            </p>
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
          </div>
        </div>

        {/* Display No Cars */}
        {cars.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">
              No cars available.{" "}
              <Link
                to="/addCar"
                className="text-blue-500 font-bold hover:underline"
              >
                Add a Car
              </Link>
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            {/* Table */}
            <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
              {/* Table Header */}
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b"></th>
                  <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                    Car Model
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                    Daily Rental Price
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                    Availability
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                    Date Added
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car.id} className="bg-white hover:bg-gray-50">
                    {/* Car Image */}
                    <td className="px-6 py-4 border-b">
                      <img
                        src={car.image}
                        alt={car.model}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </td>
                    {/* Car Model */}
                    <td className="px-6 py-4 border-b">{car.model}</td>
                    {/* Daily Rental Price */}
                    <td className="px-6 py-4 border-b">{car.dailyPrice}</td>
                    {/* Availability */}
                    <td
                      className={`px-6 py-4 border-b font-semibold ${
                        car.availability === "Available"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {car.availability}
                    </td>
                    {/* Date Added */}
                    <td className="px-6 py-4 border-b">{car.dateAdded}</td>
                    {/* Actions */}
                    <td className="px-6 py-4 border-b">
                      <div className="flex gap-3">
                        {/* Edit Button */}
                        <button className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                          <AiOutlineEdit />
                        </button>
                        {/* Cancel Booking Button */}
                        <button className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
                          <BsTrash3Fill />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex flex-col items-center justify-center space-y-4 mt-8">
          {/* Pagination Controls */}
          <div className="flex justify-center items-center">
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCars;
