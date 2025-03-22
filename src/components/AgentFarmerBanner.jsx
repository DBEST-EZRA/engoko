import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { Container, Row, Col, Button } from "react-bootstrap";

const AgentFarmerBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="text-white py-5"
      style={{ background: "linear-gradient(135deg, #890010, black)" }}
    >
      <Container className="text-center">
        <h2 data-aos="fade-up">Interested in becoming our</h2>
        <h1 data-aos="fade-up" data-aos-delay="200">
          Agent or Farmer?
        </h1>

        <Row className="mt-4">
          <Col
            md={6}
            data-aos="fade-right"
            className="p-4 bg-dark bg-opacity-50 rounded"
          >
            <h3>OUR AGENTS</h3>
            <p>
              Farmers who purchase day-old chicks (DOCs) from Engoko, brood the
              chicks for 30-45 days, and sell them to smallholder farmers in
              their local community. Agents receive extensive support from the
              Engoko team regarding technical management and marketing.
            </p>
          </Col>

          <Col
            md={6}
            data-aos="fade-left"
            className="p-4 bg-dark bg-opacity-50 rounded"
          >
            <h3>OUR SMALLHOLDER FARMERS</h3>
            <p>
              Farmers who buy brooded chickens from agents and rear SASSO to
              either sell or consume their eggs and meat. Males require 3 months
              to reach market weight, while females will begin laying within 5
              months.
            </p>
          </Col>
        </Row>

        <Button
          as={Link}
          to="/contact"
          variant="light"
          className="mt-4 fw-bold"
          data-aos="zoom-in"
        >
          Find Us
        </Button>
      </Container>
    </div>
  );
};

export default AgentFarmerBanner;
