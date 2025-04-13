import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "./image/banner.webp";

const ImageBanner = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        marginBottom: "25px",
        cursor: "pointer",
        // borderRadius: "20px",
        overflow: "hidden",
      }}
      onClick={() => navigate("/about")}
    >
      {/* Background Image */}
      <img
        src={banner}
        alt="About Engoko"
        style={{
          width: "auto",
          height: "176PX",
          display: "block",
          overflowX: "hidden",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // semi-transparent overlay
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4
          style={{
            color: "#FFF",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
            margin: 0,
          }}
        >
          About the Company
        </h4>
      </div>
    </div>
  );
};

export default ImageBanner;
