import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaLightbulb, FaBullseye } from "react-icons/fa";

const OurValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const iconStyle = { color: "#890010" };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          Our Values
        </h2>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 shadow rounded-4 p-4">
              <div className="text-center mb-3">
                <FaUsers size={40} style={iconStyle} />
              </div>
              <h5 className="text-center fw-bold">
                The customer always comes first
              </h5>
              <p className="text-center">
                We put the customer at the center of our decisions and actions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100 shadow rounded-4 p-4">
              <div className="text-center mb-3">
                <FaBullseye size={40} style={iconStyle} />
              </div>
              <h5 className="text-center fw-bold">Our purpose drives us</h5>
              <p className="text-center">
                We are driven by a deep sense of purpose.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card h-100 shadow rounded-4 p-4">
              <div className="text-center mb-3">
                <FaLightbulb size={40} style={iconStyle} />
              </div>
              <h5 className="text-center fw-bold">Best ideas win</h5>
              <p className="text-center">
                We debate openly with vigour and allow the best idea to win.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
