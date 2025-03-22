import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const products = [
  {
    name: "128 Eggs Double Function Incubator",
    price: "KSh 25,000",
    image: "/images/incubator1.jpg",
  },
  {
    name: "192 Eggs Automatic Egg Incubator",
    price: "KSh 30,000",
    image: "/images/incubator2.jpg",
  },
  {
    name: "264 Fully Automatic Egg Incubator",
    price: "KSh 35,000",
    image: "/images/incubator3.jpg",
  },
  {
    name: "528 Brand New Automatic Egg Incubator",
    price: "KSh 50,000",
    image: "/images/incubator4.jpg",
  },
  {
    name: "1056 Fully Automated Egg Incubator",
    price: "KSh 80,000",
    image: "/images/incubator5.jpg",
  },
  {
    name: "Solar Egg Incubators",
    price: "KSh 40,000",
    image: "/images/incubator6.jpg",
  },
  {
    name: "128 Egg Incubators with Temperature Control",
    price: "KSh 28,000",
    image: "/images/incubator7.jpg",
  },
  {
    name: "Modern 128 Eggs Hatchery AC/DC Incubator",
    price: "KSh 32,000",
    image: "/images/incubator8.jpg",
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
        <Row>
          {products.map((product, index) => (
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
                    Buy Now
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
