import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { db } from "./Database/Configuration";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CartHeader from "./CartHeader";
import one from "./image/one.jpg";
import "./Products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

const solar = [
  {
    name: "64 Eggs Incubator",
    description: "",
    price: "KSh 12,500",
    image: one,
  },
  {
    name: "128 Eggs Incubator",
    description: "",
    price: "KSh 16,999",
    image: one,
  },
  {
    name: "192 Eggs Incubator",
    description: "",
    price: "KSh 19,999",
    image: one,
  },
];

const Products = () => {
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState(new Set());
  const [loadingItems, setLoadingItems] = useState(new Set());

  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section className="py-1">
      <Container>
        <CartHeader />

        {/* Solar Egg Incubators Section */}
        <br />
        <h4 className="text-center mb-4" style={{ color: "#000" }}>
          Solar Egg Incubators
        </h4>
        <Row className="g-3">
          {solar.map((product, index) => (
            <Col lg={2} md={6} sm={6} xs={6} key={index}>
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Text>{product.name}</Card.Text>
                  <Card.Text className="mt-auto mb-3">
                    <strong>{product.price}</strong>
                  </Card.Text>
                  <Button
                    variant={
                      cartItems.has(product.name) ? "outline-danger" : "danger"
                    }
                    style={
                      cartItems.has(product.name)
                        ? { color: "#890010", borderColor: "#890010" }
                        : {}
                    }
                    onClick={() => handleAddToCart(product)}
                    disabled={
                      cartItems.has(product.name) ||
                      loadingItems.has(product.name)
                    }
                  >
                    {loadingItems.has(product.name)
                      ? "Adding..."
                      : cartItems.has(product.name)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

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
                      height: "auto", // ✅ no cropping, image keeps original ratio
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

        {/* 🔥 INCUBATOR GALLERY + TEXT SECTION */}
        <div className="my-5">
          <Row className="align-items-center">
            {/* Left: 3-image grid layout */}
            <Col lg={6} className="mb-3">
              <div
                className="d-grid gap-2"
                style={{ gridTemplateRows: "1fr 1fr" }}
              >
                <img
                  src={incubatorTop}
                  alt="Incubator 1"
                  className="w-100 mb-2"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div
                  className="d-grid gap-2"
                  style={{ gridTemplateColumns: "1fr 1fr" }}
                >
                  <img
                    src={incubatorBottom1}
                    alt="Incubator 2"
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <img
                    src={incubatorBottom2}
                    alt="Incubator 3"
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Col>

            {/* Right: Text section */}
            <Col lg={6}>
              <h4 className="mb-3">Why Choose Our Incubators</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                {/* Add your detailed description here */}
                Our incubators are designed with precision to give you the
                highest hatch rate. Add your custom description here to explain
                the features, benefits, and why customers should choose your
                products.
              </p>
            </Col>
          </Row>
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
