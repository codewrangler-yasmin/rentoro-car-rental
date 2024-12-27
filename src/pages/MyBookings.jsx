import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SlCalender } from "react-icons/sl";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import { BsTrash3 } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [modifiedBookingDate, setModifiedBookingDate] = useState(null);
  const [modifiedPickupTime, setModifiedPickupTime] = useState(null);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

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

  const handleDateUpdate = async (e) => {
    e.preventDefault();

    if (!selectedBookingId || !modifiedBookingDate || !modifiedPickupTime) {
      return alert("Please select a valid date and time.");
    }

    try {
      const updatedDateTime = {
        date: modifiedBookingDate.toISOString(), // Convert to ISO string
        time: modifiedPickupTime.toISOString(), // Convert to ISO string
      };

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/update-booking/${selectedBookingId}`,
        updatedDateTime
      );

      fetchAllBookingsData();
      document.getElementById("dateModify")?.close();
    } catch (error) {
      console.error("Error updating booking:", error.message);
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

  // Prepare data for the chart
  const rentalData = bookings.map((booking) => ({
    date: format(new Date(booking.date), "PP"),
    price: booking.rentalPrice,
  }));

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

        {/* Display No bookings */}
        {bookings.length === 0 ? (
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
            {bookings.length === 0 && (
              <p className="text-2xl text-center text-gray-500">
                No bookings available...
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
                        ? `${format(new Date(booking.date), "PP")}`
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 border-b">
                      {booking.time
                        ? new Date(booking.time).toLocaleTimeString()
                        : "N/A"}
                    </td>
                    <td className="px-4 py-4 border-b">
                      ${booking.rentalPrice}
                    </td>
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
                          }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full 
                          ${booking.status === "Pending" && "bg-yellow-500"} 
                          ${booking.status === "Confirmed" && "bg-green-500"}
                          ${booking.status === "Canceled" && "bg-red-500"}`}
                        ></span>
                        {booking.status}
                      </h2>
                    </td>
                    <td className="px-4 py-4 border-b">
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            setSelectedBookingId(booking._id); // Set the booking ID
                            setModifiedBookingDate(dayjs(booking.date)); // Pre-fill current date with dayjs
                            setModifiedPickupTime(dayjs(booking.time)); // Pre-fill current time with dayjs
                            document.getElementById("dateModify").showModal();
                          }}
                          disabled={booking.status === "Canceled"} // Disable button if booking is canceled
                          className={`text-xs px-4 flex items-center gap-1 text-white rounded-full 
                          ${
                            booking.status === "Canceled"
                              ? "bg-gray-300 cursor-not-allowed" // Disabled styling
                              : "bg-blue-500 hover:bg-blue-600"
                          }`} // Active styling
                        >
                          <SlCalender />
                          Modify Date
                        </button>

                        <button
                          onClick={() =>
                            handleStatusChangeConfirmation(
                              booking._id,
                              booking.status,
                              "Canceled"
                            )
                          }
                          disabled={booking.status !== "Pending"}
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

        {/* Daily Rental Price Chart */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Daily Rental Price
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={rentalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#405FF2"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <dialog id="dateModify" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative pt-16">
            <form onSubmit={handleDateUpdate} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                type="button"
                className="z-50 right-6 top-2 absolute text-primary h-12 w-12 bg-gray-100 flex justify-center items-center rounded-full text-xl hover:bg-gray-200"
                onClick={() => document.getElementById("dateModify")?.close()}
              >
                <IoClose />
              </button>
              <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                {/* Form Section */}
                <div className="space-y-4">
                  {/* Pickup Date */}
                  <div className="flex items-center gap-3">
                    <div className="w-full">
                      <label className="block text-gray-700 font-medium mb-2">
                        Modify Pickup Date
                      </label>
                      <div className="w-full text-gray-700">
                        {/* Date Picker Input Field */}
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          className="z-50"
                        >
                          <DatePicker
                            label="Select Date"
                            value={modifiedBookingDate}
                            onChange={(newDate) =>
                              setModifiedBookingDate(
                                newDate ? dayjs(newDate) : null
                              )
                            }
                            slotProps={{
                              popper: {
                                modifiers: [
                                  {
                                    name: "preventOverflow",
                                    options: {
                                      boundary: "viewport",
                                    },
                                  },
                                ],
                                container:
                                  document.getElementById("dateModify"), // Attach to modal
                                sx: { zIndex: 9999 },
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div className="w-full">
                      {/* Pickup Time */}
                      <label className="block text-gray-700 font-medium mb-2">
                        Modify Pickup Date
                      </label>
                      <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimePicker
                            label="Select Time"
                            value={modifiedPickupTime}
                            onChange={(newTime) =>
                              setModifiedPickupTime(
                                newTime ? dayjs(newTime) : null
                              )
                            }
                            slotProps={{
                              popper: {
                                modifiers: [
                                  {
                                    name: "preventOverflow",
                                    options: {
                                      boundary: "viewport",
                                    },
                                  },
                                ],
                                container:
                                  document.getElementById("dateModify"), // Attach to modal
                                sx: { zIndex: 9999 },
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                  {/* Request for Booking Button */}
                  <div className="flex justify-center items-center gap-2">
                    <button
                      type="submit"
                      className="px-5 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("dateModify")?.close()
                      }
                      className="px-5 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default MyBookings;
