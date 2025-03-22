import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import chickenFarm from "./engoko.png"; // Replace with actual image

const ImageWithText = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="py-5">
      <Row className="align-items-stretch">
        {/* Image Section */}
        <Col
          md={6}
          className="d-flex align-items-center p-0"
          data-aos="fade-right"
        >
          <img
            src={chickenFarm}
            alt="Engoko Farm"
            className="img-fluid w-100 h-100 object-fit-cover rounded-start shadow-lg"
            style={{ maxHeight: "100%" }}
          />
        </Col>

        {/* Text Section */}
        <Col
          md={6}
          className="p-5 text-white d-flex flex-column justify-content-center"
          style={{ backgroundColor: "#800020" }}
          data-aos="fade-left"
        >
          <h2 className="mb-3">About Engoko</h2>
          <p className="mb-3">
            Engoko is dedicated to transforming the poultry industry in Kenya by
            providing high-quality, dual-purpose chickens. Our mission is to
            empower smallholder farmers with disease-resistant birds that thrive
            in rural conditions.
          </p>
          <p className="mb-4">
            With extensive support and technical training, we ensure that
            farmers maximize productivity and profitability.
          </p>
          <button className="btn btn-warning align-self-start">
            Learn More
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageWithText;
