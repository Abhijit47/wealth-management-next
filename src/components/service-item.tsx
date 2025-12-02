'use client';

import { useServiceModal } from '@/contexts/service-modal-context';
import { ServiceType } from '@/type/ServiceType';
import {
  Button,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

interface Props {
  data: ServiceType;
}

export default function ServiceItem({ data }: Props) {
  const { isOpenServiceModal, onToggleServiceModal } = useServiceModal();
  return (
    <>
      <div
        className='service-item rounded-2xl border border-line hover-box-shadow hover:cursor-pointer'
        onClick={onToggleServiceModal}>
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
      <Dialog
        open={isOpenServiceModal}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={onToggleServiceModal}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className='fixed inset-0 bg-black/30' />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-5xl h-full rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0'>
              <DialogTitle
                as='h3'
                className='text-base/7 font-medium text-white'>
                {data.title}
              </DialogTitle>
              <Description>{data.desc}</Description>
              <p className='mt-2 text-sm/6 text-white/50'>{data.shortDesc}</p>
              <div className='mt-4'>
                <Button
                  className='inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'
                  onClick={onToggleServiceModal}>
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
