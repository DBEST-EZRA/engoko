import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Card } from "react-bootstrap";
import one from "./image/tester1.jpg";
import two from "./image/tester2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Through the sale of the Eggs, I have been able to support my children's education and My family eats and sell eggs every day. I will encourage every household to keep Sasso birds to support their livelihood. I know my life will be transformed through this business.",
      name: "John Mokaya",
      location: "Farmer",
      image: one,
    },
    {
      quote:
        "Sasso Birds can be kept semi-intensive. They grow faster than other birds and produce quality meat and eggs for consumption and for sale. They are easy to manage, and I will recommend raising Sasso to every household in Kenya.",
      name: "Otieno SM",
      location: "Farmer",
      image: two,
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: "#890010" }}>
        Testimonials
      </h2>
      <Carousel
        indicators={false}
        controls={false}
        interval={5000}
        pause={false}
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Card
              className="mx-auto p-4 shadow-lg text-center"
              style={{ maxWidth: "600px", borderRadius: "20px" }}
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src={testimonial.image}
                  alt="farmer"
                  className="mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #FFA500",
                  }}
                />
                <h5 className="fw-bold" style={{ color: "#FFA500" }}>
                  {testimonial.name}
                </h5>
                <p className="text-muted">{testimonial.location}</p>
                <p className="fst-italic text-dark">"{testimonial.quote}"</p>
              </div>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
