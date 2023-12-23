'use client'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import workshops from '../../../lib/workshops'

//Imagenes
import Image from 'next/image'
import Link from 'next/link'

export default function CarruselWorkshops() {
  return (
    <div>
      {/* CARRUSEL DESKTOP L2 */}
      <div
        id='CarruselDesktop'
        className='hidden items-center justify-between   pt-[80px] lg:block  '
      >
        <Swiper
          initialSlide={2}
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={3}
          rewind={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 25,
            modifier: 23,
            slideShadows: false
          }}
          preventClicks={true}
          navigation={true}
          pagination={{
            clickable: true,
            type: 'bullets'
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='CarruselDesktopL2'
        >
          {/* WORKSHOPS */}

          {/* MAPEA LOS WORKSHOPS */}
          {workshops.map(workshop => (
            <SwiperSlide
              key={workshop.id}
              className='h-[404px] w-[700px]'
              onClick={workshop.muestra}
            >
              <a className='cursor-pointer' onClick={workshop.muestra}>
                <div className='   rounded-sm bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 p-[2px] hover:bg-blue-700'>
                  <div className=''>
                    <Image
                      src={workshop.img}
                      width='600'
                      height='303'
                      alt={`Workshop Image`}
                      className='rounded-t-md md:float-right xl:max-h-fit'
                      onClick={workshop.muestra}
                    ></Image>
                  </div>
                  <div className='rounded-b-md bg-bg-card px-4 pb-8 bg-[#1C1C1C]'>
                    <h1 className='font-inter py-1 text-2xl font-bold leading-[48px] tracking-tighter text-white'>
                      {workshop.titulo}
                    </h1>
                    <p className='font-inter text-base  font-normal italic leading-6 tracking-tight text-white'>
                      {workshop.descripcion}
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* CARRUSEL RESPONSIVE L2 */}

      <div id='CarruselDesktop' className='lg:hidden  '>
        <div className='px-[5vw] sm:px-[17vw] pt-[75px]'>
          <div className='flex  justify-between items-center flex-wrap'>
            <Swiper
              initialSlide={2}
              effect={'coverflow'}
              grabCursor={false}
              centeredSlides={true}
              slidesPerView={1}
              rewind={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 25,
                modifier: 23,
                slideShadows: false
              }}
              preventClicks={true}
              navigation={true}
              pagination={{
                clickable: true,
                type: 'bullets'
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className='CarruselDesktopL2'
            >
              {/* CARDS */}

              {/* MAPEA LAS CARDS */}
              {workshops.map(workshop => (
                <SwiperSlide
                  key={workshop.id}
                  className='sm:h-[300px] md:h-[370px] w-[700px]'
                  onClick={workshop.muestra}
                >
                  <a className='cursor-pointer' onClick={workshop.muestra}>
                    <div className='  rounded-sm bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 p-[2px] hover:bg-blue-700'>
                      <div>
                        <Image
                          src={workshop.img}
                          width={600}
                          height={331}
                          alt={`Workshop Image`}
                          className='rounded-t-md md:float-right xl:max-h-fit'
                          onClick={workshop.muestra}
                        ></Image>
                      </div>
                      <div className='rounded-b-md bg-[#1C1C1C]  px-4 pb-8'>
                        <h1 className='font-inter  py-1 text-2xl font-bold leading-[48px] tracking-tighter text-white'>
                          {workshop.titulo}
                        </h1>
                        <p className='font-inter text-base  font-normal italic leading-6 tracking-tight text-white'>
                          {workshop.descripcion}
                        </p>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
