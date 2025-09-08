import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { db } from "./Database/Configuration";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CartHeader from "./CartHeader";
import one from "./image/one.webp";
import two from "./image/two.webp";
import three from "./image/three.webp";
import four from "./image/four.webp";
import five from "./image/five.webp";
import six from "./image/six.webp";
import seven from "./image/seven.webp";
import eight from "./image/eight.webp";
import nine from "./image/nine.webp";
import ten from "./image/ten.webp";
import eleven from "./image/eleven.webp";
import twelve from "./image/twelve.webp";
import thirteen from "./image/thirteen.webp";
import fourteen from "./image/fourteen.webp";
import fifteen from "./image/fifteen.webp";
import mini1 from "./image/mini1.webp";
import mini2 from "./image/mini2.webp";
import mini3 from "./image/mini3.webp";
import mini4 from "./image/mini4.webp";
import www from "./image/www.webp";
import www1 from "./image/www1.webp";
import www9 from "./image/www9.webp";
import www2 from "./image/www2.webp";
import www3 from "./image/www3.webp";
import www4 from "./image/www4.webp";
import www5 from "./image/www5.webp";
import www6 from "./image/www6.webp";
import www7 from "./image/www7.webp";
import www8 from "./image/www8.webp";

const solar = [
  {
    name: "1056-Egg Automatic Incubator with 1-Year Warranty",
    description: "",
    price: "KSh 60,000",
    image: one,
  },
  {
    name: "128-Egg Fully Automatic Hatchery",
    description: "",
    price: "KSh 18,000",
    image: two,
  },
  {
    name: "Small Egg Incubator for Hatching Geese, Turkey, and Quail",
    description: "",
    price: "KSh 13,500",
    image: three,
  },
  {
    name: "300-Egg Automatic Incubator with Temperature & Humidity Control for Poultry Hatching",
    description: "",
    price: "KSh 52,000",
    image: four,
  },
  {
    name: "64-Egg Fully Automatic Hatchery (Imported)",
    description: "",
    price: "KSh 13,500",
    image: five,
  },
  {
    name: "64-Egg New Model Fully Automatic Hatchery",
    description: "",
    price: "KSh 13,500",
    image: six,
  },
  {
    name: "128-Egg Digital Incubator with Auto Egg Turning, Temp & Humidity Control for Poultry Hatching",
    description: "",
    price: "KSh 18,000",
    image: seven,
  },
  {
    name: "64-Egg Solar Chicken Incubator",
    description: "",
    price: "KSh 13,500",
    image: eight,
  },
  {
    name: "192-Egg Hatching Incubator with Automatic Controls & Setters",
    description: "",
    price: "KSh 24,000",
    image: nine,
  },
  {
    name: "Mini 128-Egg Automatic Incubator - New Design",
    description: "",
    price: "KSh 18,000",
    image: ten,
  },
  {
    name: "64-Egg Mini Incubator with 360° Automatic Egg Turning & Humidity Control",
    description: "",
    price: "KSh 13,500",
    image: eleven,
  },
  {
    name: "Intelligent Control Egg Incubator",
    description: "",
    price: "KSh 24,000",
    image: twelve,
  },
  {
    name: "128-Egg AC/DC Automatic Incubator",
    description: "",
    price: "KSh 18,000",
    image: thirteen,
  },
  {
    name: "300-Egg Industrial Incubator with Auto Turning & Climate Control for Poultry Hatching",
    description: "",
    price: "KSh 52,000",
    image: fourteen,
  },
  {
    name: "128-Egg Incubator with Automatic Turner & Temp Control for Poultry Hatching",
    description: "",
    price: "KSh 18,000",
    image: fifteen,
  },
];

const mini = [
  {
    name: "128-Egg Automatic Incubator with LED & Temperature Control",
    description: "",
    price: "KSh 18,000",
    image: mini1,
  },
  {
    name: "128-Egg Automatic Poultry Incubator for Farm Breeding & Hatching",
    description: "",
    price: "KSh 18,000",
    image: mini2,
  },
  {
    name: "128-Egg Incubator with Automatic Turning & Climate Control for Poultry Hatching",
    description: "",
    price: "KSh 18,000",
    image: mini3,
  },
  {
    name: "128-Egg Automatic Incubator with Temperature & Humidity Control for Poultry Hatching",
    description: "",
    price: "KSh 18,000",
    image: mini4,
  },
];

const commercial = [
  {
    name: "1056-Egg Automatic Incubator with 1-Year Warranty",
    description: "",
    price: "KSh 60,000",
    image: www,
  },
  {
    name: "2112-Egg Fully Automatic Incubator with Temperature Control for Poultry Hatching",
    description: "",
    price: "KSh 110,000",
    image: www1,
  },
  {
    name: "1056-Egg Fully Automatic Poultry Hatcher with Digital Controls for Hatching Chicken, Duck, Goose, and Quail",
    description: "",
    price: "KSh 60,000",
    image: www2,
  },
  {
    name: "528-Egg Intelligent Automatic Hatcher with Temp & Humidity Control for Poultry",
    description: "",
    price: "KSh 50,000",
    image: www3,
  },
  {
    name: "2112-Egg Poultry Incubator with Dual Humidity & Temp Control, Coal/Electric, Auto Turning",
    description: "",
    price: "KSh 110,000",
    image: www4,
  },
  {
    name: "1056-Egg Automatic Incubator with Temp Control & Auto Turning for Poultry Hatching",
    description: "",
    price: "KSh 60,000",
    image: www5,
  },
  {
    name: "1056-Egg Fully Automatic Poultry Incubator with Temperature Control for Hatching",
    description: "",
    price: "KSh 60,000",
    image: www6,
  },
  {
    name: "528-Egg Intelligent Automatic Hatcher with Temp & Humidity Control for Poultry",
    description: "",
    price: "KSh 50,000",
    image: www7,
  },
  {
    name: "2112-Egg Poultry Incubator with Dual Humidity & Temp Control, Coal/Electric, Auto Turning",
    description: "",
    price: "KSh 110,000",
    image: www8,
  },
  {
    name: "1056-Egg Fully Automatic Poultry Incubator with Temperature Control",
    description: "",
    price: "KSh 60,000",
    image: www9,
  },
];

const Products = () => {
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState(new Set());
  const [loadingItems, setLoadingItems] = useState(new Set());

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
    <section className="py-5">
      <Container>
        <CartHeader />
        <h2 className="text-center mb-4" style={{ color: "#890010" }}>
          Our Products
        </h2>

        <h4 className="text-center mb-4" style={{ color: "#000" }}>
          Mini Incubators
        </h4>

        {/* Mini Incubators Section */}
        <Row className="g-3">
          {mini.map((product, index) => (
            <Col lg={3} md={6} sm={6} xs={6} key={index}>
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Text>{product.name}</Card.Text>
                  {/* <Card.Text>{product.description}</Card.Text> */}
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
                  {/* <Card.Text>{product.description}</Card.Text> */}
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

        {/* Commercial Egg Incubators Section */}
        <br />
        <h4 className="text-center mb-4" style={{ color: "#000" }}>
          Commercial Egg Incubators
        </h4>
        <Row className="g-3">
          {commercial.map((product, index) => (
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
                  {/* <Card.Text>{product.description}</Card.Text> */}
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
    </section>
  );
};

export default Products;
