import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import LottieNotFound from "../assets/images/notFound.json";
import { FaArrowCircleLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="text-center">
        {/* Add icon or illustration */}
        <Lottie animationData={LottieNotFound}></Lottie>
        <div>
          <Link
            to="/"
            className="text-blue-500 text-2xl flex justify-center items-center gap-3 mt-12"
          >
            <FaArrowCircleLeft /> <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
