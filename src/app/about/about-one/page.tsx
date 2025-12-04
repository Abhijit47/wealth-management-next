import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import Footer from '@/components/Footer/Footer';
import MenuOne from '@/components/Header/Menu/MenuOne';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import AboutTwo from '@/components/Section/About/AboutTwo';
import CounterTwo from '@/components/Section/Counter/CounterTwo';
import CtaOne from '@/components/Section/CTA/CtaOne';
import OurTeam from '@/components/Section/OurTeam/OurTeam';
import PartnerAbout from '@/components/Section/Partner/PartnerAbout';

export default function AboutStyleOne() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <header id='header'>
          <TopNavOne />
          <MenuOne />
        </header>
        <main className='content'>
          <BreadcrumbItem
            link='About Us'
            img='/images/banner/about1.png'
            title='About Us'
            desc='We perform a full analysis of the client’s website and collect information about all the competitors to formulate a proper strategy.'
          />
          <AboutTwo />
          <CounterTwo classname='lg:pb-[100px] sm:pb-16 pb-10' />
          {/* <ServiceAboutOne data={serviceData} /> */}
          <OurTeam />
          <PartnerAbout />
          <CtaOne />
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
      </div>
    </>
  );
}
