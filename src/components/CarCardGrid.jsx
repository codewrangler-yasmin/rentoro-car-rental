import { BsFuelPump } from "react-icons/bs";
import { GoArrowUpRight, GoBookmark } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { PiClockClockwiseFill } from "react-icons/pi";
import { TbTransformPointBottomLeft } from "react-icons/tb";
import { Link } from "react-router-dom";

const CarCardGrid = () => {
  return (
    <>
      <div className="col-span-3 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden border">
        <div className="relative">
          <img
            src="https://i.ibb.co.com/1rHYG1h/2024-Mercedes-Benz-E-Class.jpg" // Replace with the car image URL
            alt="Car"
            className="w-full h-72 object-cover"
          />
          <div className="absolute top-2 left-2 flex gap-3">
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
        <div className="p-5">
          <h3 className="text-lg font-semibold text-primary">
            Range Rover, Defender 110
          </h3>
          <p className="text-sm text-gray-500 truncate">
            2023 C300e AMG Line Night Ed Premium
          </p>
          <div className="border-t border-gray-100 pt-3 mt-3 text-gray-900 flex items-center gap-3">
            <IoCalendarOutline /> <span>Added 2 days ago</span>
          </div>
          <div className="border-b border-t border-gray-100 py-3 my-3 text-gray-900 flex justify-between items-center gap-3">
            <span className="flex flex-col items-center">
              <PiClockClockwiseFill />
              <span className="text-xs">28,300 miles</span>
            </span>{" "}
            <span className="flex flex-col items-center">
              <BsFuelPump />
              <span className="text-xs">Petrol</span>
            </span>
            <span className="flex flex-col items-center">
              <TbTransformPointBottomLeft />
              <span className="text-xs">Automatics</span>
            </span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-800">
                $145{" "}
                <span className="text-base text-gray-400 font-light">
                  / day
                </span>
              </p>
            </div>
            <Link
              to="/carDetails"
              className="text-blue-600 font-medium hover:underline flex items-center"
            >
              <span>Book Now</span> <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCardGrid;
