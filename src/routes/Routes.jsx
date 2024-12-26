import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllCars from "../pages/AllCars";
import Main from "../layouts/Main";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import MyFavorites from "../pages/MyFavorites";
import AddCar from "../pages/AddCar";
import MyCars from "../pages/MyCars";
import MyBookings from "../pages/MyBookings";
import UpdateCar from "../pages/UpdateCar";
import BookingRequests from "../pages/BookingRequests";
import MyProfile from "../pages/MyProfile";
import CarDetails from "../pages/CarDetails";
import Register from "../pages/Authentication/Register";
import TabAuthentication from "../pages/Authentication/TabAuthentication";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allCars",
        element: <AllCars />,
      },
      {
        path: "/carDetails",
        element: <CarDetails />,
      },
      {
        path: "/login",
        element: <TabAuthentication />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/addCar",
        element: <AddCar />,
      },

      {
        path: "/myCars",
        element: <MyCars />,
      },
      {
        path: "/updateCar",
        element: <UpdateCar />,
      },
      {
        path: "/myFavorites",
        element: <MyFavorites />,
      },
      {
        path: "/myBookings",
        element: <MyBookings />,
      },
      {
        path: "/bookingRequests",
        element: <BookingRequests />,
      },
      {
        path: "/myProfile",
        element: <MyProfile />,
      },
    ],
  },
]);

export default router;
