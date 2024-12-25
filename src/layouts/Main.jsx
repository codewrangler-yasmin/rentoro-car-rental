import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <section className="font-accent bg-primary text-base-200">
      <header>
        {/* Navbar */}
        <Navbar />
      </header>
      {/* Outlet */}
      <main className="">
        <div className="min-h-[calc(100vh-306px)] bg-base-200 rounded-[80px]">
          <Outlet />
        </div>
      </main>
      <footer>
        {/* Footer */}
        <Footer />
      </footer>
    </section>
  );
};

export default Main;
