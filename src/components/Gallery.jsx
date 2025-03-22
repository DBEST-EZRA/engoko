import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import "./Gallery.css";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
  "/images/gallery9.jpg",
  "/images/gallery10.jpg",
];

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
