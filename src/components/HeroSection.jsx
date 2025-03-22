import React, { useEffect } from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import cover1 from "./image/covernew.png";
import cover2 from "./cover2.png";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Carousel controls={false} indicators={true} interval={4000} pause={false}>
      {/* Slide 1 */}
      <Carousel.Item>
        <div
          className="hero-section d-flex align-items-center text-center text-white"
          style={{ backgroundImage: `url(${cover1})` }}
        >
          <div className="overlay"></div>
          <Container data-aos="fade-up">
            <h1 className="display-4 fw-bold">Welcome to ENGOKO</h1>
            <p className="lead">
              Fresh, quality chicken delivered straight to your door.
            </p>
            <Button className="hero-btn" href="/shop">
              Shop Now
            </Button>
          </Container>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div
          className="hero-section d-flex align-items-center text-center text-white"
          style={{ backgroundImage: `url(${cover2})` }}
        >
          <div className="overlay"></div>
          <Container data-aos="fade-up">
            <h1 className="display-4 fw-bold">Your Trusted Poultry Partner</h1>
            <p className="lead">
              High-quality poultry products straight from our farm to your home.
            </p>
            <Button className="hero-btn" href="/shop">
              Shop Now
            </Button>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
