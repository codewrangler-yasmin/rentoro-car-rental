import { BsFuelPump } from "react-icons/bs";
import { GoBookmark } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { PiClockClockwiseFill } from "react-icons/pi";
import { TbTransformPointBottomLeft } from "react-icons/tb";
import { Link } from "react-router-dom";

const CardCardTabular = () => {
  return (
    <div className="col-span-12 flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full md:w-1/3">
        <img
          src="https://i.ibb.co.com/8mqd50K/1600.webp" // Replace with the actual car image URL
          alt="Car"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
          Available
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow p-6">
        {/* Title and Description */}

        <div className="mb-auto">
          <h3 className="text-2xl font-semibold text-primary">
            Range Rover, Defender 110
          </h3>
          <p className="text-sm text-gray-500 truncate">
            2023 C300e AMG Line Night Ed Premium
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col">
          <div className="border-t border-gray-100 pt-3 mt-3 text-lg text-gray-900 flex items-center gap-3">
            <IoCalendarOutline /> <span>Added 2 days ago</span>
          </div>
          <div className="border-b border-t border-gray-100 py-3 my-3 text-gray-900 flex gap-8 items-center gap-3">
            <span className="flex flex-col items-center">
              <PiClockClockwiseFill />
              <span className="text-lg">28,300 miles</span>
            </span>{" "}
            <span className="flex flex-col items-center">
              <BsFuelPump />
              <span className="text-lg">Petrol</span>
            </span>
            <span className="flex flex-col items-center">
              <TbTransformPointBottomLeft />
              <span className="text-lg">Automatics</span>
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
            $145{" "}
            <span className="text-base text-gray-400 font-light">/ day</span>
          </p>
          <Link
            to="/carDetails"
            className="mt-4 px-4 py-2 text-sm text-blue-600 font-medium border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
          >
            Book Now <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCardTabular;
