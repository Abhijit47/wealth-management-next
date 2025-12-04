'use client';

import { useCalculatorModal } from '@/contexts/calculator-modal-context';
import Image from 'next/image';

type CalculatorProps = {
  calculator: CalculatorType;
};

export default function CalculatorCard(props: CalculatorProps) {
  const { id, icon, image, category, title, desc, shortDesc } =
    props.calculator;
  const { openCalculatorModal } = useCalculatorModal();

  return (
    <div
      className='service-item rounded-2xl border border-line hover-box-shadow'
      key={id}
      onClick={() => openCalculatorModal(props.calculator)}>
      <div className='service-item-main block h-full px-8 pb-7 md:pt-12 pt-8'>
        {/* <div className='icon bg-orange md:w-20 w-16 md:h-20 h-16 flex items-center justify-center rounded-2xl'>
          <span className={`heading4 text-white`}>01</span>
        </div> */}
        <div className='icon !bg-primary-dark/50 size-16 md:size-20 lg:size-24 flex items-center justify-center rounded-2xl overflow-hidden'>
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className='object-contain h-full w-full bg-transparent'
          />
        </div>

        <div className='heading7 text-white hover:text-orange duration-300 mt-6'>
          {title}
        </div>
        <div className='text-placehover mt-3'>{desc}</div>
      </div>
    </div>
  );
}
