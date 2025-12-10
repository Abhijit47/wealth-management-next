import Image from 'next/image';

const AboutSix = () => {
  return (
    <div className='about-block style-six pt-[100px] bg-on-surface'>
      <div className='container'>
        <div className='flex max-lg:flex-col items-center justify-between gap-y-8'>
          <div className='w-full lg:w-1/2 sm:w-2/3 xl:px-16 px-10'>
            <div className='bg-img w-full'>
              <Image
                width={960}
                height={680}
                className='w-full'
                // src='https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/954self.png'
                src={'/images/component/960x680.png'}
                alt='img'
              />
            </div>
          </div>
          <div className='w-full xl:w-5/12 lg:w-1/2'>
            <div className='text-button-uppercase text-orange'>
              People Trust Us
            </div>
            <div className='heading3 text-white mt-3'>
              It&apos;s Time To Begin Your Ascent!
            </div>
            <div className='body1 text-placehover mt-10 text-sm space-y-4'>
              <p>
                Long-term financial success requires more than savings — it
                requires a personalised, structured goal-based financial plan.
              </p>
              <p>
                We help you align your goals such as retirement planning,
                property purchase, higher education, weddings, global travel,
                and wealth creation with the right investment horizon.
              </p>
              <p>
                Your plan incorporates inflation, liquidity needs, risk
                tolerance, risk capacity and investible surplus to build a
                resilient long-term strategy.
              </p>
              <p>
                With adequate life and health insurance, proper budgeting, tax
                planning and disciplined investing, your financial journey
                becomes efficient, confident, and future-ready.
              </p>
              {/* {`At Finatex, we're passionate about helping freelancers succeed in today's competitive digital landscape. With years of experience in the industry, we understand the unique challenges & opportunities that freelancers face when it comes to SEO and digital marketing.`} */}
            </div>
            {/* <div className='flex items-center gap-4 mt-9'>
              <div className='flex items-center'>
                <div className='img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[3]'>
                  <Image
                    className='full h-full rounded-full'
                    width={300}
                    height={300}
                    src='/images/member/60x60.png'
                    alt=''
                  />
                </div>
                <div className='img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[2] -ml-3'>
                  <Image
                    className='full h-full rounded-full'
                    width={300}
                    height={300}
                    src='/images/member/60x60.png'
                    alt=''
                  />
                </div>
                <div className='img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[1] -ml-3'>
                  <Image
                    className='full h-full rounded-full'
                    width={300}
                    height={300}
                    src='/images/member/60x60.png'
                    alt=''
                  />
                </div>
                <div className='img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[2] -ml-3 max-[450px]:hidden'>
                  <Image
                    className='full h-full rounded-full'
                    width={300}
                    height={300}
                    src='/images/member/60x60.png'
                    alt=''
                  />
                </div>
                <div className='img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[1] -ml-3 max-[400px]:hidden'>
                  <Image
                    className='full h-full rounded-full'
                    width={300}
                    height={300}
                    src='/images/member/60x60.png'
                    alt=''
                  />
                </div>
                <div className='img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-placehover p-0.5 z-[0] -ml-3'>
                  <span className='w-full h-full flex items-center justify-center bg-white rounded-full text-button'>
                    5M
                  </span>
                </div>
              </div>
              <div className='text-button text-white'>
                Trusted by 50M+ People around{' '}
                <br className='max-xl:hidden max-lg:block max-[400px]:hidden' />{' '}
                the globe
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSix;
