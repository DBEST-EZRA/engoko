import React from "react";
// import heroImage from "./image/intropic.webp";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Video Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div
            className="ratio ratio-16x9 rounded-4 shadow"
            style={{ maxHeight: "500px", overflow: "hidden" }}
          >
            <iframe
              src="https://www.youtube.com/embed/XzzmZ_kGim4?autoplay=1&loop=1&mute=1&playlist=XzzmZ_kGim4"
              title="Intro Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            ></iframe>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-md-6 d-flex flex-column align-items-end text-md-end pe-md-5">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h3 style={{ color: "#890010" }} className="display-5 fw-bold mb-4">
              Mission
            </h3>
            <p>
              Engoko is focused on serving millions of smallholder farmers in
              rural communities by working with products that meet their unique
              requirements. Engoko is the distributor of high quality
              dual-purpose (improved Kienyeji) breeds:{" "}
              <span style={{ fontWeight: "bold" }}>
                "Sasso, Kuroilers, Rainbow Roosters" and Commercial Layers &
                Broilers,{" "}
              </span>{" "}
              and in doing so we aim to improve nutrition, enhance farmer
              livelihoods and create income opportunities for our agents and
              partners.
            </p>
            <h3 style={{ color: "#890010" }} className="display-5 fw-bold mb-4">
              Vision
            </h3>
            <p>Our vision is to achieve one chicken per Household by 2027 </p>
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
