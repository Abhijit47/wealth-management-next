import { companyLogos } from '@/constants';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import Image from 'next/image';

export default function LogoMarquee() {
  return (
    <section className={'pt-9 lg:pt-16'}>
      <Marquee fade={true} pauseOnHover={true}>
        {companyLogos.map((logo, index) => (
          <div key={logo.id} className={'w-full h-full aspect-video'}>
            <Image
              src={logo.imgSrc}
              alt={`Company Logo ${index + 1}`}
              width={500}
              height={500}
              className='object-contain w-full h-full aspect-video grayscale hover:grayscale-0 transition-all duration-300 ease-in-out'
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
