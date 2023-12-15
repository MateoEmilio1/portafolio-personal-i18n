"use client";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


import workshops from "../../../lib/workshops";

//Imagenes
import Image from "next/image";


export default function CarruselWorkshops() {

  return (
    <div id="Page" className="sm:items-center">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="carruselOfTute"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
      >
        {/* WORKSHOPS */}

        {/* MAPEA LOS WORKSHOPS */}
        {workshops.map((workshop) => (
          <SwiperSlide key={workshop.id} onClick={workshop.muestra}>
            <a className="cursor-pointer" onClick={workshop.muestra}>
              <div>
                <Image
                  src={workshop.img}
                  width="800"
                  height="100"
                  alt={`Workshop Image`}
                  className="xl:max-h-fit md:float-right rounded"
                  onClick={workshop.muestra}
                ></Image>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>



  );
}
