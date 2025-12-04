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
                Life tosses many challenges at you when you try to realize
                long-term aspirations, which includes immediate monetary
                constraints and extensive list of investment options. Financial
                Planning is the process of designing, implementing and
                revisiting your personal financial strategy, that customized to
                guide you from where you are now, to where you want to be down
                the years.
              </p>
              <p>
                A good long-term investments planning includes contingency
                planning, specific goals like retirement, property, education,
                wedding, car and abroad visits etc. Their time horizon should be
                planned in such a manner that they would be available when it is
                time to meet our goals.
              </p>
              <p>
                In a goal based financial planning be it short-term or long-term
                goals, it is vital and essential to take into consideration of
                changing inflation, Number of years horizon to achieve the set
                goals, investible savings, liquidity requirement for day-to-day
                life, nature of risk tolerance etc. So, planning for adequate
                insurance cover for life, health, property etc. forms critical
                part of financial planning.
              </p>
              <p>
                Budgeting is another important aspect while doing the financial
                planning.A careful budgeting exercise without compromising minor
                details can provide good scope for saving enough for investments
                without perceptible influence on the lifestyle.
              </p>
              <p>
                The efficiency and usefulness of financial planning is solely
                depending on the level of involvement and commitment in the
                course and progression.
              </p>
              {`At Finatex, we're passionate about helping freelancers succeed in today's competitive digital landscape. With years of experience in the industry, we understand the unique challenges & opportunities that freelancers face when it comes to SEO and digital marketing.`}
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
