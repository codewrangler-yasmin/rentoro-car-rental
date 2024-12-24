import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="font-accent bg-primary text-base-200">
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className="">
        <div className="min-h-[calc(100vh-306px)] bg-base-200 rounded-[80px] py-20">
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
