'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import { testimonials } from '@/constants';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Rate from './Other/Rate';

const isDev = process.env.NODE_ENV === 'development';

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 100,
    infinite: true,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  } as SwiperOptions;

  return (
    <>
      <div className='testimonial-block style-three style-six our-project-block'>
        <div className='container'>
          <div className='heading3 text-center'>Our Testimonials</div>
        </div>
        <div className='list-testimonial list-project lg:mt-10 mt-7'>
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            loop={false}
            autoplay={
              isDev ? undefined : { delay: 3000, disableOnInteraction: false }
            }
            pagination={{ clickable: true }}
            speed={400}
            initialSlide={1}
            modules={[Pagination, Navigation, A11y, Autoplay]}
            className='h-full relative'
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
            }}>
            {testimonials.map((item, index) => (
              <SwiperSlide
                key={index}
                className={'aspect-auto md:aspect-video w-full h-full'}>
                <TestimonialItem data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

type Props = (typeof testimonials)[0];

function TestimonialItem({ data }: { data: Props }) {
  return (
    <div className='item flex max-sm:flex-col-reverse h-full w-full'>
      <div className='sm:w-7/12'>
        <div className='comment-item style-six lg:py-[72px] lg:px-[60px] sm:py-12 sm:px-10 p-8 rounded-2xl block'>
          <div className='flex flex-col justify-between h-full'>
            <div className='icon mb-4'>
              <i className='icon-quotes text-2xl md:text-4xl lg:text-6xl'></i>
            </div>
            <Rate currentRate={data.rating} size={20} />
            <div className='text-white mt-4'>{`"${data.message}"`}</div>
            <div className='infor mt-5'>
              <div className='text-button text-white'>{data.name}</div>
              <div className='caption1 text-placehover mt-1'>
                {data.designation}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:w-5/12'>
        <Image
          width={500}
          height={400}
          className='w-full h-full object-contain'
          src={data.image}
          alt={data.name}
        />
      </div>
    </div>
  );
}
