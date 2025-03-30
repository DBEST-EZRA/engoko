import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { db } from "./Database/Configuration";
import { collection, addDoc } from "firebase/firestore";

const counties = [
  "Baringo",
  "Bomet",
  "Bungoma",
  "Busia",
  "Elgeyo Marakwet",
  "Embu",
  "Garissa",
  "Homa Bay",
  "Isiolo",
  "Kajiado",
  "Kakamega",
  "Kericho",
  "Kiambu",
  "Kilifi",
  "Kirinyaga",
  "Kisii",
  "Kisumu",
  "Kitui",
  "Kwale",
  "Laikipia",
  "Lamu",
  "Machakos",
  "Makueni",
  "Mandera",
  "Marsabit",
  "Meru",
  "Migori",
  "Mombasa",
  "Murang'a",
  "Nairobi",
  "Nakuru",
  "Nandi",
  "Narok",
  "Nyamira",
  "Nyandarua",
  "Nyeri",
  "Samburu",
  "Siaya",
  "Taita Taveta",
  "Tana River",
  "Tharaka Nithi",
  "Trans Nzoia",
  "Turkana",
  "Uasin Gishu",
  "Vihiga",
  "Wajir",
  "West Pokot",
];

const AgentFarmerBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    county: "Kisii",
    town: "",
    interest: "Farmer",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "career"), formData);
      setStatusMessage("Details submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatusMessage("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
      setShowStatusModal(true);
      handleClose();
    }
  };

  return (
    <div
      className="text-white py-5"
      style={{ background: "linear-gradient(135deg, #890010, black)" }}
    >
      <Container className="text-center">
        <h2 data-aos="fade-up">Interested in becoming our</h2>
        <h1 data-aos="fade-up" data-aos-delay="200">
          Agent or Farmer?
        </h1>

        <Row className="mt-4">
          <Col
            md={6}
            data-aos="fade-right"
            className="p-4 bg-dark bg-opacity-50 rounded"
          >
            <h3>OUR AGENTS</h3>
            <p>
              Farmers who purchase day-old chicks (DOCs) from Engoko, brood the
              chicks for 30-45 days, and sell them to smallholder farmers in
              their local community. Agents receive extensive support from the
              Engoko team regarding technical management and marketing.
            </p>
          </Col>

          <Col
            md={6}
            data-aos="fade-left"
            className="p-4 bg-dark bg-opacity-50 rounded"
          >
            <h3>OUR SMALLHOLDER FARMERS</h3>
            <p>
              Farmers who buy brooded chickens from agents and rear SASSO to
              either sell or consume their eggs and meat. Males require 3 months
              to reach market weight, while females will begin laying within 5
              months.
            </p>
          </Col>
        </Row>

        <Button
          variant="light"
          className="mt-4 fw-bold"
          data-aos="zoom-in"
          onClick={handleShow}
        >
          Write to Us
        </Button>
      </Container>

      {/* Form Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>County</Form.Label>
              <Form.Select
                name="county"
                value={formData.county}
                onChange={handleChange}
                required
              >
                {counties.map((county, index) => (
                  <option key={index} value={county}>
                    {county}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Town</Form.Label>
              <Form.Control
                type="text"
                name="town"
                value={formData.town}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Interested To Be</Form.Label>
              <Form.Select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="Farmer">Farmer</option>
                <option value="Agent">Agent</option>
              </Form.Select>
            </Form.Group>

            <Button
              variant="dark"
              style={{ backgroundColor: "#890010", border: "none" }}
              className="w-100"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Status Modal */}
      <Modal
        show={showStatusModal}
        onHide={() => setShowStatusModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Submission Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{statusMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setShowStatusModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AgentFarmerBanner;
