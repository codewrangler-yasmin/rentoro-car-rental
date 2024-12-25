import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PiQuotesDuotone } from "react-icons/pi";

const Reviews = () => {
  const reviews = [
    {
      title: "Great Work",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Leslie Alexander",
      company: "Nintendo",
      image: "https://via.placeholder.com/80", // Replace with actual image
    },
    {
      title: "Awesome Design",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Floyd Miles",
      company: "Bank of America",
      image: "https://via.placeholder.com/80", // Replace with actual image
    },
    {
      title: "Perfect Quality",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Dianne Russell",
      company: "Facebook",
      image: "https://via.placeholder.com/80", // Replace with actual image
    },
    {
      title: "Perfect Quality",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Dianne Russell",
      company: "Facebook",
      image: "https://via.placeholder.com/80", // Replace with actual image
    },
    {
      title: "Perfect Quality",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Dianne Russell",
      company: "Facebook",
      image: "https://via.placeholder.com/80", // Replace with actual image
    },
  ];

  // Define different colors for each review
  const quoteColors = ["text-blue-400", "text-pink-400", "text-purple-400"];

  return (
    <div className="container mx-auto py-24 px-6">
      {/* Section Title */}
      <h2 className="text-3xl text-primary font-bold mb-10 border-b pb-6">
        What our customers say
      </h2>

      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg p-12 mb-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 relative">
                {/* Assign a different color for each quote icon */}
                <PiQuotesDuotone
                  className={`absolute -right-4 -top-4 text-5xl ${
                    quoteColors[index % quoteColors.length]
                  }`}
                />
                {review.title}
              </h3>
              <p className="text-gray-600 italic mb-4">“{review.content}”</p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="font-medium text-gray-800">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
