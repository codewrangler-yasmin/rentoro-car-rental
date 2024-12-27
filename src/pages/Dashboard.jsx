import { Helmet } from "react-helmet-async";
import { CiInboxIn } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [totalCars, setTotalCars] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  //  const [totalBookingRequests, setTotalBookingRequests] = useState(0);

  useEffect(() => {
    // Fetch the total number of cars added by the user
    const fetchUserData = async () => {
      if (!user?.email) return; // If no user, skip the fetch

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/cars/${user.email}`
        );
        setTotalCars(response.data.totalCars); // Update totalCars with the count from backend
      } catch (error) {
        console.error("Error fetching cars:", error);
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/bookings/${user.email}`
        );
        setTotalBookings(response.data.totalBookings); // Update totalBookings
        // setTotalBookingRequests(response.data.totalBookingRequests); // Update totalBookingRequests
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData(); // Call the fetch function
  }, [user]);

  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>Dashboard | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="p-8 font-accent">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500 mb-6">
          Your Overview of Cars, Bookings, and Favorites
        </p>

        <Link
          to=""
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 */}
          <div className="hover:bg-white transition-all duration-200 p-10 rounded-2xl border border-gray-200 bg-gray-50 flex justify-between items-center space-x-4">
            <div>
              <p className="text-gray-500">My Cars</p>
              <p className="text-3xl font-semibold">{totalCars}</p>
            </div>
            <div className="bg-blue-100 text-blue-500 rounded-full p-3">
              <FaCar />
            </div>
          </div>

          {/* Card 2 */}
          <Link
            to=""
            className="hover:bg-white transition-all duration-200 p-10 rounded-2xl border border-gray-200 bg-gray-50 flex justify-between items-center space-x-4"
          >
            <div>
              <p className="text-gray-500">My Bookings</p>
              <p className="text-3xl font-semibold">{totalBookings}</p>
            </div>
            <div className="bg-pink-100 text-pink-500 rounded-full p-3">
              <IoCalendarOutline />
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to=""
            className="hover:bg-white transition-all duration-200 p-10 rounded-2xl border border-gray-200 bg-gray-50 flex justify-between items-center space-x-4"
          >
            <div>
              <p className="text-gray-500">Booking Requests</p>
              <p className="text-3xl font-semibold">15</p>
            </div>
            <div className="bg-purple-100 text-purple-500 rounded-full p-3">
              <CiInboxIn />
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to=""
            className="hover:bg-white transition-all duration-200 p-10 rounded-2xl border border-gray-200 bg-gray-50 flex justify-between items-center space-x-4"
          >
            <div>
              <p className="text-gray-500">My Favorites</p>
              <p className="text-3xl font-semibold">22</p>
            </div>{" "}
            <div className="bg-green-100 text-green-500 rounded-full p-3">
              <GoBookmark />
            </div>
          </Link>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
