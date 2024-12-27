import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoCheckmarkSharp } from "react-icons/io5";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import { BsTrash3 } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";
import toast from "react-hot-toast";

const BookingRequests = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookingRequests, setBookingRequests] = useState([]);

  useEffect(() => {
    if (!user?.email || loading) return;
    fetchAllBookingsData();
  }, [user, loading]);

  const fetchAllBookingsData = async () => {
    const url = `${import.meta.env.VITE_API_URL}/booking-request/${
      user?.email
    }`;

    try {
      const { data } = await axios.get(url);
      setBookingRequests(data);
    } catch (error) {
      console.error(
        "Error fetching bookings:",
        error.response?.data || error.message
      );
    }
  };

  const handleStatusChange = async (id, prevStatus, status) => {
    if (
      prevStatus !== "Pending" &&
      !(prevStatus === "Confirmed" && status === "Canceled")
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

  const handleStatusChangeConfirmation = (id, prevStatus, newStatus) => {
    toast((t) => (
      <div className="flex items-center gap-3">
        <div>
          Are you sure you want to <b>cancel</b> this booking?
        </div>
        <button
          className="px-3 py-1 bg-red-400 text-white rounded-md"
          onClick={() => {
            toast.dismiss(t.id);
            handleStatusChange(id, prevStatus, newStatus); // Pass status here
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
      {/* Helmet for head management */}
      <Helmet>
        <title>Booking Requests | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="p-10 rounded-2xl border border-gray-200 bg-gray-50 font-accent">
        <h2 className="text-xl font-bold text-gray-700 flex gap-3 mb-3">
          Booking Requests
          <span className="bg-blue-200 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
            {bookingRequests.length} Requests
          </span>
        </h2>

        <p className="text-gray-500 mb-6">
          Review and respond to incoming booking requests.
        </p>

        {/* Display No bookings */}
        {bookingRequests.length === 0 ? (
          <div className="w-full h-[50vh] flex justify-center items-center text-center">
            {/* Loading state */}
            {loading && (
              <PuffLoader
                color="#405FF2"
                cssOverride={null}
                loading
                size={30}
                speedMultiplier={2}
              />
            )}

            {/* No cars found */}
            {bookingRequests.length === 0 && (
              <p className="text-2xl text-center text-gray-500">
                No booking requests available...
              </p>
            )}
          </div>
        ) : (
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
                {bookingRequests.map((request) => (
                  <tr key={request._id} className="bg-white hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">
                      <img
                        src={
                          request.image
                            ? `${import.meta.env.VITE_API_URL}${request.image}`
                            : `https://via.placeholder.com/300`
                        }
                        alt={`Image of ${request.carModel}`}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 border-b">{request.carModel}</td>
                    <td className="px-6 py-4 border-b">
                      {request.date
                        ? format(new Date(request.date), "PP")
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 border-b">
                      {request.time
                        ? new Date(request.time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 border-b">
                      ${request.rentalPrice}
                    </td>
                    <td className="px-4 py-4 border-b text-xs">
                      <h2
                        className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                          request.status === "Pending"
                            ? "bg-yellow-100 text-yellow-500"
                            : request.status === "Confirmed"
                            ? "bg-green-100 text-green-500"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full 
                        ${
                          request.status === "Pending"
                            ? "bg-yellow-500"
                            : request.status === "Confirmed"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                        ></span>
                        {request.status}
                      </h2>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            handleStatusChange(
                              request._id,
                              request.status,
                              "Confirmed"
                            )
                          }
                          disabled={
                            request.status === "Canceled" ||
                            request.status === "Confirmed"
                          }
                          className="p-2 text-white bg-green-500 rounded-full hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          <IoCheckmarkSharp />
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChangeConfirmation(
                              request._id,
                              request.status,
                              "Canceled"
                            )
                          }
                          disabled={request.status === "Canceled"}
                          className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
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
        )}
      </div>
    </>
  );
};

export default BookingRequests;
