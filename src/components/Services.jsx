import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "./Services.css";
import broiler from "./image/broilers1.webp";
import layer from "./image/layers1.webp";
import improved from "./image/improved.webp";

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
          Our Products
        </h2>
        <Row>
          {/* Service 1 - Day-Old Chicks */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="mx-auto">
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "100%",
                    maxHeight: "180px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={improved}
                    alt="Improved Kienyeji"
                    className="img-fluid"
                    style={{
                      maxHeight: "180px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <Card.Body>
                <Card.Title>Improved Kienyeji</Card.Title>
                <Card.Text>
                  Dual Purpose chicken that can be used for both egg and meat
                  production
                </Card.Text>
                <div className="text-center mt-3">
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
              </Card.Body>
            </Card>
          </Col>

          {/* Service 2 - Poultry Feed */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="mx-auto">
                <img
                  src={broiler}
                  alt="Improved Kienyeji"
                  className="img-fluid"
                  style={{
                    maxHeight: "180px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title>Broilers</Card.Title>
                <Card.Text>
                  Fastest Maturing Broiler Bird. 5-6 weeks harvested at 1.5 -
                  1.8kgs of slaughtered weight
                </Card.Text>
                <div className="text-center mt-3">
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
              </Card.Body>
            </Card>
          </Col>

          {/* Service 3 - Farmer Training */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="600">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="mx-auto">
                <img
                  src={layer}
                  alt="Improved Kienyeji"
                  className="img-fluid"
                  style={{
                    maxHeight: "180px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title>Layers</Card.Title>
                <Card.Text>
                  Brown Egg Layer - we supply ISSA Brown commercial egg layer
                  chickens wich are suitable for local poultry farming
                </Card.Text>
                <div className="text-center mt-3">
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
