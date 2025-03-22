import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Engoko provides the best quality chicks. My farm has grown tremendously!",
      name: "John Mwangi",
      location: "Nairobi, Kenya",
      image: "/images/customer1.jpg",
    },
    {
      quote: "The birds are strong, disease-resistant, and highly productive.",
      name: "Aisha Mohammed",
      location: "Mombasa, Kenya",
      image: "/images/customer2.jpg",
    },
    {
      quote:
        "Engoko has transformed my poultry business with their high-quality birds!",
      name: "Samuel Otieno",
      location: "Kisumu, Kenya",
      image: "/images/customer3.jpg",
    },
    {
      quote: "I highly recommend Engoko to any farmer looking to scale up!",
      name: "Grace Wanjiru",
      location: "Eldoret, Kenya",
      image: "/images/customer4.jpg",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: "#890010" }}>
        What Our Customers Say
      </h2>
      <Carousel
        indicators={false}
        controls={false}
        interval={3000}
        pause={false}
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <p className="fst-italic">"{testimonial.quote}"</p>
              <h5 className="fw-bold">{testimonial.name}</h5>
              <p className="text-muted">{testimonial.location}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
