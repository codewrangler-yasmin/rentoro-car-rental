import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsTrash3Fill } from "react-icons/bs";
import { IoCheckmarkSharp } from "react-icons/io5";

const BookingRequests = () => {
  const [bookingRequests, setBookingRequests] = useState([
    {
      id: 1,
      carImage: "https://via.placeholder.com/80",
      carModel: "Toyota Corolla 2023",
      bookingDate: "22-12-2023 14:30",
      totalPrice: "$599",
      bookingStatus: "Pending",
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
      bookingStatus: "Pending",
    },
  ]);

  // Confirm Booking
  const handleConfirmBooking = (id) => {
    const updatedRequests = bookingRequests.map((request) =>
      request.id === id ? { ...request, bookingStatus: "Confirmed" } : request
    );
    setBookingRequests(updatedRequests);
  };

  // Cancel Booking
  const handleCancelBooking = (id) => {
    const updatedRequests = bookingRequests.map((request) =>
      request.id === id ? { ...request, bookingStatus: "Canceled" } : request
    );
    setBookingRequests(updatedRequests);
  };

  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>Booking Requests | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="p-10 rounded-2xl border border-gray-200 bg-gray-50 font-accent">
        <h2 className="text-xl font-bold text-gray-700 flex gap-3">
          Booking Requests
          <span className="bg-blue-200 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
            0 Requests
          </span>
        </h2>

        <p className="text-gray-500 mb-6">
          Review and Respond to Incoming Booking Requests.
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
              {bookingRequests.map((request) => (
                <tr key={request.id} className="bg-white hover:bg-gray-50">
                  {/* Car Image */}
                  <td className="px-6 py-4 border-b">
                    <img
                      src={request.carImage}
                      alt={request.carModel}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </td>

                  {/* Car Model */}
                  <td className="px-6 py-4 border-b">{request.carModel}</td>

                  {/* Booking Date */}
                  <td className="px-6 py-4 border-b">{request.bookingDate}</td>

                  {/* Total Price */}
                  <td className="px-6 py-4 border-b">{request.totalPrice}</td>

                  {/* Booking Status */}
                  <td
                    className={`px-6 py-4 border-b font-semibold ${
                      request.bookingStatus === "Confirmed"
                        ? "text-green-500"
                        : request.bookingStatus === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {request.bookingStatus}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 border-b">
                    <div className="flex gap-3">
                      {/* Confirm Booking Button */}
                      <button
                        className="p-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                        onClick={() => handleConfirmBooking(request.id)}
                        disabled={request.bookingStatus !== "Pending"}
                      >
                        <IoCheckmarkSharp />
                      </button>

                      {/* Cancel Booking Button */}
                      <button
                        className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600"
                        onClick={() => handleCancelBooking(request.id)}
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
      </div>
    </>
  );
};

export default BookingRequests;
