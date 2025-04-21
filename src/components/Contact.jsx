import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2 style={{ color: "#890010" }}>Contact Us</h2>

        <p>
          <FaMapMarkerAlt style={{ color: "#FFA500", marginRight: "8px" }} />
          <strong>Location:</strong> Mwamotubi Plaza Opp Kisii Main Stage -
          Kisii
        </p>

        <p>
          <FaPhoneAlt style={{ color: "#FFA500", marginRight: "8px" }} />
          <strong>Phone:</strong> +254 710 831 806
        </p>

        <p>
          <FaEnvelope style={{ color: "#FFA500", marginRight: "8px" }} />
          <strong>Email:</strong> sales@engoko.com
        </p>

        <p>
          <FaClock style={{ color: "#FFA500", marginRight: "8px" }} />
          <strong>Business Hours:</strong> Monday - Saturday: 7:00 AM - 6:00 PM
        </p>
      </div>

      <div className="contact-map">
        <iframe
          title="Mwamotubi Plaza Opp Kisii Main Stage"
          src="https://www.google.com/maps?q=0°40'20.9S+34°46'25.3E&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
