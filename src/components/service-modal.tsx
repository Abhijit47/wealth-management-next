'use client';

import { useServiceModal } from '@/contexts/service-modal-context';
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import * as Icon from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

export default function ServiceModal() {
  const { isOpenServiceModal, selectedService, closeServiceModal } =
    useServiceModal();

  if (!selectedService) return null;

  const { title, subtitle, description, cover, quote } = selectedService;

  return (
    <Dialog
      open={isOpenServiceModal}
      as='div'
      className='relative z-[1000] focus:outline-none transition duration-300 ease-out data-closed:opacity-0'
      onClose={closeServiceModal}
      transition>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-black/90 duration-300 ease-out data-closed:opacity-0'
      />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-5xl h-full rounded-xl bg-primary-dark/50 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 space-y-6'>
            <DialogTitle
              as='div'
              className='border-b border-white/10 pb-4 flex items-center justify-between'>
              <h3 className='text-base/7 font-medium text-white space-x-4 flex items-center'>
                {/* <span className={'block'}>
                  <i className={`${icon} text-white text-2xl`}></i>
                </span> */}
                <span className='block'>{title}</span>
              </h3>
              <Button
                className='inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'
                onClick={closeServiceModal}>
                <Icon.X className='size-4 fill-white/60' aria-hidden='true' />
                <span className='sr-only'>Close dialog</span>
              </Button>
            </DialogTitle>
            {/* <Description className='mt-2 text-sm/6 text-white/50'>
              {desc}
            </Description>
            <Description className='mt-2 text-sm/6 text-white/50'>
              {shortDesc}
            </Description> */}
            <div className={'space-y-6'}>
              <div>
                <Image
                  src={cover}
                  alt={title}
                  width={800}
                  height={400}
                  className='w-full h-auto object-cover rounded-lg'
                  priority={true}
                />
              </div>

              <h3
                className={
                  'heading7 text-white hover:text-orange duration-300'
                }>
                {title}
              </h3>
              <small className='text-placehover'>{subtitle}</small>

              <div className={'space-y-2'}>
                {description.map((para, index) => (
                  <p key={index} className='mt-4 text-white/90'>
                    {para}
                  </p>
                ))}
              </div>

              <blockquote>
                <p>
                  <em className='text-white/70 italic'>{quote}</em>
                </p>
              </blockquote>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
