import { FiUser } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { IoCarSport } from "react-icons/io5";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allCars">Available Cars</NavLink>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`${
        isHomePage
          ? "lg:absolute lg:bg-transparent lg:z-50"
          : "bg-primary text-white"
      } w-full mx-auto font-accent py-5`}
    >
      <div className="w-[95%] mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-sm"
              >
                {navLinks}
              </ul>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-oswald uppercase font-normal"
            >
              <span className="text-5xl">
                <IoCarSport />
              </span>
              <span>Rentoro</span>
            </Link>
          </div>

          <div className="navbar-end gap-4">
            <ul className="flex gap-4 justify-center items-center px-1 text-sm">
              {navLinks}
            </ul>
            <NavLink to="/login">
              <button className="hover:bg-white hover:text-primary transition-all duration-200 flex items-center gap-2 border rounded-full px-5 py-2">
                <Tooltip title="Login" className="flex items-center gap-2">
                  <FiUser />
                  <span>Login</span>
                </Tooltip>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
