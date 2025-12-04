import BreadcrumbItem from '@/components/Breadcrumb/BreadcrumbItem';
import MenuOne from '@/components/Header/Menu/MenuOne';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
// import ServiceFilter from "@/components/Section/Service/ServiceFilter"
import Footer from '@/components/Footer/Footer';
import CtaOne from '@/components/Section/CTA/CtaOne';

export default function ServiceStyleTwo() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <header id='header'>
          <TopNavOne />
          <MenuOne />
        </header>
        <main className='content'>
          <BreadcrumbItem
            link='Our Services'
            img='/images/banner/about1.png'
            title='Our Services'
            desc='Expand your knowledge and skills in cryptocurrency trading through our educational resources.'
          />
          {/* <ServiceFilter data={serviceData} /> */}
          <CtaOne />
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
      </div>
    </>
  );
}
