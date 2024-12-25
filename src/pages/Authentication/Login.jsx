import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosWarning } from "react-icons/io";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/images/googleIcon.png";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(null);
  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>Login | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="flex justify-center items-center px-5">
        <div className="w-full max-w-md p-8">
          <form className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <AiOutlineMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 pl-10 rounded-md bg-white text-blue-400 focus:ring-2 focus:ring-blue-500 focus:outline-none border border-blue-400 placeholder:text-blue-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-green-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full p-3 pl-10 rounded-md bg-white text-green-400 focus:ring-2 focus:ring-blue-500 focus:outline-none border border-green-400 placeholder:text-green-400"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/3 text-lg text-green-400"
              >
                {showPassword ? <PiEyeClosed /> : <PiEye />}
              </button>
            </div>

            {/* Agree Checkbox */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="agree"
                className="checkbox checkbox-primary"
              />
              <label className="text-primary">Remember me</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white text-lg font-bold rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
            {/* Divider */}
            <div className="flex items-center justify-center my-4">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="text-gray-500 mx-4">OR</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            <button className="btn bg-transparent border-blue-400 w-full text-blue-400 hover:bg-blue-500 hover:text-white">
              <img className="w-4" src={googleIcon} alt="" />
              Login with Google Account{" "}
            </button>
            {/* Redirect to Login */}
            <p className="mt-6 text-center text-primary">
              Not registered yet?{" "}
              <Link
                to="/login"
                className="text-green-500 font-semibold underline"
              >
                Register here
              </Link>
            </p>
            {error && (
              <p className="text-lg text-red-600 flex items-center gap-2">
                <IoIosWarning />
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
