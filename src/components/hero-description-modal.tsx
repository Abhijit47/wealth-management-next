'use client';

import { heroDescriptions } from '@/constants';
import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useState } from 'react';

export default function HeroDescriptionModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDialog() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <Button
        onClick={toggleDialog}
        className='button-main !bg-primary-dark text-white hover:bg-white hover:text-black rounded-full'
        // className='rounded text-base font-semibold underline underline-offset-2 text-primary-light data-active:bg-primary-dark data-hover:bg-primary-dark hover:no-underline'
      >
        Know more
      </Button>

      <Dialog
        open={isOpen}
        as='div'
        transition
        className='relative !z-[1000] focus:outline-none transition duration-300 ease-out data-closed:opacity-0'
        onClose={toggleDialog}>
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-black/90 duration-300 ease-out data-closed:opacity-0'
        />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-7xl h-full rounded-xl bg-primary-dark/50 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 space-y-4'>
              <DialogTitle
                as='div'
                className='flex items-center justify-between'>
                <h3 className='text-base/7 font-medium text-white'>
                  About Ascent Wealth
                </h3>
                <Button
                  className='inline-flex items-center gap-2 rounded-md bg-primary-light px-3 py-0.5 text-sm/6 font-semibold text-primary-dark/90 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-primary-dark data-open:bg-primary-dark'
                  onClick={toggleDialog}>
                  X
                </Button>
              </DialogTitle>

              {heroDescriptions.map((item) => (
                <p key={item.id} className='text-sm/6 text-white'>
                  {item.description}
                </p>
              ))}

              <div className='mt-4'>
                <Button
                  className='inline-flex items-center gap-2 rounded-md bg-primary-light px-3 py-1.5 text-sm/6 font-semibold text-primary-dark/90 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-primary-dark data-open:bg-primary-dark'
                  onClick={toggleDialog}>
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
