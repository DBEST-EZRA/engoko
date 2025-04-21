import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#890010", fontFamily: "Segoe UI, sans-serif" }}
      className="text-white pt-5 pb-4"
    >
      <div className="container">
        <div className="row gy-4 align-items-start">
          {/* Logo and Description */}
          <div className="col-md-4">
            <h3 className="fw-bold text-white mb-2">Engoko</h3>
            <p className="text-white-50 small mb-0">
              Empowering Small Holder Farmers
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-md-5">
            <h6
              className="fw-semibold text-uppercase mb-3"
              style={{ color: "#FFA500" }}
            >
              Subscribe to our Newsletter
            </h6>
            <p className="text-white-50 small mb-3">
              Be the first to know about our latest deals and updates.
            </p>
            <form className="d-flex gap-2">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn btn-sm fw-bold"
                style={{ backgroundColor: "#FFA500", color: "#000" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="text-center small mt-5 pt-3 border-top"
          style={{ borderTopColor: "#FFA500", color: "#FFA500" }}
        >
          &copy; {new Date().getFullYear()} Engoko Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
