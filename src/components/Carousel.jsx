import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 z-50">
        <button
          onClick={prev}
          className="py-2 px-4 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white text-xs lg:text-3xl"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={next}
          className="py-2 px-4 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white  text-xs lg:text-3xl"
        >
          <BsChevronRight />
        </button>
      </div>
      <div className="absolute bottom-24 right-0 left-0 z-50">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-1 md:p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
