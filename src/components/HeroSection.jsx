import React, { useEffect } from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import cover1 from "./image/covernew.png";
import cover2 from "./cover2.png";

// Typewriter effect CSS
import "./typewriter.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Carousel
        controls={false}
        indicators={true}
        interval={4500}
        pause={false}
        slide="true"
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${cover1})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h1 className="display-4 fw-bold typewriter">Karibu Engoko</h1>
              <p className="lead">
                Engoko Ltd is a leading Kenyan supplier of high-quality,
                dual-purpose day-old chicks. We are committed to transforming
                the poultry industry in Kenya by providing smallholder farmers
                with hardy, disease-resistant birds. Our chicks thrive in local
                rural environments, offering a more productive alternative to
                traditional breeds.
              </p>
              <Button
                style={{
                  backgroundColor: "#890010",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                className="hero-btn"
                href="/shop"
              >
                Shop Now
              </Button>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${cover2})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h1 className="display-4 fw-bold typewriter">You're Valued</h1>
              <p className="lead">
                At Engoko Ltd, we believe in empowering smallholder farmers with
                birds that provide both meat and egg benefits. Our dual-purpose
                chicks are not only more productive but can also play a vital
                role in addressing poverty and malnutrition across the country,
                ensuring a brighter and healthier future for Kenyan communities.
              </p>
              <Button
                style={{
                  backgroundColor: "#890010",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                className="hero-btn"
                href="/shop"
              >
                Shop Now
              </Button>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
