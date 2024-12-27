import Pagination from "@mui/material/Pagination";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";

const MyCars = () => {
  const { user, loading } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state
  const [totalCars, setTotalCars] = useState(0); // State for total car count

  useEffect(() => {
    if (!user?.email) return;
    fetchAllCarsData();
  }, [user, search, sort, page]);

  const fetchAllCarsData = async () => {
    const url = `${import.meta.env.VITE_API_URL}/cars/${user?.email}`;

    try {
      const { data } = await axios.get(url, {
        params: {
          search,
          sort,
          page, // Current page
          limit: 5, // Cars per page
        },
      });
      setCars(data.cars || []);
      setTotalPages(data.totalPages || 1); // Update total pages;
      setTotalCars(data.totalCars || 0); // Set the total car count from the backend
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // delete functionality
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/car/${id}`);
      toast.success("Data Deleted Successfully!!!");
      fetchAllCarsData();
    } catch (error) {
      console.error("Error deleting car:", error);
      toast.error(error.message);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex items-center gap-3">
        <div>
          Are you <b>Sure?</b>
        </div>
        <button
          className="px-3 py-1 bg-red-400 text-white rounded-md"
          onClick={() => {
            toast.dismiss(t.id);
            handleDelete(id);
          }}
        >
          Yes
        </button>
        <button
          className="px-3 py-1 bg-green-400 text-white rounded-md"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    ));
  };

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
            <h2 className="text-xl font-bold text-gray-700 flex gap-3 mb-3">
              <span>My Listed Cars</span>
              <span className="bg-blue-200 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                {totalCars} Cars
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
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="text-gray-400 flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <select
              className="px-4 py-2 text-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="newest"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
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
          <div className="col-span-12 h-[50vh] flex justify-center items-center">
            {/* Loading state */}
            {loading && <p>Loading...</p>}

            {/* No cars found */}
            {!loading && cars.length === 0 && (
              <p className="text-2xl text-center text-gray-500">
                {search
                  ? `No cars available for "${search}..." `
                  : "No cars available."}{" "}
                <Link
                  to="/addCar"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Add a Car
                </Link>
              </p>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            {/* Table */}
            <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
              {/* Table Header */}
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b"></th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                    Car Model
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                    Rental Price
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                    Availability
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                    Date Added/Updated
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car._id} className="bg-white hover:bg-gray-50">
                    {/* Car Image */}
                    <td className="px-4 py-4 border-b">
                      <img
                        src={
                          car.image
                            ? `${import.meta.env.VITE_API_URL}${car.image}`
                            : `https://via.placeholder.com/300`
                        } // Replace with the car image URL
                        alt={`Image of ${car.carModel}`}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </td>
                    {/* Car Model */}
                    <td className="px-4 py-4 border-b">
                      <Link
                        to={`/carDetails/${car._id}`}
                        className="hover:text-blue-500"
                      >
                        {car.carModel}
                      </Link>
                    </td>
                    {/* Daily Rental Price */}
                    <td className="px-4 py-4 border-b">
                      ${car.rentalPrice}
                      <span className="text-xs"> /day</span>
                    </td>
                    {/* Availability */}
                    <td className="px-4 py-3 text-center border-b">
                      <span
                        className={`${
                          car.availability === "available"
                            ? "bg-green-500 text-green-500"
                            : car.availability === "notAvailable"
                            ? "bg-red-500 text-red-500"
                            : ""
                        } bg-opacity-20 text-xs font-medium rounded-full p-1 cursor-default block w-full`}
                      >
                        {" "}
                        {car.availability === "available"
                          ? "Available"
                          : car.availability === "notAvailable"
                          ? "Not Available"
                          : ""}
                      </span>
                    </td>
                    {/* Date Added */}
                    <td className="px-4 py-4 border-b">
                      {" "}
                      {car.updatedAt
                        ? `Updated: ${format(new Date(car.updatedAt), "PPP")}`
                        : car.createdAt
                        ? `Added: ${format(new Date(car.createdAt), "PPP")}`
                        : "N/A"}
                    </td>
                    {/* Actions */}
                    <td className="px-4 py-4 border-b">
                      <div className="flex gap-3">
                        {/* Edit Button */}
                        <Link
                          to={`/updateCar/${car._id}`}
                          className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                        >
                          <AiOutlineEdit />
                        </Link>
                        {/* Cancel Booking Button */}
                        <button
                          onClick={() => modernDelete(car._id)}
                          className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600"
                        >
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
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCars;
