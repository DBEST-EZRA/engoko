import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";
import one from "./image/1.jpeg";
import two from "./image/2.jpeg";
import three from "./image/3.jpeg";
import OurValues from "./OurValues";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* About Engoko */}
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <h2 style={{ color: "#890010" }} className="fw-bold">
              Who We Are
            </h2>
            <p>
              Engoko is committed to transforming the poultry industry by
              providing high-quality, dual-purpose chickens. We empower
              smallholder farmers with disease-resistant birds that thrive in
              rural conditions.
            </p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src={one}
              alt="About Engoko"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Specialty Banner */}
        <div
          className="text-white text-center py-5"
          style={{ background: "linear-gradient(to right, #890010, #000)" }}
          data-aos="fade-up"
        >
          <Container>
            <h2 className="fw-bold">Our Speciality</h2>
            <p className="lead">
              Engoko is committed to delivering high-quality poultry products to
              rural smallholder farmers who have been underserved by the
              traditional poultry industry. Our breed helps farmers diversify
              income, build resilience, and combat malnutrition.
            </p>
            <Row className="mt-4">
              <Col md={3} sm={6} className="mb-4">
                <h3 className="fw-bold">
                  <CountUp start={0} end={500} duration={4} separator="," />+
                </h3>
                <p>Agents</p>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h3 className="fw-bold">
                  <CountUp start={0} end={100000} duration={4} separator="," />+
                </h3>
                <p>Farmers</p>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h3 className="fw-bold">
                  <CountUp start={0} end={100} duration={4} separator="," />
                  K+
                </h3>
                <p>Jobs Created</p>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h3 className="fw-bold">
                  <CountUp start={0} end={47} duration={4} separator="," />
                </h3>
                <p>Counties</p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Our Mission */}
        <Row className="align-items-center flex-md-row-reverse my-5">
          <Col md={6} data-aos="fade-left">
            <h2 style={{ color: "#890010" }} className="fw-bold">
              Our Mission
            </h2>
            <p>
              Our mission is to improve food security and economic growth by
              supplying nutritious, fast-growing poultry to local communities.
            </p>
          </Col>
          <Col md={6} data-aos="fade-right">
            <img
              src={two}
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Our Impact */}
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <h2 style={{ color: "#890010" }} className="fw-bold">
              Our Impact
            </h2>
            <p>
              We support thousands of farmers by providing training, technical
              assistance, and a sustainable business model for raising poultry.
            </p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src={three}
              alt="Our Impact"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
        <OurValues />
      </Container>
    </section>
  );
};

export default About;
