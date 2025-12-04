'use client';

import { useCalculatorModal } from '@/contexts/calculator-modal-context';
import { useServiceModal } from '@/contexts/service-modal-context';
import {
  Button,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from '@headlessui/react';
import * as Icon from '@phosphor-icons/react/dist/ssr';
import clsx from 'clsx';

export default function CalculatorModal() {
  const { isOpenCalculatorModal, selectedCalculator, closeCalculatorModal } =
    useCalculatorModal();

  if (!selectedCalculator) return null;

  const { title, desc, shortDesc, icon } = selectedCalculator;

  return (
    <Dialog
      open={isOpenCalculatorModal}
      as='div'
      className='relative z-[1000] focus:outline-none transition duration-300 ease-out data-closed:opacity-0'
      onClose={closeCalculatorModal}
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
                <span className={'block'}>
                  <i className={`${icon} text-white text-2xl`}></i>
                </span>
                <span className='block'>{title}</span>
              </h3>
              <Button
                className='inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'
                onClick={closeCalculatorModal}>
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
            <ExampleForm />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

function ExampleForm() {
  const { closeServiceModal } = useServiceModal();

  return (
    <div className='w-full px-4'>
      <Fieldset className='space-y-6 rounded-xl bg-black p-6'>
        <Legend className='text-base/7 font-semibold text-white'>
          Shipping details
        </Legend>
        <Field>
          <Label className='text-sm/6 font-medium text-white'>
            Street address
          </Label>
          <Input
            className={clsx(
              'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
          />
        </Field>
        <Field>
          <Label className='text-sm/6 font-medium text-white'>Country</Label>
          <Description className='text-sm/6 text-white/50'>
            We currently only ship to North America.
          </Description>
          <div className='relative'>
            <Select
              className={clsx(
                'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
                // Make the text of each option black on Windows
                '*:text-black'
              )}>
              <option>Canada</option>
              <option>Mexico</option>
              <option>United States</option>
            </Select>
            <Icon.CaretCircleDown
              className='group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60'
              aria-hidden='true'
            />
          </div>
        </Field>
        <Field>
          <Label className='text-sm/6 font-medium text-white'>
            Delivery notes
          </Label>
          <Description className='text-sm/6 text-white/50'>
            If you have a tiger, we&apos;d like to know about it.
          </Description>
          <Textarea
            className={clsx(
              'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
            rows={3}
          />
        </Field>

        <div className='mt-4'>
          <Button
            className='inline-flex w-full text-center justify-center items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'
            onClick={closeServiceModal}>
            Got it, thanks!
          </Button>
        </div>
      </Fieldset>
    </div>
  );
}
