import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Testimonials from "./Testimonial";
import AgentFarmerBanner from "./AgentFarmerBanner";
import Contact from "./Contact";
import WhatsAppButton from "./WhatsappButton";
import IntroSection from "./SectionAbout";
import ServiceSection from "./sectionServices";
import SlidingPromo from "./SlidingPromo";
import "./home.css";
import OurPartners from "./OurPartners";
import ImageBanner from "./ImageBanner";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <OurPartners />
      <Services />
      <ServiceSection />
      <ImageBanner />
      <Testimonials />
      <SlidingPromo />
      <AgentFarmerBanner />
      <Contact />
      {/* <FAQs /> */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
