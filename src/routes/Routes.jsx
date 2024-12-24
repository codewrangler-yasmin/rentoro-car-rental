import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllCars from "../pages/AllCars";
import Main from "../layouts/Main";
import NotFound from "../pages/NotFound";
import Dashboard from "../components/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import MyFavorites from "../components/MyFavorites";
import AddCar from "../components/AddCar";
import MyCars from "../components/MyCars";
import MyBookings from "../components/MyBookings";
import UpdateCar from "../components/UpdateCar";

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
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
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
    ],
  },
]);

export default router;
