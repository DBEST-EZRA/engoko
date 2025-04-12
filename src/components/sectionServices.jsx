import React from "react";
import heroImage from "./image/intropic.webp";
import { Link } from "react-router-dom"; // Needed if you're using React Router

const ServiceSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div
          className="col-md-6 d-flex flex-column align-items-start text-md-start pe-md-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h1 className="display-5 fw-bold mb-4">Our Poultry Breeds</h1>
            <p>
              At Engoko Ltd, we offer a variety of high-quality chicken breeds
              tailored for both meat and egg production. Whether you're a
              smallholder or a commercial farmer, our birds are selected for
              their resilience, productivity, and adaptability to local
              conditions.
            </p>

            {/* Fancy List with Custom Orange Bullets */}
            <ul className="list-unstyled mt-3 mb-4">
              {[
                "Kuroiler",
                "Rainbow Rooster",
                "Sasso",
                "Improved Kienyeji",
                "Kenbro",
              ].map((item, index) => (
                <li key={index} className="d-flex align-items-start mb-2">
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      border: "2px solid #FFA500",
                      borderRadius: "50%",
                      marginTop: "6px",
                      marginRight: "10px",
                      flexShrink: 0,
                    }}
                  ></span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>

            {/* Shop Now Button */}
            <Link
              to="/shop"
              className="btn"
              style={{
                backgroundColor: "#FFA500",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="col-md-6 mb-4 mb-md-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={heroImage}
            alt="Intro"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
