import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
// import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const messages = ["Payment on Delivery", "Order Now"];

const CustomNavbar = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          backgroundColor: "#890010",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>
          <a
            href="https://www.tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <FaTiktok size={20} />
          </a>

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
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {messages[currentMessageIndex]}
        </div>
      </div>

      {/* <Navbar
        expand="lg"
        style={{ backgroundColor: "#F3F3F3" }}
        variant="dark"
        className="py-3 custom-navbar"
      > */}
      {/* <Container> */}
      {/* <Navbar.Brand href="/">
            <img
              src={process.env.PUBLIC_URL + "/engoko.png"}
              alt="ENGOKO Logo"
              style={{ width: "70px", height: "70px", objectFit: "cover" }}
            />
          </Navbar.Brand> */}

      {/* Mobile Toggle Button */}
      {/* <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ border: "none" }}
            className="custom-toggler"
          /> */}

      {/* <Navbar.Collapse id="basic-navbar-nav">
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
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                  }}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse> */}
      {/* </Container>
      </Navbar> */}
    </>
  );
};

export default CustomNavbar;
