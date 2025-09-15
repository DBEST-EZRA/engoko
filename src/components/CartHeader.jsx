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
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { Button, Offcanvas, Card, Badge, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartHeader.css";

const CartHeader = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCheckedOutOrders, setShowCheckedOutOrders] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [checkedOutOrderCount, setCheckedOutOrderCount] = useState(0);

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

  ///////////////////////
  const [showCheckout, setShowCheckout] = useState(false);

  const [checkoutDetails, setCheckoutDetails] = useState({
    fullName: "",
    email: user?.email?.trim() || "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setCheckoutDetails({ ...checkoutDetails, [e.target.name]: e.target.value });
  };

  // Handle Checkout
  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!cartItems.length) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        userId: user ? user.uid : null,
        userEmail: user?.email?.trim() || "",
        customerDetails: checkoutDetails,
        items: cartItems,
        totalAmount: grandTotal,
        status: "Pending",
        createdAt: new Date(),
      };

      await addDoc(collection(db, "orders"), orderData);
      alert("Order placed successfully!");
      setShowCheckout(false);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }

    setLoading(false);
  };

  // Fetch Orders for Logged-in User
  const fetchCheckedOutOrders = async () => {
    if (!user) return;

    try {
      const ordersRef = collection(db, "orders");
      const q = query(ordersRef, where("userEmail", "==", user.email));
      const querySnapshot = await getDocs(q);

      const fetchedOrders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrderList(fetchedOrders);
      setCheckedOutOrderCount(fetchedOrders.length);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleShowCheckedOutOrders = () => {
    fetchCheckedOutOrders();
    setShowCheckedOutOrders(true);
  };

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
    <div
      className="cart-header d-flex justify-content-end align-items-center gap-3 p-1 shadow-sm"
      style={{
        backgroundColor: "#fff",
        minHeight: "60px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* User Profile */}
      <div className="d-flex align-items-center gap-2">
        {user ? (
          <>
            <img
              src={user.photoURL || "default-profile.png"}
              alt="Profile"
              className="rounded-circle"
              style={{
                width: "32px",
                height: "32px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              title={user.displayName}
            />
            <span className="small fw-semibold">{user.displayName}</span>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <FaUser
              className="icon"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
              title="Login"
              onClick={handleGoogleSignIn}
            />
            <span
              className="small text-primary"
              style={{ cursor: "pointer" }}
              onClick={handleGoogleSignIn}
            >
              Login
            </span>
          </>
        )}
      </div>

      {/* Cart Icon */}
      <div
        className="d-flex align-items-center position-relative"
        style={{ cursor: "pointer" }}
        onClick={() => setShowCart(true)}
      >
        <FaShoppingCart style={{ fontSize: "1.3rem" }} />
        {cartCount > 0 && (
          <Badge
            bg="danger"
            pill
            className="position-absolute top-0 start-100 translate-middle"
            style={{ fontSize: "0.65rem" }}
          >
            {cartCount}
          </Badge>
        )}
        <span className="small ms-1">Cart</span>
      </div>

      {/* Orders Icon */}
      <div
        className="d-flex align-items-center position-relative"
        style={{ cursor: "pointer" }}
        onClick={handleShowCheckedOutOrders}
      >
        <FaClipboardList style={{ fontSize: "1.3rem" }} />
        {checkedOutOrderCount > 0 && (
          <Badge
            bg="danger"
            pill
            className="position-absolute top-0 start-100 translate-middle"
            style={{ fontSize: "0.65rem" }}
          >
            {checkedOutOrderCount}
          </Badge>
        )}
        <span className="small ms-1">Orders</span>
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
                className="w-100 mt-2"
                style={{ backgroundColor: "#800020", borderColor: "#800020" }}
                onClick={() => setShowCheckout(true)}
              >
                Checkout
              </Button>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Checkout Modal */}
      <Modal show={showCheckout} onHide={() => setShowCheckout(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCheckout}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Do not fill(auto fills)"
                required
                value={checkoutDetails.email}
                onChange={handleChange}
                disabled={user}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                required
                placeholder="E.g Kisii Town next to Central Police"
                onChange={handleChange}
              />
            </Form.Group>
            <h5 className="text-center mt-3">
              Grand Total: KSh {grandTotal.toLocaleString()}
            </h5>
            <Button
              type="submit"
              className="w-100 mt-3"
              disabled={loading}
              style={{
                backgroundColor: "#800020",
                borderColor: "#800020",
                color: "white",
              }}
            >
              {loading ? "Processing..." : "Confirm Order"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Orders Modal */}
      <Modal
        show={showCheckedOutOrders}
        onHide={() => setShowCheckedOutOrders(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>My Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {orderList.length === 0 ? (
            <p className="text-center">No checked-out orders found.</p>
          ) : (
            orderList.map((order) =>
              order.items.map((item, index) => (
                <Card key={index} className="mb-3">
                  <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text>
                      <strong>Quantity:</strong> {item.quantity} <br />
                      <strong>Description:</strong> {item.description} <br />
                      <strong>Amount:</strong> KSh {item.price * item.quantity}{" "}
                      <br />
                      <strong>Status:</strong> {order.status}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            )
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#800020",
              borderColor: "#800020",
              color: "white",
            }}
            onClick={() => setShowCheckedOutOrders(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartHeader;
