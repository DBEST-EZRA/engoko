import React from "react";
import CustomNavbar from "./CustomNavbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import Services from "./Services";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <HeroSection />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
