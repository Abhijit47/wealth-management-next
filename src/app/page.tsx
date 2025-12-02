// import TopNavOne from "@/components/Header/TopNav/TopNavOne";
// import MenuOne from "@/components/Header/Menu/MenuOne";
// import SliderOne from "@/components/Slider/SliderOne";
// import ServiceOne from "@/components/Section/Service/ServiceOne";
// import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst";
// import CaseStudyOne from "@/components/Section/CaseStudy/CaseStudyOne";
// import PaymentGatewayOneSecond from "@/components/Section/PaymentGateway/PaymentGatewayOneSecond";
// import FaqsOne from "@/components/Section/FAQs/FaqsOne";
// import FormRequestOne from "@/components/Section/FormRequest/FormRequestOne";
// import BlogOne from "@/components/Section/Blog/BlogOne";
// import PartnerOne from "@/components/Section/Partner/PartnerOne";
// import Footer from "@/components/Footer/Footer";
import AboutSix from '@/components/Section/About/AboutSix';
import BlogSix from '@/components/Section/Blog/BlogSix';
import CounterSix from '@/components/Section/Counter/CounterSix';
import FormRequestSix from '@/components/Section/FormRequest/FormRequestSix';
import PartnerSix from '@/components/Section/Partner/PartnerSix';
import PricingSix from '@/components/Section/Pricing/PricingSix';
import ServiceSix from '@/components/Section/Service/ServiceSix';
import ServiceSixSecond from '@/components/Section/Service/ServiceSixSecond';
import TestimonialSix from '@/components/Section/Testimonial/TestimonialSix';
import SliderSix from '@/components/Slider/SliderSix';
import blogData from '@/data/blog.json';
import serviceData from '@/data/service.json';
import testimonialData from '@/data/testimonial.json';

export default function Home() {
  return (
    <>
      {/* <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <SliderOne />
          <ServiceOne data={serviceData} />
          <PaymentGatewayOneFirst />
          <CaseStudyOne />
          <PaymentGatewayOneSecond />
          <FaqsOne />
          <FormRequestOne />
          <BlogOne data={blogData} />
          <PartnerOne classname='bg-blue lg:mt-[100px] sm:mt-16 mt-10' />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div> */}
      <main className='content'>
        <SliderSix />
        <PartnerSix classname='bg-black' />
        <CounterSix />
        <ServiceSix data={serviceData} />
        <AboutSix />
        <PricingSix />
        <ServiceSixSecond />
        <TestimonialSix data={testimonialData} />
        <BlogSix data={blogData} />
        <FormRequestSix
          bgImg='/images/cta/bg-cta6.png'
          classname='style-two style-six'
        />
      </main>
    </>
  );
}
