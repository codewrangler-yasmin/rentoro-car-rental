import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import { BsTrash3 } from "react-icons/bs";

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    if (!user?.email || loading) return;
    fetchAllBookingsData();
  }, [user, loading]);

  const fetchAllBookingsData = async () => {
    const url = `${import.meta.env.VITE_API_URL}/booking/${user?.email}`;
    try {
      const { data } = await axios.get(url);
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };

  const handleStatusChange = async (id, prevStatus, status) => {
    console.log({ id, prevStatus, status });

    // Prevent invalid transitions
    if (
      prevStatus === status ||
      prevStatus === "Completed" ||
      (prevStatus === "Canceled" && status !== "Pending")
    ) {
      return console.log("Not Allowed");
    }

    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/booking-status-update/${id}`,
        { status }
      );
      fetchAllBookingsData();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>My Bookings | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="p-10 rounded-2xl border border-gray-200 bg-gray-50 font-accent">
        <h2 className="text-xl font-bold text-gray-700 flex gap-3 mb-3">
          My Bookings
          <span className="bg-blue-200 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
            {bookings.length} Bookings
          </span>
        </h2>
        <p className="text-gray-500 mb-6">
          Track and Manage All Your Current Bookings Seamlessly.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b"></th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                  Car Model
                </th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                  Time
                </th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-4 border-b">
                    <img
                      src={
                        booking.image
                          ? `${import.meta.env.VITE_API_URL}${booking.image}`
                          : `https://via.placeholder.com/300`
                      }
                      alt={`Image of ${booking.carModel}`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-4 py-4 border-b">{booking.carModel}</td>
                  <td className="px-4 py-4 border-b">
                    {booking.date
                      ? // ? new Date(booking.date).toLocaleDateString()
                        `${format(new Date(booking.date), "PP")}`
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4 border-b">
                    {" "}
                    {booking.time
                      ? new Date(booking.time).toLocaleTimeString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-4 border-b">${booking.rentalPrice}</td>
                  <td className="px-4 py-4 border-b text-xs">
                    <h2
                      className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2
                        ${
                          booking.status === "Pending" &&
                          "bg-yellow-100/60 text-yellow-500"
                        } 
                        ${
                          booking.status === "Confirmed" &&
                          "bg-green-100/60 text-green-500"
                        }
                        ${
                          booking.status === "Canceled" &&
                          "bg-red-100/60 text-red-500"
                        }
                      `}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full 
                      ${booking.status === "Pending" && "bg-yellow-500"} 
                      ${booking.status === "Confirmed" && "bg-green-500"}
                      ${
                        booking.status === "Canceled" && "bg-red-500"
                      }                
                      `}
                      ></span>
                      {booking.status}
                    </h2>
                  </td>
                  <td className="px-4 py-4 border-b">
                    <div className="flex gap-3">
                      <button
                        className="text-xs px-4 flex items-center gap-1 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                        onClick={() => setSelectedBooking(booking)}
                      >
                        <SlCalender />
                        Modify Date
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(
                            booking._id,
                            booking.status,
                            "Canceled"
                          )
                        }
                        disabled={booking.status !== "Pending"}
                        className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 disabled:bg-gray-300"
                      >
                        <BsTrash3 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedBooking && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Modify Booking Date for {selectedBooking.carModel}
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Confirm
                </button>
                <button
                  className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                  onClick={() => setSelectedBooking(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBookings;
