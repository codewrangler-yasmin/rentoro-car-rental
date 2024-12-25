import { BsFuelPump } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdColorFill } from "react-icons/io";
import { MdEventAvailable, MdOutlineRateReview } from "react-icons/md";
import { PiClockClockwiseFill } from "react-icons/pi";
import { RiFileList2Line } from "react-icons/ri";
import { TbTransformPointBottomLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import ReviewForm from "../components/ReviewForm";
import BookingForm from "../components/BookingForm";
import { Helmet } from "react-helmet-async";

const CarDetails = () => {
  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>Car Details | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="container mx-auto bg-gray-100 py-20">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="#" className="text-blue-600">
            Home
          </Link>{" "}
          / <span>Range Rover, Defender 110</span>
        </div>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
          <div></div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section */}
            <div className="relative">
              <img
                src="https://i.ibb.co.com/1rHYG1h/2024-Mercedes-Benz-E-Class.jpg"
                alt="Car"
                className="w-full object-cover h-96 lg:h-full"
              />
              <div className="absolute top-4 left-4 flex space-x-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                  Available
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="p-6 lg:p-8">
              {/* Title and Price */}
              <h1 className="text-2xl font-bold text-primary">
                {" "}
                Range Rover, Defender 110
              </h1>
              <p className="text-gray-500">
                2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate
              </p>

              <div className="mt-4">
                <p className="text-3xl font-bold text-gray-800">
                  $145{" "}
                  <span className="text-base text-gray-400 font-light">
                    / day
                  </span>
                </p>
              </div>
              {/* Description Section */}
              <div className="">
                <p className="mt-4 text-gray-600">
                  Quisque imperdiet dignissim enim dictum finibus. Sed
                  consectetur convallis enim eget laoreet. Aenean vitae nisl
                  mollis, porta risus vel, dapibus lectus. Etiam ac suscipit
                  eros, eget maximus.
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex space-x-4">
                <button
                  onClick={() =>
                    document.getElementById("book_now").showModal()
                  }
                  className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
                >
                  Book Now <GoArrowUpRight />
                </button>
                <button
                  onClick={() => document.getElementById("review").showModal()}
                  className="bg-gray-200 text-primary px-6 py-2 rounded-md flex items-center gap-2"
                >
                  Leave a Review <MdOutlineRateReview />
                </button>
              </div>

              {/* Car Overview */}
              <div className="mt-8 bg-gray-50 border border-gray-100 p-8 rounded-2xl">
                <h2 className="text-xl font-bold text-primary">Overview</h2>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <MdEventAvailable />
                      Availability
                    </span>
                    <span className="text-gray-800 font-semibold">
                      Available
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <PiClockClockwiseFill />
                      Mileage
                    </span>
                    <span className="text-gray-800 font-semibold">
                      30,000 miles
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <RiFileList2Line />
                      Vehicle Registration Number
                    </span>
                    <span className="text-gray-800 font-semibold">XYZ5678</span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <BsFuelPump />
                      Fuel Type
                    </span>
                    <span className="text-gray-800 font-semibold">Petrol</span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <TbTransformPointBottomLeft />
                      Transmission
                    </span>
                    <span className="text-gray-800 font-semibold">
                      Automatics
                    </span>
                  </li>
                  <li className="flex justify-between border-b pb-4">
                    <span className="text-gray-600 flex items-center gap-2">
                      <IoMdColorFill />
                      Color
                    </span>
                    <span className="text-gray-800 font-semibold">Blue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Modal */}
        <dialog id="book_now" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative pt-16">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="z-50 right-6 top-2 absolute text-primary h-12 w-12 bg-gray-100 flex justify-center items-center rounded-full text-xl hover:bg-gray-200">
                <IoClose />
              </button>
              <BookingForm />
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
