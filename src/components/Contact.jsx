import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>
          <strong>Location:</strong> Mashauri, Kisii Town, Kenya
        </p>
        <p>
          <strong>Phone:</strong> +254 710 831 806
        </p>
        <p>
          <strong>Email:</strong> info@engoko.com
        </p>
        <p>
          <strong>Business Hours:</strong> Monday - Saturday: 7:00 AM - 6:00 PM
        </p>
      </div>

      <div className="contact-map">
        <iframe
          title="Mashauri, Kisii Town"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63834.81769883113!2d34.7488!3d-0.6812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285f55a0b5b1ad%3A0x81eaf58b3b0ed82e!2sMashauri%2C%20Kisii!5e0!3m2!1sen!2ske!4v1711038567890!5m2!1sen!2ske"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
