import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/LatestCars.css"; // Import your custom CSS here

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import LatestCarCard from "./LatestCarCard";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const LatestCars = () => {
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
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[700px]">
            <LatestCarCard />
          </SwiperSlide>
          <SwiperSlide>
            <LatestCarCard />
          </SwiperSlide>
          <SwiperSlide>
            <LatestCarCard />
          </SwiperSlide>
          <SwiperSlide>
            <LatestCarCard />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom Styles for Pagination */}
      {/* <style jsx>{``}</style> */}
    </div>
  );
};

export default LatestCars;
