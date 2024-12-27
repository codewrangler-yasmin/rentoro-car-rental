import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ImAppleinc } from "react-icons/im";
import { BsGooglePlay } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="w-[95%] mx-auto">
        {/* Top Section */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-4xl font-oswald uppercase font-normal"
            >
              <span className="text-6xl">
                <IoCarSport />
              </span>
              <span>Rentoro</span>
            </Link>
            <p className="text-gray-400 text-sm w-2/3">
              Experience convenience and freedom with our reliable car rental
              service, offering a wide selection of vehicles to suit every
              journey.
            </p>
          </div>
          <form className=" flex flex-col gap-4">
            <div className="">
              <h3 className="text-lg font-semibold">Join Rentoro</h3>
              <p className="text-gray-400 text-sm">
                Receive pricing updates, shopping tips & more!
              </p>
            </div>
            <div className="flex items-center max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>
          {/* Our Brands */}
          <div>
            <h4 className="font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Aston Martin
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Audi
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Bentley
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  BMW
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Bugatti
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Ferrari
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Jaguar
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Lamborghini
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Mercedes-Benz
                </Link>
              </li>
            </ul>
          </div>
          {/* Vehicle Types */}
          <div>
            <h4 className="font-semibold mb-4">Vehicles Type</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Pickup
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Coup
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Family MPV
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Sedan
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  SUVs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Sport Coupe
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Convertible
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Wagon
                </Link>
              </li>
            </ul>
          </div>
          {/* Bottom Section */}
          <div className="md:flex md:flex-col md:justify-center gap-5 text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Our Mobile App</h4>
              <div className="flex flex-col gap-4">
                <Link to="/">
                  <button className="flex gap-2 items-center px-4 py-2 rounded-xl bg-gray-700 text-white border-none hover:bg-white hover:text-primary">
                    <span className="text-2xl">
                      <ImAppleinc />
                    </span>
                    <p className="flex flex-col items-start">
                      <span className="text-xs font-light">
                        Download on the
                      </span>
                      <span className="text-sm font-semibold">Apple Store</span>
                    </p>
                  </button>
                </Link>
                <Link to="/">
                  <button className="flex gap-2 items-center px-4 py-2 rounded-xl bg-gray-700 text-white border-none hover:bg-white hover:text-primary">
                    <span className="text-2xl">
                      <BsGooglePlay />
                    </span>
                    <p className="flex flex-col items-start">
                      <span className="text-xs font-light">
                        Download on the
                      </span>
                      <span className="text-sm font-semibold">Play Store</span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Connect With Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link to="/" className="text-gray-400 hover:text-white">
                  <FaFacebook />
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center mt-6 text-center text-gray-500 text-sm">
          <div>
            <p> &copy; 2024 Rentoro.com. All rights reserved. </p>
          </div>
          <div>
            {" "}
            <Link to="/terms" className="hover:underline">
              Terms & Conditions
            </Link>{" "}
            •{" "}
            <Link to="/privacy" className="hover:underline">
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
