'use client';

import { useServiceModal } from '@/contexts/service-modal-context';
import { ServiceType } from '@/type/ServiceType';

interface Props {
  data: ServiceType;
}

export default function ServiceItem({ data }: Props) {
  const { openServiceModal } = useServiceModal();
  return (
    <div
      className='service-item rounded-2xl border border-line hover-box-shadow hover:cursor-pointer'
      onClick={() => openServiceModal(data)}>
      <div className='service-item-main block h-full px-8 pb-7 md:pt-14 pt-10'>
        <div className='icon md:w-[100px] w-20 md:h-[100px] h-20 flex items-center justify-center rounded-2xl'>
          <i className={`${data.icon} text-white md:text-5xl text-4xl`}></i>
        </div>
        <div className='heading7 text-white hover:text-orange duration-300 mt-6'>
          {data.title}
        </div>
        <div className='text-placehover mt-3'>{data.desc}</div>
      </div>
    </div>
  );
}
