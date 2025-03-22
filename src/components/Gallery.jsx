import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import "./Gallery.css";
import one from "./image/1.jpeg";
import two from "./image/2.jpeg";
import three from "./image/3.jpeg";
import four from "./image/4.jpeg";
import five from "./image/5.jpeg";
import six from "./image/6.jpeg";
import seven from "./image/7.jpeg";
import eight from "./image/8.jpeg";
import nine from "./image/9.jpeg";
import ten from "./image/10.jpeg";

const images = [one, two, three, four, five, six, seven, eight, nine, ten];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#890010" }}>
          Our Gallery
        </h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item" data-aos="zoom-in">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
