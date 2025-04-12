const SlidingPromo = () => {
  const promoText = `
      Day-old, week-old & month-old chicks available • 
      Pay on delivery – no risk! • 
      Reliable supply all year round • 
      Hatch success? We’ve got incubators! • 
      Fast delivery across Kenya • 
      Order now & grow your poultry business!
    `;

  return (
    <div
      style={{
        backgroundColor: "#FFA500",
        color: "#fff",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontFamily: "Segoe UI, sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
      }}
      className="py-2"
    >
      <div
        style={{
          display: "flex",
          animation: "scroll-left 16s linear infinite",
        }}
      >
        <span className="me-5">{promoText}</span>
        <span className="me-5">{promoText}</span>
      </div>

      <style>
        {`
            @keyframes scroll-left {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
      </style>
    </div>
  );
};

export default SlidingPromo;
