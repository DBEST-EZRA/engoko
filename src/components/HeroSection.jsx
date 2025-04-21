import React, { useEffect } from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import coverPremier from "./image/chickw.webp";
// import cover1 from "./image/covernew.png";
import broiler from "./image/broiler.webp";
import layer from "./image/layer.webp";
import cover3 from "./image/mommychic.webp";
import cover4 from "./image/banana.webp";
import eggs from "./image/eggs.webp";
import two from "./image/tester1.webp";

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
        {/* Slide premiere */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${coverPremier})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h2 className="display-4 fw-light">
                Pre-Vaccinated <br />
                Day Old Chicks
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
                  Buy Now
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 1 */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${two})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h2 className="display-4 fw-light">
                Lays upto 240 Eggs <br />
                per year
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
                  Buy Now
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${eggs})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h2 className="display-4 fw-light">Table Eggs</h2>
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
                  Buy Now
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
              <h2 className="display-5 fw-light">2.5 Feed Conversion Ratio</h2>
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
                  Buy Now
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${cover4})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h2 className="display-5 fw-light">Free Range Bird</h2>
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
                  Buy Now
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 5 */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${broiler})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h2 className="display-5 fw-light">Broilers</h2>
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
                  Buy Now
                </Button>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        {/* Slide 6 */}
        <Carousel.Item>
          <div
            className="hero-section d-flex align-items-center text-left text-white"
            style={{ backgroundImage: `url(${layer})` }}
          >
            <div className="overlay"></div>
            <Container data-aos="fade-up">
              <h2 className="display-5 fw-light">Layers</h2>
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
                  Buy Now
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
