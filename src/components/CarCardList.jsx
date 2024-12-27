import PropTypes from "prop-types";
import { BsFuelPump } from "react-icons/bs";
import { GoArrowUpRight, GoBookmark } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { PiClockClockwiseFill } from "react-icons/pi";
import { TbTransformPointBottomLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { TiLocationOutline } from "react-icons/ti";

const CarCardList = ({ car }) => {
  const {
    _id,
    carModel,
    fuelType,
    description,
    availability,
    location,
    image,
    mileage,
    rentalPrice,
    transmission,
    bookingsCount = 0,
    createdAt,
  } = car;

  // Check if createdAt is a valid date
  const validCreatedAt = createdAt && !isNaN(new Date(createdAt).getTime()); // Ensure valid date
  const timeAgo = validCreatedAt
    ? formatDistanceToNow(new Date(createdAt), { addSuffix: true })
    : "Unknown time"; // Fallback in case of invalid date

  return (
    <div className="col-span-12 flex flex-col md:flex-row rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden border">
      {/* Image Section */}
      <div className="relative w-full md:w-1/3">
        <img
          src={
            image
              ? `${import.meta.env.VITE_API_URL}${image}`
              : `https://via.placeholder.com/300`
          } // Replace with the car image URL
          alt={`Image of ${carModel}`}
          className="w-full h-72 object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-3">
          <span
            className={`${
              availability === "available"
                ? "bg-green-500"
                : availability === "notAvailable"
                ? "bg-red-500"
                : "bg-gray-500"
            } text-white text-sm font-medium px-4 py-1 rounded-full`}
          >
            {availability === "available"
              ? "Available"
              : availability === "notAvailable"
              ? "Not Available"
              : ""}
          </span>
          <span className=" bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            {bookingsCount} {bookingsCount === 1 ? "Booking" : "Bookings"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow p-6">
        {/* Title and Description */}

        <div className="mb-auto">
          <h3 className="text-lg font-semibold text-primary">{carModel}</h3>
          <p className="text-sm text-gray-500 truncate">
            {description || "No description available"}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col">
          <div className="text-sm border-t border-gray-100 pt-3 mt-3 text-gray-900 flex items-center gap-3">
            <IoCalendarOutline /> <span>Added {timeAgo}</span>
          </div>
          <div className="text-sm border-t border-gray-100 pt-3 mt-3 text-gray-900 flex items-center gap-3">
            <TiLocationOutline /> <span>{location}</span>
          </div>
          <div className="text-sm border-b border-t border-gray-100 py-3 my-3 text-gray-900 flex gap-8 items-center">
            <span className="flex flex-col items-center">
              <PiClockClockwiseFill />
              <span className="text-sm">{mileage.toLocaleString()} miles</span>
            </span>{" "}
            <span className="flex flex-col items-center">
              <BsFuelPump />
              <span className="text-sm">{fuelType}</span>
            </span>
            <span className="flex flex-col items-center">
              <TbTransformPointBottomLeft />
              <span className="text-sm">{transmission}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col justify-between items-end p-4 border-t md:border-t-0 md:border-l border-gray-200">
        <div>
          <button
            className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-black"
            aria-label="Save"
          >
            {" "}
            <GoBookmark />
          </button>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-800 mb-5">
            ${rentalPrice}{" "}
            <span className="text-base text-gray-400 font-light">/ day</span>
          </p>
          <Link
            to={`/carDetails/${_id}`}
            className="flex items-center gap-2 mt-4 px-4 py-2 text-sm text-blue-600 font-medium border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
          >
            <span>Book Now </span>
            <span aria-hidden="true">
              {" "}
              <GoArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

CarCardList.propTypes = {
  car: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    carModel: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
    fuelType: PropTypes.string.isRequired,
    description: PropTypes.string,
    availability: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    image: PropTypes.string,
    location: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    regNumber: PropTypes.string.isRequired,
    rentalPrice: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    bookingCount: PropTypes.number.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string, // For a string date format
      PropTypes.instanceOf(Date), // Or a JavaScript Date object
    ]).isRequired,
  }).isRequired,
};

export default CarCardList;
