import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import flower from "../../assets/switzerland-flowers.jpg";
import lisbon from "../../assets/Lisbon-Portuga-spain.webp";
import winter from "../../assets/winter-netherland.jpg";
import clock from "../../assets/clock-tower-england.jpg";
import home from "../../assets/italy-homes.jpg";

const Country = () => {
  return (
    <div className="container mx-auto px-8 pb-20">
      <small className="font-montserrat text-[#37B7C3] uppercase">
        top countries
      </small>
      <h2 className="text-[#37B7C3] uppercase font-montserrat text-2xl md:text-4xl font-bold">
        popular <span className="text-[#071952]">countries</span>
      </h2>
      <p className="font-montserrat text-[#37B7C3] lg:w-1/2 mt-3">Explore the diverse and fascinating destinations across Europe. Discover the unique cultures, rich histories, and breathtaking landscapes of each country. Whether you're drawn to the charming villages of France, the historic landmarks of Italy, or the vibrant cities of Germany, our detailed guides will help you plan the perfect trip. Each country offers its own special allure, waiting for you to explore and experience</p>
      <div className="my-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="h-[60vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${flower})`,
              }}
            >
              <div className="flex flex-col justify-center items-center border h-full">
                <h2 className="uppercase text-2xl text-rose-400 font-semibold">
                  switzerland
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[60vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${clock})`,
              }}
            >
              <div className="flex flex-col justify-center items-center border h-full">
                <h2 className="uppercase text-2xl text-amber-400 font-semibold">
                  england
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[60vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${winter})`,
              }}
            >
              <div className="flex flex-col justify-center items-center border h-full">
                <h2 className="uppercase text-2xl text-[#EBF4F6] font-semibold">
                  netherland
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[60vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${home})`,
              }}
            >
              <div className="flex flex-col justify-center items-center border h-full">
                <h2 className="uppercase text-2xl text-teal-400 font-semibold">
                  italy
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[60vh] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${lisbon})`,
              }}
            >
              <div className="flex flex-col justify-center items-center border h-full">
                <h2 className="uppercase text-2xl text-yellow-400 font-semibold">
                  switzerland
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Country;
