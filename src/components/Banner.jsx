import { Fade, Slide } from "react-awesome-reveal";
import Carousel from "./Carousel";
import { BsFuelPump } from "react-icons/bs";
import { TbTransformPointBottomLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import { PiClockCounterClockwiseLight } from "react-icons/pi";

const slides = [
  "https://i.ibb.co.com/1rHYG1h/2024-Mercedes-Benz-E-Class.jpg",
  "https://i.ibb.co.com/yyDNCGP/2024-BMW-5-Series.jpg",
  "https://i.ibb.co.com/wCQjH66/2024-Mercedes-Benz-GLE-SUV.jpg",
  "https://i.ibb.co.com/ZzxXFL8/2024-BMW-i7-M70-x-Drive.jpg",
];

const Banner = () => {
  return (
    <div className="carousel-container relative z-20">
      <div className="flex justify-center items-center">
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {slides.map((slide, idx) => (
            <div className="carousel-item max-h-screen" key={idx}>
              <img src={slide} alt={`Slide ${idx}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="container mx-auto">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center gap-5">
          <div className="container mx-auto z-50 flex flex-col justify-center gap-5">
            <Slide>
              <h3 className="text-2xl text-white font-light">
                Rent Start From <span className="font-bold text-5xl">$99</span>/
                day
              </h3>
              <h1 className="text-white text-2xl md:text-5xl xl:text-6xl font-semibold font-oswald">
                Drive Your Dreams Today!
              </h1>
            </Slide>
            <Fade delay={1000} cascade damping={0.1}>
              <div className="w-[30%] py-3 my-3 text-white flex justify-between items-center gap-3">
                <span className="flex flex-col">
                  <span className="text-4xl">
                    <PiClockCounterClockwiseLight />
                  </span>
                  <span className="text-lg">Good Mileage</span>
                </span>{" "}
                <span className="flex flex-col">
                  <span className="text-3xl">
                    <BsFuelPump />
                  </span>

                  <span className="text-lg">Fuel Efficient</span>
                </span>
                <span className="flex flex-col">
                  <span className="text-3xl">
                    <TbTransformPointBottomLeft />
                  </span>
                  <span className="text-lg">Effortless Driving</span>
                </span>
              </div>
              <Link
                to="/allCars"
                type="submit"
                className="bg-transparent-600 border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white focus:outline-none focus:ring-2 focus:ring-white hover:text-primary"
              >
                View Available Cars <span aria-hidden="true">↗</span>
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
