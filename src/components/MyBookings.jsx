import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

const MyBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      carImage: "https://via.placeholder.com/80",
      carModel: "Toyota Corolla 2023",
      bookingDate: "22-12-2023 14:30",
      totalPrice: "$599",
      bookingStatus: "Confirmed",
    },
    {
      id: 2,
      carImage: "https://via.placeholder.com/80",
      carModel: "Honda Civic 2022",
      bookingDate: "21-12-2023 10:00",
      totalPrice: "$450",
      bookingStatus: "Pending",
    },
    {
      id: 3,
      carImage: "https://via.placeholder.com/80",
      carModel: "Tesla Model 3",
      bookingDate: "20-12-2023 16:00",
      totalPrice: "$999",
      bookingStatus: "Canceled",
    },
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");

  // Cancel Booking
  const handleCancelBooking = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, bookingStatus: "Canceled" } : booking
    );
    setBookings(updatedBookings);
  };

  // Open Modal for Modify Date
  const handleModifyDate = (booking) => {
    setSelectedBooking(booking);
  };

  // Confirm Modify Date
  const handleConfirmModifyDate = () => {
    if (newStartDate && newEndDate) {
      const updatedBookings = bookings.map((booking) =>
        booking.id === selectedBooking.id
          ? {
              ...booking,
              bookingDate: `${newStartDate} to ${newEndDate}`,
              bookingStatus: "Confirmed",
            }
          : booking
      );
      setBookings(updatedBookings);
      setSelectedBooking(null);
    }
  };

  return (
    <div className="p-10 rounded-2xl border border-gray-200 bg-gray-50 font-accent">
      <h2 className="text-xl font-bold text-gray-700">My Bookings</h2>

      <p className="text-gray-500 mb-6">
        Track and Manage All Your Current Bookings Seamlessly.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
          {/* Table Header */}
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b"></th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                Car Model
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                Booking Date
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                Total Price
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                Booking Status
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="bg-white hover:bg-gray-50">
                {/* Car Image */}
                <td className="px-6 py-4 border-b">
                  <img
                    src={booking.carImage}
                    alt={booking.carModel}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </td>

                {/* Car Model */}
                <td className="px-6 py-4 border-b">{booking.carModel}</td>

                {/* Booking Date */}
                <td className="px-6 py-4 border-b">{booking.bookingDate}</td>

                {/* Total Price */}
                <td className="px-6 py-4 border-b">{booking.totalPrice}</td>

                {/* Booking Status */}
                <td
                  className={`px-6 py-4 border-b font-semibold ${
                    booking.bookingStatus === "Confirmed"
                      ? "text-green-500"
                      : booking.bookingStatus === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {booking.bookingStatus}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 border-b">
                  <div className="flex gap-3">
                    {/* Modify Date Button */}
                    <button
                      className="text-xs px-4 flex items-center gap-1 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                      onClick={() => handleModifyDate(booking)}
                    >
                      <SlCalender />
                      Modify Date
                    </button>

                    {/* Cancel Booking Button */}
                    <button
                      className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600"
                      onClick={() => handleCancelBooking(booking.id)}
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

      {/* Modal for Modify Date */}
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
                onChange={(e) => setNewStartDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">End Date</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg"
                onChange={(e) => setNewEndDate(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                onClick={handleConfirmModifyDate}
              >
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
  );
};

export default MyBookings;
