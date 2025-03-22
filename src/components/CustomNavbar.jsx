import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#F3F3F3" }}
      variant="dark"
      className="py-3"
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="/">
          <img
            src={process.env.PUBLIC_URL + "/engoko.png"}
            alt="ENGOKO Logo"
            style={{ width: "70px", height: "70px", objectFit: "cover" }}
          />
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
          className="custom-toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              style={{ color: "#890010" }}
              className="mx-2 nav-hover"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/shop"
              style={{ color: "#890010" }}
              className="mx-2 nav-hover"
            >
              Products
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ color: "#890010" }}
              className="mx-2 nav-hover"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ color: "#890010" }}
              className="mx-2 nav-hover"
            >
              Our Team
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ color: "#890010" }}
              className="mx-2 nav-hover"
            >
              Blogs
            </Nav.Link>
            <Nav.Link
              href="/contact"
              style={{ color: "#890010" }}
              className="mx-2 nav-hover"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="/gallery"
              style={{ color: "#890010" }}
              className="mx-2 nav-hover"
            >
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

/* Add hover effect in CSS */
const style = document.createElement("style");
style.innerHTML = `
  .nav-hover:hover {
    color: #a50012 !important;
    transition: color 0.3s ease-in-out;
  }, 
 
`;
document.head.appendChild(style);
