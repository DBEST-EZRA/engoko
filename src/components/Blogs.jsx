import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const blogs = [
  {
    title: "The Importance of Poultry Farming",
    excerpt:
      "Poultry farming has transformed livelihoods by providing a sustainable source of income and nutrition...",
    image: "/images/blog1.jpg",
    link: "/blog/importance-of-poultry-farming",
  },
  {
    title: "Best Practices for Raising Healthy Chickens",
    excerpt:
      "Discover key strategies for keeping your chickens healthy, from nutrition to disease prevention...",
    image: "/images/blog2.jpg",
    link: "/blog/raising-healthy-chickens",
  },
  {
    title: "Why Dual-Purpose Chickens Are the Future",
    excerpt:
      "Dual-purpose breeds offer both meat and eggs, making them ideal for smallholder farmers...",
    image: "/images/blog3.jpg",
    link: "/blog/dual-purpose-chickens",
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#890010" }}>
          Latest Blogs
        </h2>
        <Row>
          {blogs.map((blog, index) => (
            <Col md={4} key={index} className="mb-4" data-aos="fade-up">
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  alt={blog.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.excerpt}</Card.Text>
                  <Button href={blog.link} variant="dark">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
