import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const teamMembers = [
  {
    name: "John Mwangi",
    title: "Founder & CEO",
    image: "/images/team1.jpg",
  },
  {
    name: "Aisha Mohammed",
    title: "Operations Manager",
    image: "/images/team2.jpg",
  },
  {
    name: "Samuel Otieno",
    title: "Lead Veterinarian",
    image: "/images/team3.jpg",
  },
  {
    name: "Grace Wanjiru",
    title: "Marketing Director",
    image: "/images/team4.jpg",
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
