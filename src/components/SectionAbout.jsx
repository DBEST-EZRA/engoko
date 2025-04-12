import React from "react";
import heroImage from "./image/intropic.webp";

const IntroSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div
          className="col-md-6 mb-4 mb-md-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={heroImage}
            alt="Intro"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
        </div>

        {/* Text Section */}
        <div
          className="col-md-6 d-flex flex-column align-items-end text-md-end pe-md-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h1 className="display-5 fw-bold mb-4">
              Empowering Households Through Poultry
            </h1>
            <p className="">
              At Engoko Ltd We want to ensure each household has 5 chicken. We
              believe this small step can make a big difference in improving
              nutrition, increasing household income, and empowering communities
              to become more self-reliant. By supporting sustainable poultry
              farming, we aim to build a future where every family has access to
              quality food, economic opportunity, and a better quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
