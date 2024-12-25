import { BsFuelPump } from "react-icons/bs";
import { GoArrowUpRight, GoBookmark } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { PiClockClockwiseFill } from "react-icons/pi";
import { TbTransformPointBottomLeft } from "react-icons/tb";
import { Link } from "react-router-dom";

const LatestCarCard = () => {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden flex">
      <div className="w-[45%] h-full relative">
        <img
          src="https://i.ibb.co.com/1rHYG1h/2024-Mercedes-Benz-E-Class.jpg" // Replace with the car image URL
          alt="Car"
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-3">
          <span className=" bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            Available
          </span>
          <span className=" bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            0 Booked
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
        <h3 className="text-left text-lg font-semibold text-white">
          Range Rover, Defender 110
        </h3>
        <p className="text-left text-sm text-white truncate">
          2023 C300e AMG Line Night Ed Premium
        </p>
        <div className="pt-3 mt-3 text-white flex items-center gap-3">
          <IoCalendarOutline /> <span>Added 2 days ago</span>
        </div>
        <div className="py-3 my-3 text-white flex flex-col gap-3">
          <span className="flex gap-2 items-center">
            <PiClockClockwiseFill />
            <span className="text-xs">28,300 miles</span>
          </span>{" "}
          <span className="flex gap-2 items-center">
            <BsFuelPump />
            <span className="text-xs">Petrol</span>
          </span>
          <span className="flex gap-2 items-center">
            <TbTransformPointBottomLeft />
            <span className="text-xs">Automatics</span>
          </span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-right">
            <p className="text-3xl font-bold text-white">
              $145{" "}
              <span className="text-base text-white font-light">/ day</span>
            </p>
          </div>
          <Link
            to="/carDetails"
            className="text-white font-medium hover:underline flex items-center"
          >
            <span>Book Now</span> <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestCarCard;
