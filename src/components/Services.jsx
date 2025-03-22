import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEgg, FaSeedling, FaChalkboardTeacher } from "react-icons/fa"; // Import FA icons
import "./Services.css";

const Services = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#890010" }}>
          Our Services
        </h2>
        <Row>
          {/* Service 1 - Day-Old Chicks */}
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="icon-container mx-auto">
                <FaEgg className="service-icon" />
              </div>
              <Card.Body>
                <Card.Title>Day-Old Chicks</Card.Title>
                <Card.Text>
                  We supply high-quality, dual-purpose day-old chicks that are
                  disease-resistant and ideal for smallholder farmers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 2 - Poultry Feed */}
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="icon-container mx-auto">
                <FaSeedling className="service-icon" />
              </div>
              <Card.Body>
                <Card.Title>Poultry Feed</Card.Title>
                <Card.Text>
                  Our nutritious poultry feed ensures the healthy growth and
                  productivity of your birds, maximizing their potential.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 3 - Farmer Training */}
          <Col md={4} className="mb-4">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="icon-container mx-auto">
                <FaChalkboardTeacher className="service-icon" />
              </div>
              <Card.Body>
                <Card.Title>Farmer Training</Card.Title>
                <Card.Text>
                  We offer training programs to educate farmers on best poultry
                  management practices for better productivity.
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
