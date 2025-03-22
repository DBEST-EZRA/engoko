import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Testimonials from "./Testimonial";
import AgentFarmerBanner from "./AgentFarmerBanner";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <AgentFarmerBanner />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default Home;
