import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const WhatsAppButton = () => {
  const phoneNumber = "254710831806"; // Remove '+' as WhatsApp API doesn't require it
  const message = encodeURIComponent("Hello Engoko, I need ...");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp size={30} color="white" />
    </a>
  );
};

export default WhatsAppButton;
