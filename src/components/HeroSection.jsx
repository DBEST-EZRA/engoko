import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-section d-flex align-items-center text-center text-white">
      <Container>
        <h1 className="display-4 fw-bold">Welcome to ENGOKO</h1>
        <p className="lead">
          Fresh, quality chicken delivered straight to your door.
        </p>
        <Button className="hero-btn" href="/shop">
          Shop Now
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
