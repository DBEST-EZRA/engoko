import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Testimonials from "./Testimonial";
import AgentFarmerBanner from "./AgentFarmerBanner";
import FAQs from "./FAQs";
import WhatsAppButton from "./WhatsappButton";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <AgentFarmerBanner />
      <Testimonials />
      <FAQs />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
