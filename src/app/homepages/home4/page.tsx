import MenuFour from '@/components/Header/Menu/MenuFour';
import TopNavFour from '@/components/Header/TopNav/TopNavFour';
import PartnerOne from '@/components/Section/Partner/PartnerOne';
import SliderFour from '@/components/Slider/SliderFour';
// import serviceData from '@/data/service.json'
// import ServiceFour from "@/components/Section/Service/ServiceFour";
import Footer from '@/components/Footer/Footer';
import BlogFour from '@/components/Section/Blog/BlogFour';
import CaseStudyFour from '@/components/Section/CaseStudy/CaseStudyFour';
import CounterFour from '@/components/Section/Counter/CounterFour';
import CtaFour from '@/components/Section/CTA/CtaFour';
import FormRequestFour from '@/components/Section/FormRequest/FormRequestFour';
import PricingFour from '@/components/Section/Pricing/PricingFour';
import TestimonialFour from '@/components/Section/Testimonial/TestimonialFour';
import blogData from '@/data/blog.json';
import caseStudyData from '@/data/case-study.json';
import testimonialData from '@/data/testimonial.json';

export default function HomeFour() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <header id='header'>
          <TopNavFour />
          <MenuFour />
        </header>
        <main className='content'>
          <SliderFour />
          <PartnerOne classname='bg-deep-purple' />
          {/* <ServiceFour data={serviceData} /> */}
          <CounterFour />
          <CaseStudyFour data={caseStudyData} />
          <TestimonialFour data={testimonialData} />
          <PricingFour />
          <CtaFour />
          <BlogFour data={blogData} />
          <FormRequestFour />
        </main>
        <footer id='footer' className='style-four'>
          <Footer />
        </footer>
      </div>
    </>
  );
}
