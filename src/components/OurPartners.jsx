import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container } from "react-bootstrap";
import kingdom from "./image/kingdom.jpeg";
import unga from "./image/unga.png";

const OurPartners = () => {
  return (
    <Container
      style={{ backgroundColor: "#F3F3F3", width: "100vw" }}
      className="my-5"
    >
      <h2 className="text-center mb-4" style={{ color: "#890010" }}>
        Our Partners
      </h2>
      <Carousel
        indicators={false}
        controls={false}
        interval={2000}
        pause={false}
      >
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center text-center">
            <img src={kingdom} alt="Kingdom Bank" srcset="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center text-center">
            <img src={unga} alt="Unga Feeds" srcset="" />
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default OurPartners;
