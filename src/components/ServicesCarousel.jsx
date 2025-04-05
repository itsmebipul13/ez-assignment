import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper/modules";
import ContactModal from "./ContactModal"; // ✅ Import the modal

  const services = [
    { code: "Vg", title: "Videography" },
    { code: "I2", title: "Individual Interviews" },
    { code: "CF", title: "Corporate Films" },
    { code: "AC", title: "Ads & Commercials" },
    { code: "Mo", title: "Motion Graphics" },
    { code: "An", title: "Animations" },
    { code: "Ed", title: "Editing Services" },
    { code: "VO", title: "Voice Over" },
    { code: "Ir", title: "Interpretation" },
    { code: "TR", title: "Translation" },
    { code: "Pd", title: "Presentation Design" },
    { code: "Sd", title: "Slide Design" },
    { code: "Ux", title: "UX/UI Design" },
    { code: "So", title: "Social Media" },
    { code: "Lg", title: "Logo Design" },
  ];
  

export default function ServicesCarousel() {
  const [showModal, setShowModal] = useState(false); // ✅ Control modal state

  return (
    <div className="bg-gradient-to-b from-[#011226] to-[#062f57] py-16 text-white text-center">
      <h2 className="text-sm uppercase text-gray-300">70+ Offerings that allow you to</h2>
      <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Focus on your core tasks</h1>
      <p className="text-lg font-medium text-white mb-6">GRAPHICS & VIDEO</p>
      <p className="text-sm text-gray-400 max-w-lg mx-auto mb-12">
        Lorem ipsum dolor sit amet, in accusantium quia aut recusandae eligendi est repudiandae molestiae.
      </p>

      <div className="px-4 sm:px-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full max-w-5xl mx-auto"
        >
          {services.map((service, idx) => (
  <SwiperSlide
    key={idx}
    className="bg-gradient-to-br from-[#2c2c2c] to-[#111] text-white rounded-xl p-6 w-64 h-64 flex flex-col justify-center items-center shadow-lg"
  >
    <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center text-black font-bold text-xl mb-4">
      {service.code}
    </div>
    <h4 className="text-sm text-white text-center leading-tight">{service.title}</h4>
  </SwiperSlide>
))}

        </Swiper>

        <div className="mt-12">
          <p className="text-sm text-white mb-2">
            Send us your requirements, and get a response within 10 minutes
          </p>
          <p className="text-xs text-gray-400 mb-4">
            That’s how we keep ourselves Faster than the Fastest
          </p>
          <button
            onClick={() => setShowModal(true)} 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* ✅ Contact Modal */}
      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
