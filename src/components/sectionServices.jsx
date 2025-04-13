import React from "react";
import heroImage from "./image/lower.webp";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaUserMd } from "react-icons/fa";

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
            <h1 className="display-5 fw-bold mb-4">Why Choose Us</h1>
            <h4 className="d-flex align-items-center gap-2">
              <FaCheckCircle style={{ color: "#FFA500" }} /> Best Quality
            </h4>
            <p>
              We place a strong emphasis on quality. We strive to provide
              customers with the highest standard of poultry products and
              services.
            </p>
            <h4 className="d-flex align-items-center gap-2 mt-4">
              <FaUserMd style={{ color: "#FFA500" }} /> Technical Assistance
            </h4>
            <p>
              We provide various on-site technical assistance (area sales
              managers and district sales representatives) through our
              veterinary-trained professionals to our customers.
            </p>

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
              Explore
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
