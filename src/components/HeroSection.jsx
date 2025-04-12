import React, { useEffect } from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import cover1 from "./image/covernew.png";
import cover2 from "./cover2.png";
import cover3 from "./image/mommychic.webp";

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
              <h2 className="display-4 fw-light">
                Empowering Farmers for <br />a Healthier, Wealthier Future
              </h2>

              <div className="d-flex flex-wrap gap-3 mt-3 align-items-center">
                <Button
                  style={{
                    backgroundColor: "#FFA500",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "45px",
                    lineHeight: "1",
                    fontSize: "1rem",
                  }}
                  className="hero-btn"
                  href="/shop"
                >
                  Shop Now
                </Button>
              </div>
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
              <h2 className="display-4 fw-light">
                The chicks we Breed <br /> to the Birds you rear
              </h2>
              <p className=""></p>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <Button
                  style={{
                    backgroundColor: "#FFA500",
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
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${cover3})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h2 className="display-5 fw-light">
                Bringing a Lasting Smile <br /> to Every Farmer by Making
                Poultry Farming Transformational
              </h2>
              <p className=""></p>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <Button
                  style={{
                    backgroundColor: "#FFA500",
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
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
