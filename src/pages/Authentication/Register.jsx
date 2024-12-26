import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineMail } from "react-icons/ai";
import { FaImage } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const agreed = form.agree.checked;
    console.log({ email, password, name, photoURL });

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check for detailed password validation errors
    if (!passwordRegex.test(password)) {
      const errors = [];
      if (!/[a-z]/.test(password)) {
        errors.push(
          "Password must contain at least one lowercase letter (a-z)."
        );
      }
      if (!/[A-Z]/.test(password)) {
        errors.push(
          "Password must contain at least one uppercase letter (A-Z)."
        );
      }
      if (!/\d/.test(password)) {
        errors.push("Password must contain at least one number (0-9).");
      }
      if (!/[@$!%*?&]/.test(password)) {
        errors.push(
          "Password must contain at least one special character (e.g., @, $, !, %, *, ?, &)."
        );
      }
      if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
      }

      setValidationErrors(errors);
      return;
    }
    setErrorMessage("");
    setValidationErrors([]);

    if (!agreed) {
      setErrorMessage("You must agree with the privacy policy to proceed!");
      return;
    }

    try {
      //2. User Registration
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, photoURL);
      setUser({ ...result.user, photoURL: photoURL, displayName: name });
      toast.success("Your account has been successfully created.");
      navigate("/dashboard");
      form.reset();
    } catch (error) {
      console.log("Error", error.message);
      const errorCode = error.code;
      const firebaseErrorMessages = {
        "auth/user-not-found":
          "No account found with this email. Please sign up.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        "auth/invalid-email": "The email address is badly formatted.",
        "auth/email-already-in-use":
          "This email is already in use. Try logging in.",
      };
      setErrorMessage(
        firebaseErrorMessages[errorCode] || "An unexpected error occurred."
      );
    }
  };

  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>Register | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="flex justify-center items-center px-5">
        <div className="w-full max-w-md p-8">
          <form onSubmit={handleRegister} className="space-y-5">
            {/* User Name */}
            <div className="relative">
              <LuUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-400" />
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full p-3 pl-10 rounded-md bg-white text-blue-400 focus:ring-2 focus:ring-blue-500 focus:outline-none border border-blue-400 placeholder:text-blue-400"
                required
              />
            </div>
            {/* User Image */}
            <div className="relative">
              <FaImage className="absolute top-1/2 left-3 transform -translate-y-1/2 text-pink-400" />
              <input
                type="url"
                name="photoURL"
                placeholder="Enter Your Photo (URL)"
                className="w-full p-3 pl-10 rounded-md bg-white text-pink-400 focus:ring-2 focus:ring-blue-500 focus:outline-none border border-pink-400 placeholder:text-pink-400"
                required
              />
            </div>
            {/* Email Input */}
            <div className="relative">
              <AiOutlineMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-purple-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 pl-10 rounded-md bg-white text-purple-400 focus:ring-2 focus:ring-blue-500 focus:outline-none border border-purple-400 placeholder:text-purple-400"
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
            {/* Password */}
            <div className="relative">
              <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-rose-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                className="w-full p-3 pl-10 rounded-md bg-white text-rose-400 focus:ring-2 focus:ring-blue-500 focus:outline-none border border-rose-400 placeholder:text-rose-400"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/3 text-lg text-rose-400"
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
              <label className="text-primary">
                I agree with the{" "}
                <Link
                  to="/"
                  className="text-purple-400 font-semibold underline"
                >
                  privacy policy
                </Link>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white text-lg font-bold rounded-md hover:bg-blue-600 transition"
            >
              Register
            </button>
            {/* Redirect to Login */}
            <p className="mt-6 text-center text-primary">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-green-500 font-semibold underline"
              >
                Log in
              </Link>
            </p>
            {errorMessage && (
              <p className="text-lg text-red-600 flex items-center gap-2">
                <IoIosWarning />
                {errorMessage}
              </p>
            )}
            {validationErrors && validationErrors.length > 0 && (
              <div className="mt-4 text-red-600">
                {validationErrors.map((error, index) => (
                  <p key={index} className="flex items-start gap-2">
                    <IoIosWarning /> {error}
                  </p>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
