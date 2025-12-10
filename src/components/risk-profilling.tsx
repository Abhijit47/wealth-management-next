'use client';

import * as Icon from '@phosphor-icons/react/dist/ssr';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function RiskProfilling() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className='payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10'
      ref={ref}>
      <div className='container'>
        <div className='content flex items-center gap-8'>
          <div className='w-full xl:w-5/12 flex flex-col gap-y-6'>
            <h3 className='heading3 text-surface'>
              Why Risk Profiling is <br /> important for investors?
            </h3>
            <p className='body2 text-secondary text-base'>
              Most investors start with unrealistic expectations about risk and
              return. Unrealistic expectations can quickly become unfulfilled
              expectations and unfulfilled expectations tend to cause grief for
              all concerned. There is often a gap between the level of risk
              which a client would normally choose to take, their risk
              tolerance, and the risk associated with the return required to
              achieve their goals. profiling is a process for finding the
              optimal level of investment risk for your client by balancing
              their risk required, risk capacity and their individual risk
              tolerance. There is often a mismatch between risk required,
              capacity and tolerance.
            </p>
            <div className='list-service'>
              <div className='service-item flex items-center'>
                <Icon.Check weight='bold' className='text-secondary text-2xl' />
                <div className='text-button ml-3 text-secondary'>
                  Debt evaluation and ability to repay
                </div>
              </div>
              <div className='service-item flex items-center mt-3'>
                <Icon.Check weight='bold' className='text-secondary text-2xl' />
                <div className='text-button ml-3 text-secondary'>
                  Calculation of credit limit
                </div>
              </div>
              <div className='service-item flex items-center mt-3'>
                <Icon.Check weight='bold' className='text-secondary text-2xl' />
                <div className='text-button ml-3 text-secondary'>
                  Consolidation of personal financial data
                </div>
              </div>
            </div>
            <p className='body2 text-secondary text-base'>
              It is psychological and critical to know how comfortable an
              investor is with investment ups and downs, completing the
              following questionnaire will assist in understanding the risk
              profiling of the investor and make suitable investments decisions.
            </p>
            <div className='button-block'>
              <Link
                className='button-main !bg-primary-dark hover:bg-primary-light text-white rounded-full'
                href='https://forms.gle/F1k3s6qWDpFLyQ2D8'
                target='_blank'
                rel='noopener noreferrer'>
                Client Risk Profile Questionnaire
              </Link>
            </div>
          </div>
          <div className='w-11/12 xl:w-7/12'>
            <div
              className='right pl-10'
              style={{
                transform: isInView ? 'none' : 'translateX(60px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
              }}>
              <div className='bg-img relative w-full h-full'>
                {/* <Image
                  width={5000}
                  height={5000}
                  className='w-full hidden'
                  src='/images/component/gateway2-bg.png'
                  alt=''
                /> */}

                <Image
                  src={'/images/20822848_NA_October_12 1.svg'}
                  width={750}
                  height={500}
                  // fill
                  alt='Decorative'
                  className='w-full h-full rounded-lg object-cover object-center'
                />
              </div>
              <div className='feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                <i className='icon-list text-2xl bg-orange p-4 rounded-2xl'>
                  {' '}
                </i>
                <div className='text'>
                  <div className='heading7'>2K+</div>
                  <div className='heading7 text-secondary'>Projects</div>
                </div>
              </div>
              <div className='feature-item !top-4 py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                <Icon.Star weight='fill' className='text-yellow text-3xl' />
                <div className='text'>
                  <div className='heading7'>4.8</div>
                  <div className='heading7 text-secondary'>Satisfaction</div>
                </div>
              </div>
              <div className='feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow'>
                <i className='icon-user text-2xl bg-orange py-4 px-5 rounded-2xl'>
                  {' '}
                </i>
                <div className='text'>
                  <div className='heading7'>5 Years</div>
                  <div className='heading7 text-secondary'>
                    Product Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
