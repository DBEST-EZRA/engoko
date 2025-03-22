import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          backgroundColor: "#890010",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          fontSize: "14px",
        }}
      >
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

      {/* Navbar */}
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#F3F3F3" }}
        variant="dark"
        className="py-3 custom-navbar"
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
              {[
                { name: "Home", link: "/" },
                { name: "Products", link: "/shop" },
                { name: "About Us", link: "/about" },
                { name: "Our Team", link: "/team" },
                { name: "Blogs", link: "/blogs" },
                { name: "Contact", link: "/contact" },
                { name: "Gallery", link: "/gallery" },
              ].map((item, index) => (
                <Nav.Link
                  key={index}
                  href={item.link}
                  className="mx-2 nav-hover"
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
