import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Great Work",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Leslie Alexander",
      company: "Nintendo",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      title: "Awesome Design",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Floyd Miles",
      company: "Bank of America",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      title: "Perfect Quality",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Dianne Russell",
      company: "Facebook",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      title: "Perfect Quality",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Dianne Russell",
      company: "Facebook",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      title: "Perfect Quality",
      content:
        "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
      name: "Dianne Russell",
      company: "Facebook",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        What our customers say
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
      </p>

      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center mb-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 italic mb-4">
                “{testimonial.content}”
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <p className="font-medium text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
