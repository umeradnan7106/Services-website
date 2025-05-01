"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Quote} from "lucide-react";

const testimonials = [
  {
    quote:
      "We tried several companies when we started this project and Pina Vida came out way ahead of the others in terms of quality and speed. We are extremely happy",
    name: "Peter Williams",
    position: "Head of Informatics at FMI",
  },
  {
    quote:
      "Their expertise and professionalism made a huge difference in our project. We highly recommend their services.",
    name: "Jane Doe",
    position: "CEO at TechCorp",
  },
  {
    quote:
      "Their expertise and professionalism made a huge difference in our project. We highly recommend their services.",
    name: "Jane Doe",
    position: "CEO at TechCorp",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="relative max-w-lg mx-auto">
      {/* Swiper Component */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="p-6 bg-white  my-20"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="py-8">
            <div className="flex flex-col items-start">
              {/* Quote Icon */}
              <div className="bg-green-500 p-3 rounded-full">
                <Quote size={24} color="white" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-lg mt-4">{testimonial.quote}</p>

              {/* Author Info */}
              <h3 className="font-bold text-gray-900 mt-4">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default TestimonialCarousel;
