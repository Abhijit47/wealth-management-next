'use client';

import { useServiceModal } from '@/contexts/service-modal-context';
import {
  Button,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

export default function ServiceModal() {
  const { isOpenServiceModal, selectedService, closeServiceModal } =
    useServiceModal();

  if (!selectedService) return null;

  const { title, desc, shortDesc } = selectedService;

  return (
    <Dialog
      open={isOpenServiceModal}
      as='div'
      className='relative z-10 focus:outline-none'
      onClose={closeServiceModal}>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className='fixed inset-0 bg-black/30' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-5xl h-full rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0'>
            <DialogTitle as='h3' className='text-base/7 font-medium text-white'>
              {title}
            </DialogTitle>
            <Description>{desc}</Description>
            <p className='mt-2 text-sm/6 text-white/50'>{shortDesc}</p>
            <div className='mt-4'>
              <Button
                className='inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'
                onClick={closeServiceModal}>
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
