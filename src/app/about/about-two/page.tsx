import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import Footer from '@/components/Footer/Footer';
import MenuOne from '@/components/Header/Menu/MenuOne';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import AboutTwo from '@/components/Section/About/AboutTwo';
import CtaOne from '@/components/Section/CTA/CtaOne';
import FormRequestTwo from '@/components/Section/FormRequest/FormRequestTwo';
import OurTeam from '@/components/Section/OurTeam/OurTeam';
import Partner from '@/components/Section/Partner/PartnerAbout';

export default function AboutStyleTwo() {
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
          {/* <ServiceAboutTwo data={serviceData} /> */}
          <FormRequestTwo
            classname='style-two style-about'
            bgImg='/images/banner/form-cta-about.png'
          />
          <OurTeam />
          <Partner />
          <CtaOne />
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
      </div>
    </>
  );
}
