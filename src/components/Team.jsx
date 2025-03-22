import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import one from "./image/t1.png";
import two from "./image/t3.jpg";
import three from "./image/t2.jpg";
import four from "./image/t4.jpeg";

const teamMembers = [
  {
    name: "Sam",
    title: "Founder & CEO",
    image: one,
  },
  {
    name: "Aisha Mohammed",
    title: "Operations Manager",
    image: two,
  },
  {
    name: "Thomas",
    title: "Lead Veterinarian",
    image: three,
  },
  {
    name: "Grace Wanjiru",
    title: "Marketing Director",
    image: four,
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
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={3} sm={6} key={index} className="mb-4" data-aos="fade-up">
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
