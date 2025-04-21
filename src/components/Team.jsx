import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import one from "./image/sam.webp";
import two from "./image/ezra.webp";

const teamMembers = [
  {
    name: "Samuel Matieka",
    title: "Production Manager",
    image: one,
  },
  {
    name: "Ezra",
    title: "Technical Director",
    image: two,
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#890010" }}>
          Meet Our Team
        </h2>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col md={4} sm={6} key={index} className="mb-4" data-aos="fade-up">
              <Card className="border-0 shadow team-card text-center">
                <Card.Img
                  variant="top"
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle mx-auto mt-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text className="text-muted">{member.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
