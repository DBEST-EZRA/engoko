import React from "react";
import heroImage from "./image/intropic.webp";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={heroImage}
            alt="Intro"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 d-flex flex-column align-items-end text-md-end pe-md-5">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h1 className="display-5 fw-bold mb-4">
              Empowering Households Through Poultry
            </h1>
            <p>
              At Engoko Ltd, we want to ensure each household has 5 chickens. We
              believe this small step can make a big difference in improving
              nutrition, increasing household income, and empowering communities
              to become more self-reliant. By supporting sustainable poultry
              farming, we aim to build a future where every family has access to
              quality food, economic opportunity, and a better quality of life.
            </p>
            <Link
              to="/about"
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
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
