import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonials } from "../assets/data";
export default function Testimonials() {
  return (
    <section className="" id="testimonials">
      <div className="container mx-auto flex  flex-col justify-between items-center py-16 px-4 sm:px-6 lg:px-8 gap-6 my-16">
        <h1 className="text-5xl text-center font-bold text-gray-800">
          Testimonials
        </h1>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="shadow-2xl rounded-2xl w-full lg:w-1/2  "
        >
          {testimonials.map((item, i) => (
            <SwiperSlide className="justify-center space-y-2 !p-5">
              <img src={item.image} alt="" className="rounded-xl" />

              <h2 className="font-bold">{item.name}</h2>
              <h2 className="text-gray-600">{item.text}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
