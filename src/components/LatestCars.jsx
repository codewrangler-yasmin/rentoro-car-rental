import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/LatestCars.css"; // Import your custom CSS here

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import LatestCarCard from "./LatestCarCard";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const LatestCars = () => {
  const { loading } = useContext(AuthContext);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchAllCarsData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/cars`);
      setCars(data);
      console.log(data);
    };
    fetchAllCarsData();
  }, []);
  return (
    <div className="w-[95%] mx-auto">
      <div className="container mx-auto border-b border-gray-50/20 pb-6 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Recently Added Cars</h2>
          <Link
            to="/allCars"
            className="text-white font-medium hover:underline flex items-center"
          >
            <span>View Cars</span> <GoArrowUpRight />
          </Link>
        </div>
      </div>
      <div className="container mx-auto slider-one">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          pagination={{
            type: "fraction",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {cars && cars.length > 0 ? (
            cars.slice(0, 8).map((car) => (
              <SwiperSlide key={car._id}>
                <LatestCarCard car={car} />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <p>No latest cars available at this time.</p>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Custom Styles for Pagination */}
      {/* <style jsx>{``}</style> */}
    </div>
  );
};

export default LatestCars;
