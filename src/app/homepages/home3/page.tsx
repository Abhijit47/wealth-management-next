import MenuThree from '@/components/Header/Menu/MenuThree';
import TopNavThree from '@/components/Header/TopNav/TopNavThree';
import AboutThree from '@/components/Section/About/AboutThree';
import ServiceThreeFirst from '@/components/Section/Service/ServiceThreeFirst';
import SliderThree from '@/components/Slider/SliderThree';
// import ServiceThree from "@/components/Section/Service/ServiceThree";
import Footer from '@/components/Footer/Footer';
import BlogOne from '@/components/Section/Blog/BlogOne';
import CaseStudyThree from '@/components/Section/CaseStudy/CaseStudyThree';
import CtaOne from '@/components/Section/CTA/CtaOne';
import FormRequestTwo from '@/components/Section/FormRequest/FormRequestTwo';
import TestimonialThree from '@/components/Section/Testimonial/TestimonialThree';
import blogData from '@/data/blog.json';
import caseStudyData from '@/data/case-study.json';
import testimonialData from '@/data/testimonial.json';

export default function HomeThree() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <header id='header'>
          <TopNavThree />
          <MenuThree />
        </header>
        <main className='content'>
          <SliderThree />
          <ServiceThreeFirst />
          <AboutThree />
          {/* <ServiceThree data={serviceData} /> */}
          <CaseStudyThree data={caseStudyData} />
          <TestimonialThree data={testimonialData} />
          <FormRequestTwo classname='style-two style-three' bgImg='' />
          <BlogOne data={blogData} />
          <div className='pb-[100px]'></div>
          <CtaOne />
        </main>
        <footer id='footer' className='style-three'>
          <Footer />
        </footer>
      </div>
    </>
  );
}
