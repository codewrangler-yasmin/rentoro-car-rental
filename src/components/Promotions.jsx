import Lottie from "lottie-react";
import LottieCar from "../assets/images/Car.json";
import LottieVacation from "../assets/images/vacation.json";

const Promotions = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}

        <div className="bg-pink-100 rounded-lg p-8 flex items-center justify-between transition-transform duration-300 transform hover:scale-105 shadow-lg">
          <div className="w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Get 15% off for weekend rentals!
            </h3>
            <p className="text-gray-600 mb-6">
              Plan your weekend getaway with our exclusive offers.
            </p>
            <button className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
              Book Now
            </button>
          </div>
          <div className="w-1/2 text-pink-500 text-6xl relative">
            {/* Add icon or illustration */}
            <Lottie
              className="absolute -top-[175px] right-0"
              animationData={LottieVacation}
            ></Lottie>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-100 rounded-lg p-8 flex items-end justify-between transition-transform duration-300 transform hover:scale-105 shadow-lg">
          <div className="w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Luxury cars at $99/day this holiday season!{" "}
            </h3>
            <p className="text-gray-600 mb-6">
              Drive in style and make your holidays memorable.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
          <div className="w-1/2 text-blue-500 text-6xl relative">
            {/* Add icon or illustration */}
            <Lottie
              className="absolute -top-[150px] right-0"
              animationData={LottieCar}
            ></Lottie>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
