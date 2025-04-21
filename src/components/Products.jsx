import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { db } from "./Database/Configuration";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CartHeader from "./CartHeader";
import oneday from "./image/oneday.jpeg";
import twoweeks from "./image/twoweeks.jpeg";
import onemonth from "./image/onemonth.jpeg";

const chicks = [
  {
    name: "Day Old Chicks",
    description: "A Box of 50 Healthy and vaccinated day-old chicks.",
    price: "KSh 5,000",
    image: oneday,
  },
  {
    name: "2 Weeks Old Chicks",
    description: "A Box of 50 Strong and growing chicks, ready for rearing.",
    price: "KSh 10,000",
    image: twoweeks,
  },
  {
    name: "1 Month Old Chicks",
    description: "A Box of 50 Well-fed and vaccinated 1-month-old chicks.",
    price: "KSh 25,000",
    image: onemonth,
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

        {/* Chicks Section */}
        <Row className="g-3">
          {chicks.map((product, index) => (
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
