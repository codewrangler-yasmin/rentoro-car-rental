import Navbar from "../components/Navbar";
import DashboardSidebar from "../components/DashboardSidebar";
import { Link, Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <Navbar />

      <div className="bg-primary">
        <div className="w-[95%] mx-auto grid grid-cols-12">
          <div className="h-screen col-span-2 text-base-200 py-12">
            <DashboardSidebar />
          </div>
          <div className="col-span-10">
            <div className="h-screen bg-base-100 rounded-3xl p-12">
              <Outlet />
            </div>
            <div>
              <div className="w-[95%] mx-auto">
                {/* Footer Bottom */}
                <div className="flex justify-between items-center py-6 text-center text-gray-500 text-sm">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
