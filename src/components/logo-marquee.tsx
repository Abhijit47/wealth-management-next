import { companyLogos } from '@/constants';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import Image from 'next/image';

export default function LogoMarquee() {
  return (
    <section className={'pt-9 lg:pt-16 space-y-4'}>
      <blockquote>
        <p className={'text-surface text-center font-semibold'}>
          &ldquo;Don&apos;t save what is left after spending, but spend what is
          left after saving&rdquo; - Warren Buffet
        </p>
      </blockquote>

      <Marquee fade={true} pauseOnHover={true}>
        {companyLogos.map((logo, index) => (
          <div
            key={logo.id}
            className={'aspect-video w-full h-full lg:w-48 lg:h-48'}>
            <Image
              src={logo.imgSrc}
              alt={`Company Logo ${index + 1}`}
              width={500}
              height={500}
              className='object-contain w-full h-full aspect-video transition-all duration-300 ease-in-out'
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
