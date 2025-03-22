import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import one from "./image/1.jpeg";
import two from "./image/2.jpeg";
import three from "./image/3.jpeg";

const blogs = [
  {
    title: "The Importance of Poultry Farming",
    excerpt:
      "Poultry farming has transformed livelihoods by providing a sustainable source of income and nutrition...",
    fullContent:
      "Poultry farming plays a vital role in global food security and economic stability, particularly in rural communities. As a major source of protein, poultry products such as eggs and meat contribute to improved nutrition and health. Moreover, poultry farming creates employment opportunities for millions worldwide, empowering smallholder farmers to generate income with relatively low investment costs.\n\n" +
      "Beyond economic benefits, poultry farming promotes sustainable agriculture by integrating with crop farming—chicken manure serves as an excellent organic fertilizer, reducing dependence on chemical fertilizers. Additionally, advancements in poultry genetics and feed technology have led to more efficient production methods, allowing farmers to achieve higher yields with lower costs.\n\n" +
      "However, challenges such as disease outbreaks, fluctuating feed prices, and poor management practices can hinder success. Implementing best practices, such as biosecurity measures, proper housing, and vaccination programs, is essential for maintaining a productive and profitable poultry enterprise. With continued innovation and support from stakeholders, poultry farming will remain a cornerstone of global food production and rural development.",
    image: one,
  },
  {
    title: "Best Practices for Raising Healthy Chickens",
    excerpt:
      "Discover key strategies for keeping your chickens healthy, from nutrition to disease prevention...",
    fullContent:
      "Raising healthy chickens requires a combination of proper nutrition, good hygiene, disease prevention, and optimal housing conditions. A well-balanced diet containing proteins, carbohydrates, vitamins, and minerals is essential for growth, egg production, and overall well-being. High-quality commercial feeds or properly formulated homemade feeds ensure that birds receive adequate nutrients at different growth stages.\n\n" +
      "In addition to nutrition, clean and spacious housing is critical for poultry health. Overcrowding can lead to stress, poor growth rates, and the spread of diseases. Chicken coops should have proper ventilation, adequate lighting, and nesting areas to promote comfort and productivity. Regular cleaning and waste management reduce the risk of infections and improve the overall environment for the birds.\n\n" +
      "Disease prevention is another key aspect of poultry farming. Common poultry diseases such as Newcastle disease, coccidiosis, and avian influenza can devastate flocks if not managed properly. Farmers should implement biosecurity measures, including vaccination programs, restricted farm access, and proper disposal of sick or dead birds. Regular health checks and consultation with veterinary professionals help detect and address potential health issues early.\n\n" +
      "By following these best practices, poultry farmers can enhance productivity, ensure food safety, and achieve long-term success in the industry.",
    image: two,
  },
  {
    title: "Why Dual-Purpose Chickens Are the Future",
    excerpt:
      "Dual-purpose breeds offer both meat and eggs, making them ideal for smallholder farmers...",
    fullContent:
      "As consumer preferences shift toward sustainable and cost-effective farming practices, dual-purpose chicken breeds have gained popularity among smallholder farmers. These breeds are designed to produce both meat and eggs, making them highly versatile and economically viable, especially for those with limited resources.\n\n" +
      "Unlike commercial broilers, which are bred solely for meat, or layers, which specialize in egg production, dual-purpose chickens strike a balance between the two. They are generally hardy and adaptable to various environments, making them ideal for free-range and backyard farming systems. Popular dual-purpose breeds include Rhode Island Reds, Plymouth Rocks, and Sussex chickens.\n\n" +
      "One of the primary benefits of dual-purpose chickens is their ability to provide farmers with a steady income stream. Farmers can collect and sell eggs regularly while also raising surplus roosters for meat. This reduces dependency on commercial hatcheries and enhances food security at the household level.\n\n" +
      "Additionally, dual-purpose chickens tend to have better disease resistance compared to highly specialized breeds. Their ability to thrive under natural conditions reduces the need for intensive management and veterinary interventions, lowering production costs.\n\n" +
      "With growing awareness of sustainable agriculture and the need for diversified farming approaches, dual-purpose chickens offer a promising solution for smallholder farmers looking to maximize their resources. Their adaptability, economic benefits, and contribution to food security make them an essential component of modern poultry farming strategies.",
    image: three,
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setModalShow(true);
  };

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
                  <Button variant="dark" onClick={() => handleShow(blog)}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Read More */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedBlog?.fullContent}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Blogs;
