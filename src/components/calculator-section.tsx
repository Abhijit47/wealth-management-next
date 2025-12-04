import { calculators } from '@/constants';
import { CalculatorModalProvider } from '@/contexts/calculator-modal-context';
import CalculatorCard from './calculator-card';
import CalculatorModal from './calculator-modal';

export default function CalculatorSection() {
  return (
    <section id='calculators'>
      <div className='service-block style-six style-second lg:pt-[100px] sm:pt-16 pt-10'>
        <div className='container'>
          <div className='uppercase text-xs font-bold text-orange'>
            How we work
          </div>
          <div className='heading flex max-lg:flex-col lg:items-center justify-between gap-8 gap-y-4 mt-3'>
            <div className='heading3 text-white'>
              With Ascent Wealth
              <br />
              Create a Perfect Goal
            </div>
            <div className='body2 text-placehover lg:w-1/2'>
              <blockquote>
                <p>
                  &ldquo;The interesting thing about very intelligent and
                  successful people is that, they are usually the ones who have
                  figured out that making things simple is the correct path to
                  success&rdquo; - Charlie Munger
                </p>
              </blockquote>
            </div>
          </div>
          <CalculatorModalProvider>
            <div className='list-service grid xl:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-20 mt-20'>
              {calculators.map((calculator) => (
                <CalculatorCard key={calculator.id} calculator={calculator} />
              ))}
              <CalculatorModal />
            </div>
          </CalculatorModalProvider>
        </div>
      </div>
    </section>
  );
}
