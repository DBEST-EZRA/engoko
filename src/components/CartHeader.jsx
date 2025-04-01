import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaClipboardList,
  FaTrash,
} from "react-icons/fa";
import { auth, db, provider } from "./Database/Configuration";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { Button, Offcanvas, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartHeader.css";

const CartHeader = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        setDoc(
          doc(db, "users", user.uid),
          {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          { merge: true }
        );
      } else {
        setUser(null);
        sessionStorage.removeItem("user");
        setCartItems([]);
        setCartCount(0);
      }
    });

    return () => unsubscribe();
  }, []);

  // Real-time Cart Updates
  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, "cart"),
      where("userEmail", "==", user.email)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data(), quantity: 1 });
      });
      setCartItems(items);
      setCartCount(items.length);
    });

    return () => unsubscribe();
  }, [user]);

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item from Cart
  const removeItem = async (id) => {
    await deleteDoc(doc(db, "cart", id));
  };

  // Calculate Grand Total
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleGoogleSignIn = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="cart-header d-flex justify-content-end align-items-center gap-3 p-2">
      {/* User Profile */}
      <div className="text-center">
        {user ? (
          <>
            <img
              src={user.photoURL || "default-profile.png"}
              alt="Profile"
              className="user-profile-img"
              title={user.displayName}
            />
            <div className="small-text">{user.displayName}</div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <FaUser className="icon small-icon" title="Login" />
            <div
              className="small-text link-text"
              onClick={handleGoogleSignIn}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Login
            </div>
          </>
        )}
      </div>

      {/* Cart Icon */}
      <div className="text-center position-relative">
        <FaShoppingCart className="icon small-icon" title="Cart" />
        <Badge
          bg="danger"
          className="position-absolute top-0 start-100 translate-middle"
        >
          {cartCount}
        </Badge>
        <div
          className="small-text link-text"
          onClick={() => setShowCart(true)}
          style={{ cursor: "pointer", color: "blue" }}
        >
          Cart
        </div>
      </div>

      {/* Orders Icon */}
      <div className="text-center position-relative">
        <FaClipboardList className="icon small-icon" title="My Orders" />
        <Badge
          bg="danger"
          className="position-absolute top-0 start-100 translate-middle"
        >
          {orderCount}
        </Badge>
        <div className="small-text">Orders</div>
      </div>

      {/* Cart Drawer */}
      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <Card key={item.id} className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Title>{item.productName}</Card.Title>
                  {item.description && (
                    <Card.Text>{item.description}</Card.Text>
                  )}
                  <Card.Text>
                    <strong>Price:</strong> KSh {item.price.toLocaleString()}
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          )}

          {cartItems.length > 0 && (
            <div className="text-center mt-4">
              <h5>Grand Total: KSh {grandTotal.toLocaleString()}</h5>
              <Button
                style={{ backgroundColor: "#800020", borderColor: "#800020" }}
                className="w-100 mt-2"
              >
                Checkout
              </Button>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartHeader;
