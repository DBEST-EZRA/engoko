import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEgg, FaSeedling, FaChalkboardTeacher } from "react-icons/fa"; // Import FA icons
import "./Services.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <h2
          className="text-center mb-4"
          style={{ color: "#890010" }}
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <Row>
          {/* Service 1 - Day-Old Chicks */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="icon-container mx-auto">
                <FaEgg className="service-icon" />
              </div>
              <Card.Body>
                <Card.Title>Poultry Breeding</Card.Title>
                <Card.Text>
                  Engoko Ltd is the exclusive distributor of the Rainbow
                  Roosters, Kuroiler & SASSO, high-quality, dual-purpose poultry
                  breeds that are up to four times more productive than
                  traditional local breeds.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 2 - Poultry Feed */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="icon-container mx-auto">
                <FaSeedling className="service-icon" />
              </div>
              <Card.Body>
                <Card.Title>Technical Support</Card.Title>
                <Card.Text>
                  We offer technical consultations and training by animal
                  production and veterinary professionals throughout the
                  brooding process, with direct delivery to the farmer's
                  premises.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 3 - Farmer Training */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="600">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="icon-container mx-auto">
                <FaChalkboardTeacher className="service-icon" />
              </div>
              <Card.Body>
                <Card.Title>Marketing</Card.Title>
                <Card.Text>
                  Continuous support to local farmers in growing their
                  businesses by helping them find markets for brooded Rainbow
                  Roosters, Kuroiler & SASSO birds and exploring opportunities
                  for further diversification.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
