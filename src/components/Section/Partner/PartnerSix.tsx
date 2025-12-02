'use client';

import { companyLogos } from '@/constants';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import 'swiper/css/bundle';

interface Props {
  classname: string;
}

const PartnerSix: React.FC<Props> = ({ classname }) => {
  const doubleLogos = [...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <>
      <div className={`brand-block py-9 ${classname}`}>
        <div className='container'>
          <div className='list-brand'>
            <Marquee
              speed={200}
              loop={3}
              onCycleComplete={() => {
                console.log('cycle completed');
                // restart the cycle
              }}>
              {doubleLogos.map((logo) => (
                <div
                  // md:h-[34px] h-[30px] md:mx-14 mx-10
                  className='brand-item relative flex items-center justify-center w-full h-full aspect-video md:mx-14 mx-10'
                  key={crypto.randomUUID()}>
                  <Image
                    src={logo.imgSrc}
                    width={500}
                    height={500}
                    alt={'logo'}
                    className='w-full h-full aspect-video object-contain grayscale hover:grayscale-0 duration-500 transition-colors'
                  />
                </div>
              ))}

              {/* <div className='brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10'>
                <Image
                  src={'/images/partner/Logo-2.png'}
                  width={300}
                  height={300}
                  alt='1'
                  className='h-full w-auto duration-500 relative object-cover'
                />
              </div>
              <div className='brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10'>
                <Image
                  src={'/images/partner/Logo-3.png'}
                  width={300}
                  height={300}
                  alt='1'
                  className='h-full w-auto duration-500 relative object-cover'
                />
              </div>
              <div className='brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10'>
                <Image
                  src={'/images/partner/Logo-4.png'}
                  width={300}
                  height={300}
                  alt='1'
                  className='h-full w-auto duration-500 relative object-cover'
                />
              </div>
              <div className='brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10'>
                <Image
                  src={'/images/partner/Logo-5.png'}
                  width={300}
                  height={300}
                  alt='1'
                  className='h-full w-auto duration-500 relative object-cover'
                />
              </div>
              <div className='brand-item relative flex items-center justify-center md:h-[34px] h-[30px] md:mx-14 mx-10'>
                <Image
                  src={'/images/partner/Logo.png'}
                  width={300}
                  height={300}
                  alt='1'
                  className='h-full w-auto duration-500 relative object-cover'
                />
              </div> */}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSix;
