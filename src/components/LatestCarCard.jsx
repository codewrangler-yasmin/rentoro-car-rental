import PropTypes from "prop-types";
import { BsFuelPump } from "react-icons/bs";
import { GoArrowUpRight, GoBookmark } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { PiClockClockwiseFill } from "react-icons/pi";
import { TbTransformPointBottomLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { TiLocationOutline } from "react-icons/ti";

const LatestCarCard = ({ car }) => {
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
    <div className="bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden flex">
      <div className="w-[45%] h-full relative">
        <img
          src={
            image
              ? `${import.meta.env.VITE_API_URL}${image}`
              : `https://via.placeholder.com/300`
          } // Replace with the car image URL
          alt={`Image of ${carModel}`}
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-3">
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
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-black"
          aria-label="Save"
        >
          <GoBookmark />
        </button>
      </div>
      <div className="w-[55%] p-5">
        <h3 className="mb-3 text-left text-xl font-semibold text-white">
          {carModel}
        </h3>
        <p className="text-left text-white truncate">{description}</p>
        <div className="pt-3 text-sm text-white flex items-center gap-3">
          <IoCalendarOutline /> <span>Added {timeAgo}</span>
        </div>
        <div className="pt-3 text-sm text-white flex items-center gap-3">
          <TiLocationOutline />
          <span>{location}</span>
        </div>
        <div className="py-3 my-3 text-white flex gap-3">
          <span className="flex gap-2 items-center">
            <PiClockClockwiseFill />
            <span className="text-xs">{mileage.toLocaleString()} miles</span>
          </span>{" "}
          <span className="flex gap-2 items-center">
            <BsFuelPump />
            <span className="text-xs">{fuelType}</span>
          </span>
          <span className="flex gap-2 items-center">
            <TbTransformPointBottomLeft />
            <span className="text-xs">{transmission}</span>
          </span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-right">
            <p className="text-3xl font-bold text-white">
              ${rentalPrice}{" "}
              <span className="text-base text-white font-light">/ day</span>
            </p>
          </div>
          <Link
            to={`/carDetails/${_id}`}
            className="text-white font-medium hover:underline flex items-center"
          >
            <span>Book Now</span> <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

LatestCarCard.propTypes = {
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
    bookingsCount: PropTypes.number.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string, // For a string date format
      PropTypes.instanceOf(Date), // Or a JavaScript Date object
    ]).isRequired,
  }).isRequired,
};
export default LatestCarCard;
