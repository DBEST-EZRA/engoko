import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Testimonials from "./Testimonial";
import AgentFarmerBanner from "./AgentFarmerBanner";
import FAQs from "./FAQs";
import WhatsAppButton from "./WhatsappButton";
import IntroSection from "./SectionAbout";
import ServiceSection from "./sectionServices";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <Services />
      <ServiceSection />
      <AgentFarmerBanner />
      <Testimonials />
      <FAQs />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
