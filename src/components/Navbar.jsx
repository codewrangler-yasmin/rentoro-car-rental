import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="bg-primary text-white font-accent">
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
            <a className="btn btn-ghost text-2xl font-oswald uppercase font-normal">
              Rentoro
            </a>
          </div>

          <div className="navbar-end gap-4">
            <ul className="flex gap-4 justify-center items-center px-1 text-sm">
              {navLinks}
            </ul>
            <NavLink to="/dashboard">
              <button className="h-10 w-10 flex justify-center items-center rounded-full bg-base-200 text-gray-500 text-lg">
                <FiUser />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
