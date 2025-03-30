import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaClipboardList,
  FaGoogle,
} from "react-icons/fa";
import { auth, db, provider } from "./Database/Configuration";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartHeader.css";

const CartHeader = () => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
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
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      setShowModal(false); // Close modal on successful login
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="cart-header d-flex justify-content-end align-items-center gap-3 p-2">
      {/* Login Icon & Modal */}
      <div className="text-center">
        <FaUser
          className="icon small-icon"
          onClick={() => setShowModal(true)}
          title="Login"
        />
        <div className="small-text">{user ? user.displayName : "Login"}</div>
      </div>

      {/* Cart Icon with Counter */}
      <div className="text-center position-relative">
        <FaShoppingCart className="icon small-icon" title="Cart" />
        <span className="counter badge bg-danger">{cartCount}</span>
        <div className="small-text">Cart</div>
      </div>

      {/* My Orders Icon with Counter */}
      <div className="text-center position-relative">
        <FaClipboardList className="icon small-icon" title="My Orders" />
        <span className="counter badge bg-danger">{orderCount}</span>
        <div className="small-text">My Orders</div>
      </div>

      {/* Bootstrap Modal for Google Login */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content p-3"
              style={{ border: "2px solid burgundy", borderRadius: "10px" }}
            >
              <div className="modal-header border-0">
                <h5 className="modal-title">Sign in</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <button
                  className="btn btn-danger d-flex align-items-center justify-content-center gap-2 w-100"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                >
                  <FaGoogle />{" "}
                  {loading ? "Signing in..." : "Sign in with Google"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartHeader;
