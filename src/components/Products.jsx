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
    name: "Broilers",
    description: "Fast-growing, vaccinated, and ideal for meat production.",
    price: "KSh 105",
    image: one,
  },
  {
    name: "Improved Kienyeji",
    description: "Hardy and vaccinated, perfect for free-range rearing.",
    price: "KSh 115",
    image: two,
  },
  {
    name: "Layers",
    description: "Vaccinated and healthy, bred for excellent egg-laying.",
    price: "KSh 150",
    image: three,
  },
  {
    name: "Starter Feed 50KG",
    description: "50KG Starter feed for chicks",
    price: "KSh 4,100",
    image: four,
  },
  {
    name: "Broilers",
    description: "Fast-growing, vaccinated, and ideal for meat production.",
    price: "KSh 105",
    image: five,
  },
  {
    name: "Improved Kienyeji",
    description: "Hardy and vaccinated, perfect for free-range rearing.",
    price: "KSh 115",
    image: six,
  },
  {
    name: "Layers",
    description: "Vaccinated and healthy, bred for excellent egg-laying.",
    price: "KSh 150",
    image: seven,
  },
  {
    name: "Starter Feed 50KG",
    description: "50KG Starter feed for chicks",
    price: "KSh 4,100",
    image: eight,
  },
  {
    name: "Broilers",
    description: "Fast-growing, vaccinated, and ideal for meat production.",
    price: "KSh 105",
    image: nine,
  },
  {
    name: "Improved Kienyeji",
    description: "Hardy and vaccinated, perfect for free-range rearing.",
    price: "KSh 115",
    image: ten,
  },
  {
    name: "Layers",
    description: "Vaccinated and healthy, bred for excellent egg-laying.",
    price: "KSh 150",
    image: eleven,
  },
  {
    name: "Starter Feed 50KG",
    description: "50KG Starter feed for chicks",
    price: "KSh 4,100",
    image: twelve,
  },
  {
    name: "Broilers",
    description: "Fast-growing, vaccinated, and ideal for meat production.",
    price: "KSh 105",
    image: thirteen,
  },
  {
    name: "Improved Kienyeji",
    description: "Hardy and vaccinated, perfect for free-range rearing.",
    price: "KSh 115",
    image: fourteen,
  },
  {
    name: "Layers",
    description: "Vaccinated and healthy, bred for excellent egg-laying.",
    price: "KSh 150",
    image: fifteen,
  },
];

const mini = [
  {
    name: "One Month Old Chicks",
    description: "Vaccinated and thriving, ready for easy farm transition.",
    price: "KSh 300",
    image: mini1,
  },
  {
    name: "One Month Old Chicks",
    description: "Vaccinated and thriving, ready for easy farm transition.",
    price: "KSh 300",
    image: mini2,
  },
  {
    name: "One Month Old Chicks",
    description: "Vaccinated and thriving, ready for easy farm transition.",
    price: "KSh 300",
    image: mini3,
  },
  {
    name: "One Month Old Chicks",
    description: "Vaccinated and thriving, ready for easy farm transition.",
    price: "KSh 300",
    image: mini4,
  },
];

const commercial = [
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www1,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www2,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www3,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www4,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www5,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www6,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www7,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
    image: www8,
  },
  {
    name: "Two Months Old Chicks",
    description: "Well-raised, vaccinated, and close to full maturity.",
    price: "KSh 400",
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
            <Col lg={4} md={6} sm={6} xs={6} key={index}>
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
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
            <Col lg={4} md={6} sm={6} xs={6} key={index}>
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
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
            <Col lg={4} md={6} sm={6} xs={6} key={index}>
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
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
