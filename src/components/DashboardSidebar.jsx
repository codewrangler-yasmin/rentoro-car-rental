import { AiOutlineProfile } from "react-icons/ai";
import { GoBookmark } from "react-icons/go";
import { IoCarSportOutline } from "react-icons/io5";
import { RiFileUserLine, RiHome3Line, RiPlayListAddFill } from "react-icons/ri";
import { SlCalender, SlLogout } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  const sidebarLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-lg rounded-2xl mr-12 ${
              isActive ? "bg-gray-800" : "bg-transparent"
            }`
          }
        >
          <RiHome3Line /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myProfile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-lg rounded-2xl mr-12 ${
              isActive ? "bg-gray-800" : "bg-transparent"
            }`
          }
        >
          <RiFileUserLine /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCar"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-lg rounded-2xl mr-12 ${
              isActive ? "bg-gray-800" : "bg-transparent"
            }`
          }
        >
          <RiPlayListAddFill />
          Add Car
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCars"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-lg rounded-2xl mr-12 ${
              isActive ? "bg-gray-800" : "bg-transparent"
            }`
          }
        >
          <IoCarSportOutline />
          My Cars
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myBookings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-lg rounded-2xl mr-12 ${
              isActive ? "bg-gray-800" : "bg-transparent"
            }`
          }
        >
          <SlCalender />
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookingRequests"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-lg rounded-2xl mr-12 ${
              isActive ? "bg-gray-800" : "bg-transparent"
            }`
          }
        >
          <AiOutlineProfile />
          Booking Requests
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myFavorites"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-lg rounded-2xl mr-12 ${
              isActive ? "bg-gray-800" : "bg-transparent"
            }`
          }
        >
          <GoBookmark />
          My Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 text-lg rounded-2xl mr-12 ${
              isActive ? "bg-gray-800" : "bg-transparent"
            }`
          }
        >
          <SlLogout />
          Logout
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="font-accent">
      <ul>{sidebarLinks}</ul>
    </div>
  );
};

export default DashboardSidebar;
