import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import one from "./image/a1.webp";
import two from "./image/a2.webp";
import three from "./image/a3.webp";
import four from "./image/a4.webp";
import five from "./image/a5.webp";
import six from "./image/a1.webp";
import seven from "./image/a3.webp";
import eight from "./image/a4.webp";
import CartHeader from "./CartHeader";

const chicks = [
  {
    name: "Day Old Chicks",
    description: "Healthy and vaccinated day-old chicks.",
    price: "KSh 150",
    image: one,
  },
  {
    name: "2 Weeks Old Chicks",
    description: "Strong and growing chicks, ready for rearing.",
    price: "KSh 300",
    image: two,
  },
  {
    name: "1 Month Old Chicks",
    description: "Well-fed and vaccinated 1-month-old chicks.",
    price: "KSh 600",
    image: three,
  },
];

const incubators = [
  {
    name: "128 Eggs Double Function Incubator",
    price: "KSh 25,000",
    image: one,
  },
  {
    name: "192 Eggs Automatic Egg Incubator",
    price: "KSh 30,000",
    image: two,
  },
  {
    name: "264 Fully Automatic Egg Incubator",
    price: "KSh 35,000",
    image: three,
  },
  {
    name: "528 Brand New Automatic Egg Incubator",
    price: "KSh 50,000",
    image: four,
  },
  {
    name: "1056 Fully Automated Egg Incubator",
    price: "KSh 80,000",
    image: five,
  },
  {
    name: "Solar Egg Incubators",
    price: "KSh 40,000",
    image: six,
  },
  {
    name: "128 Egg Incubators with Temperature Control",
    price: "KSh 28,000",
    image: seven,
  },
  {
    name: "Modern 128 Eggs Hatchery AC/DC Incubator",
    price: "KSh 32,000",
    image: eight,
  },
];

const Products = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#890010" }}>
          Our Products
        </h2>
        <CartHeader />

        {/* Chicks Section */}
        {/* <h3 className="mt-5" style={{ color: "#890010" }}>
          Chicks
        </h3> */}
        <Row>
          {chicks.map((product, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="mt-auto mb-3">
                    <strong>{product.price}</strong>
                  </Card.Text>
                  <Button variant="danger" onClick={handleShow}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Incubators Section */}
        <h3 className="mt-5" style={{ color: "#890010" }}>
          Incubators
        </h3>
        <Row>
          {incubators.map((product, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="mt-auto mb-3">
                    <strong>{product.price}</strong>
                  </Card.Text>
                  <Button variant="danger" onClick={handleShow}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          <h5>Thank You for Shopping With Us</h5>
          <p>
            Our checkout system is under development. Kindly contact us to
            complete your order:
          </p>
          <h6 className="fw-bold text-danger">+254710831806</h6>
          <Button variant="secondary" onClick={handleClose} className="mt-3">
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Products;
