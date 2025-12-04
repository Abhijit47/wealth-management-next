import { heroDescriptions } from '@/constants';
import Image from 'next/image';
// import Link from 'next/link';
import 'swiper/css/bundle';
import HeroDescriptionModal from '../hero-description-modal';

const SliderSix = () => {
  return (
    <section id='home'>
      <div className='slider-block style-six'>
        <div className='slider-main'>
          <div className='slider-item slider-first'>
            <div className='bg-img'>
              <Image
                src={'/coins-8975531_1920.jpg'}
                width={4000}
                height={3000}
                alt='bgslider'
                priority={true}
                className='w-full h-full object-cover opacity-30'
              />
            </div>
            <div className='container'>
              <div className='text-content'>
                <div className='heading2'>
                  <div className='relative overflow-hidden'>
                    <span className='block text-white relative overflow-hidden'>
                      Ascent Wealth{' '}
                    </span>
                    <span className='block text-white absolute top-0 left-0 w-full h-full'>
                      Ascent Wealth{' '}
                    </span>
                  </div>
                  <div className='relative overflow-hidden'>
                    <span className='block text-white relative overflow-hidden'>
                      Welcomes You!
                    </span>
                    <span className='block text-white absolute top-0 left-0 w-full h-full'>
                      Welcomes You!
                    </span>
                  </div>
                </div>
                <div className='body2 md:mt-6 mt-4 text-white xl:w-1/2 sm:w-2/3 w-full'>
                  <p className={'line-clamp-4'}>
                    {/* {heroDescriptions[0].description.length > 100
                      ? heroDescriptions[0].description.slice(0, 250) + `...`
                      : heroDescriptions[0].description}{' '} */}
                    {heroDescriptions[0].description}
                  </p>
                </div>
                <div className='button-block md:mt-7 mt-5'>
                  {/* <Link
                    className='button-main !bg-primary-dark text-white hover:bg-white hover:text-black rounded-full'
                    href='#about'>
                    Know more
                  </Link> */}
                  <HeroDescriptionModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSix;
