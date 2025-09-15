import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { db } from "./Database/Configuration";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CartHeader from "./CartHeader";
import "./Products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  ShoppingCart,
  Check,
  CheckCircle,
  BatteryCharging,
  Leaf,
  Wrench,
  ThermometerSun,
  Power,
} from "lucide-react";

// 🔥 Import your feature & gallery images
import feature1 from "./image/four.jpg";
import feature2 from "./image/five.jpg";
import feature3 from "./image/six.jpg";
import feature4 from "./image/eight.jpg";
import feature5 from "./image/nine.jpg";
import feature6 from "./image/ten.jpg";
import feature7 from "./image/eleven.jpg";
import feature8 from "./image/twelve.jpg";
import feature9 from "./image/thirteen.jpg";
import feature10 from "./image/fourteen.jpg";

import incubatorTop from "./image/one.jpg";
import incubatorBottom1 from "./image/two.jpg";
import incubatorBottom2 from "./image/three.jpg";

const Products = () => {
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState(new Set());
  const [loadingItems, setLoadingItems] = useState(new Set());

  const [isMobile, setIsMobile] = useState(false);
  const [addedButtons, setAddedButtons] = useState(new Set());

  const featureImages = [
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7,
    feature8,
    feature9,
    feature10,
  ];

  const incubatorOptions = [
    { name: "64 Eggs Incubator", price: "KSh 12,500" },
    { name: "128 Eggs Incubator", price: "KSh 16,999" },
    { name: "192 Eggs Incubator", price: "KSh 19,999" },
    { name: "256 Eggs Incubator", price: "KSh 25,000" },
    { name: "320 Eggs Incubator", price: "KSh 28,000" },
    { name: "528 Eggs Incubator", price: "KSh 49,999" },
    { name: "204 Eggs Incubator", price: "KSh 28,000" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576); // treat <576px as mobile
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  const handleAddToCart = async (product) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    if (cartItems.has(product.name) || loadingItems.has(product.name)) return;

    setLoadingItems((prev) => new Set([...prev, product.name]));

    const priceValue = parseInt(product.price.replace(/[^0-9]/g, ""), 10);

    try {
      await setDoc(doc(db, "cart", `${user.email}-${product.name}`), {
        userEmail: user.email,
        productName: product.name,
        description: product.description || "",
        price: priceValue,
      });

      setCartItems((prev) => new Set([...prev, product.name]));
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setLoadingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.name);
        return newSet;
      });
    }
  };

  const handleButtonClick = async (option) => {
    if (!user) {
      await handleAddToCart({
        name: option.name,
        description: "",
        price: option.price,
      });
      return;
    }

    await handleAddToCart({
      name: option.name,
      description: "",
      price: option.price,
    });

    setAddedButtons((prev) => new Set([...prev, option.name]));
  };

  return (
    <section className="py-1">
      <Container>
        <CartHeader />

        {/* 🔥 INCUBATOR GALLERY + TEXT SECTION */}
        <div className="my-5">
          <Row className="align-items-center">
            {/* LEFT: Image Grid */}
            <Col lg={6} className="mb-4">
              <div
                className="d-grid gap-2"
                style={{ gridTemplateRows: "auto auto" }}
              >
                <img
                  src={incubatorTop}
                  alt="Incubator Main"
                  className="w-100"
                  style={{
                    height: "auto",
                    maxHeight: "300px",
                    objectFit: "contain",
                    borderRadius: "12px",
                    background: "#f8f8f8",
                    padding: "8px",
                  }}
                />
                <div
                  className="d-grid gap-2"
                  style={{ gridTemplateColumns: "1fr 1fr" }}
                >
                  {[incubatorBottom1, incubatorBottom2].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Incubator ${i + 2}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "150px",
                        objectFit: "contain",
                        borderRadius: "12px",
                        background: "#f8f8f8",
                        padding: "6px",
                      }}
                    />
                  ))}
                </div>
              </div>
            </Col>

            {/* RIGHT: Text + Features */}
            <Col lg={6}>
              <h3 className="mb-3" style={{ color: "maroon" }}>
                SOLAR (DC) / ELECTRIC (AC) EGG INCUBATOR
              </h3>
              <p style={{ fontSize: "1rem", color: "#000", lineHeight: "1.6" }}>
                The perfect blend of advanced technology and sustainable energy,
                designed to give farmers and breeders consistent, high-quality
                hatch results. Equipped with a digital control panel, automatic
                turning, and strong insulation for maximum hatch success.
              </p>

              {/* Key Features */}
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="mb-2 d-flex align-items-center">
                  <ThermometerSun size={18} color="maroon" className="me-2" />
                  <span>Precise digital temperature & humidity control</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <CheckCircle size={18} color="maroon" className="me-2" />
                  <span>Automatic egg turning for uniform hatching</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <BatteryCharging size={18} color="maroon" className="me-2" />
                  <span>DC/AC Power + optional battery backup</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <Leaf size={18} color="maroon" className="me-2" />
                  <span>Eco-friendly design with solar compatibility</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <Wrench size={18} color="maroon" className="me-2" />
                  <span>Easy maintenance with removable components</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <Power size={18} color="maroon" className="me-2" />
                  <span>
                    Reliable 24/7 operation for sensitive hatching periods
                  </span>
                </li>
              </ul>

              {/* Incubator Type Buttons */}
              <div className="mt-4">
                <p style={{ fontWeight: "bold", color: "#000" }}>
                  Choose Incubator Type:
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {incubatorOptions.map((option, i) => {
                    const isAdded = addedButtons.has(option.name);

                    return (
                      <Button
                        key={i}
                        variant={isAdded ? "success" : "outline-dark"}
                        style={{
                          borderRadius: "30px",
                          borderColor: isAdded ? "green" : "maroon",
                          color: isAdded ? "white" : "maroon",
                          fontWeight: "500",
                          backgroundColor: isAdded ? "green" : "transparent",
                          transition: "0.3s ease-in-out",
                        }}
                        onClick={() => handleButtonClick(option)}
                        disabled={isAdded} // disable after adding to cart
                        onMouseEnter={(e) => {
                          if (!isAdded) {
                            e.target.style.backgroundColor = "maroon";
                            e.target.style.color = "white";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isAdded) {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "maroon";
                          }
                        }}
                      >
                        {isAdded ? (
                          <>
                            <Check size={16} className="me-1" /> Added to Cart
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={16} className="me-1" />{" "}
                            {option.name} - {option.price}
                          </>
                        )}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* 🔥 FEATURES SECTION */}
        <div className="my-5">
          <h4 className="text-center mb-4" style={{ color: "#000" }}>
            Features
          </h4>

          {isMobile ? (
            // 📱 MOBILE VIEW → just stack images vertically
            <div className="flex flex-col gap-3">
              {featureImages.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`Feature ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "auto", // let image keep its aspect ratio
                      borderRadius: "10px",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            // 💻 DESKTOP/TABLET VIEW → slider
            <Slider
              dots={false}
              infinite={true}
              speed={1000}
              slidesToShow={3} //
              slidesToScroll={3}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              arrows={false}
              responsive={[
                {
                  breakpoint: 992,
                  settings: { slidesToShow: 2, slidesToScroll: 2 },
                },
              ]}
            >
              {featureImages.map((img, i) => (
                <div key={i} className="p-2">
                  <img
                    src={img}
                    alt={`Feature ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </Container>

      {/* Login Modal */}
      <Modal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        centered
      >
        <Modal.Body className="text-center">
          <h5>Please Sign In</h5>
          <p>You need to sign in before adding products to your cart.</p>
          <Button variant="danger" onClick={() => setShowLoginModal(false)}>
            Close
          </Button>
        </Modal.Body>
      </Modal>

      {/* Simple CSS for auto-scrolling */}
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Products;
