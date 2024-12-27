import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { BsFuelPump } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdColorFill } from "react-icons/io";
import { MdEventAvailable, MdOutlineRateReview } from "react-icons/md";
import { PiClockClockwiseFill } from "react-icons/pi";
import { RiFileList2Line } from "react-icons/ri";
import { TbTransformPointBottomLeft } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import ReviewForm from "../components/ReviewForm";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import { TiLocationOutline } from "react-icons/ti";
import toast from "react-hot-toast";

const CarDetails = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const [car, setCar] = useState([]);
  const [bookingDate, setBookingDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAllCarsData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/car/${id}`
      );
      setCar(data);
    };
    fetchAllCarsData();
  }, [id]);

  const {
    _id,
    carModel,
    rentalPrice,
    availability,
    regNumber,
    features,
    location,
    mileage,
    fuelType,
    transmission,
    color,
    image,
    description,
    renter,
  } = car || {};

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const email = user?.email;
    const carId = _id;

    // 0. Check bid permission validation
    if (user?.email === renter?.email)
      return toast.error("Action not permitted!");

    const bookingData = {
      email,
      image,
      carModel,
      rentalPrice,
      date: bookingDate,
      time: pickupTime,
      carId,
      status: "Pending",
      renter: renter?.email,
    };
    console.log(bookingData);

    // make a post request for sending jobData
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-booking`,
        bookingData
      );

      toast.success(`Booking for ${carModel} Successful!!!`);
      navigate("/myBookings");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data);
    }
  };

  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>Car Details | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="container mx-auto bg-gray-100 py-20">
        {loading && (
          <div className="flex justify-center items-center">
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
          </div>
        )}
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="#" className="text-blue-600">
            Home
          </Link>{" "}
          / <span>{carModel}</span>
        </div>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
          <div></div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section */}
            <div className="relative">
              <img
                src={
                  image
                    ? `${import.meta.env.VITE_API_URL}${image}`
                    : `https://via.placeholder.com/300`
                } // Replace with the car image URL
                alt={`Image of ${carModel}`}
                className="w-full object-cover h-96 lg:h-full"
              />
              <div className="absolute top-4 left-4 flex space-x-4">
                <button
                  className={`${
                    availability === "available"
                      ? "bg-green-500"
                      : availability === "notAvailable"
                      ? "bg-red-500"
                      : ""
                  } text-white rounded-full px-3 py-1 cursor-default block w-full`}
                >
                  {availability === "available"
                    ? "Available"
                    : availability === "notAvailable"
                    ? "Not Available"
                    : ""}
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="p-6 lg:p-8 flex flex-col">
              {/* Title and Price */}
              <h1 className="text-4xl font-bold text-primary"> {carModel}</h1>

              {/* Description Section */}
              <div className="">
                <p className="mt-4 text-gray-600">
                  {description || "No description available"}
                </p>
              </div>

              {/* features Section */}
              <div className="mt-4">
                {features && (
                  <p className="text-gray-500">
                    {car?.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs mr-2 px-2 py-1 bg-gray-200 text-primary rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </p>
                )}
              </div>

              {/* Price Section */}

              <div className="mt-4">
                <p className="text-4xl font-bold text-gray-800">
                  ${rentalPrice}
                  <span className="text-base text-gray-400 font-light">
                    / day
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex space-x-4">
                {user ? (
                  renter?.email !== user?.email ? (
                    <>
                      <button
                        onClick={() =>
                          document.getElementById("book_now").showModal()
                        }
                        className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 disabled:bg-gray-200 disabled:text-primary disabled:text-opacity-40 disabled:cursor-not-allowed"
                        disabled={availability === "notAvailable"}
                      >
                        Book Now <GoArrowUpRight />
                      </button>
                      <button
                        onClick={() =>
                          document.getElementById("review").showModal()
                        }
                        className="bg-gray-200 text-primary hover:bg-gray-300 px-6 py-2 rounded-md flex items-center gap-2"
                      >
                        Leave a Review <MdOutlineRateReview />
                      </button>
                    </>
                  ) : (
                    <p className="bg-green-500 px-3 rounded-full">
                      You have added this car
                    </p> // Show this message if the user is the renter
                  )
                ) : (
                  <Link
                    to="/login"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
                  >
                    Login to Book
                  </Link>
                )}
              </div>

              {/* Car Overview */}
              <div className="mt-8 bg-gray-50 border border-gray-100 p-8 rounded-2xl">
                <h2 className="text-xl font-bold text-primary">Overview</h2>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <TiLocationOutline />
                      Location
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {location}
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <MdEventAvailable />
                      Availability
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {availability === "available"
                        ? "Available"
                        : availability === "notAvailable"
                        ? "Not Available"
                        : ""}
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <PiClockClockwiseFill />
                      Mileage
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {typeof mileage === "number"
                        ? mileage.toLocaleString()
                        : "N/A"}{" "}
                      miles
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <RiFileList2Line />
                      Vehicle Registration Number
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {regNumber}
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <BsFuelPump />
                      Fuel Type
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {fuelType}
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <TbTransformPointBottomLeft />
                      Transmission
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {transmission}
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <IoMdColorFill />
                      Color
                    </span>
                    <span className="text-gray-800 font-semibold">{color}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Modal */}
        <dialog id="book_now" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative pt-16">
            <form onSubmit={handleBookingSubmit} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                type="button"
                className="z-50 right-6 top-2 absolute text-primary h-12 w-12 bg-gray-100 flex justify-center items-center rounded-full text-xl hover:bg-gray-200"
                onClick={() => document.getElementById("book_now")?.close()}
              >
                <IoClose />
              </button>
              <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                {/* Form Section */}
                <div className="mt-6 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder={user?.displayName}
                      disabled={true}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder={user?.email}
                      disabled={true}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    />
                  </div>

                  {/* Pickup Date */}
                  <div className="flex items-center gap-3">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Pickup Date
                      </label>
                      <div className="w-full text-gray-700">
                        {/* Date Picker Input Field */}
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}
                          className="z-50"
                        >
                          <DatePicker
                            label="Select Date"
                            value={bookingDate}
                            onChange={(newBookingDate) =>
                              setBookingDate(newBookingDate)
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
                                container: document.getElementById("book_now"), // Attach to modal
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
                        Pickup Time
                      </label>
                      <div className="">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimePicker
                            label="Select Time"
                            value={pickupTime}
                            onChange={(newValue) => setPickupTime(newValue)}
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
                                container: document.getElementById("book_now"), // Attach to modal
                                sx: { zIndex: 9999 },
                              },
                            }}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>

                  {/* Request for Booking Button */}
                  <button
                    type="submit"
                    className="w-full btn px-5 text-lg bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Request for Booking
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>

        {/* Leave a Review Modal */}
        <dialog id="review" className="modal modal-bottom sm:modal-middle z-50">
          <div className="modal-box relative pt-16 z-50">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="z-50 right-6 top-2 absolute text-primary h-12 w-12 bg-gray-100 flex justify-center items-center rounded-full text-xl hover:bg-gray-200">
                <IoClose />
              </button>
              <ReviewForm />
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default CarDetails;
