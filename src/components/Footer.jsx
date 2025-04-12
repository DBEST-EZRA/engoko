import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#890010", fontFamily: "Segoe UI, sans-serif" }}
      className="text-white pt-5 pb-3 px-3"
    >
      <div className="container">
        <div className="row gy-4">
          {/* Logo and Description */}
          <div className="col-md-3">
            <h3 className="fw-bold text-white">Engoko</h3>
            <p className="small mb-0 text-white-50">
              Your trusted chicken supply store. Premium products you can rely
              on.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3" style={{ color: "#FFA500" }}>
              Quick Links
            </h6>
            <ul className="list-unstyled small">
              {["Shop", "About Us", "Contact", "FAQ"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-white text-decoration-none d-block py-1"
                    style={{ transition: "color 0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#FFA500")}
                    onMouseOut={(e) => (e.target.style.color = "white")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3" style={{ color: "#FFA500" }}>
              Customer Service
            </h6>
            <ul className="list-unstyled small">
              {[
                { label: "Shipping & Returns", link: "/shipping" },
                { label: "Privacy Policy", link: "/privacy" },
                { label: "Terms & Conditions", link: "/terms" },
              ].map(({ label, link }, i) => (
                <li key={i}>
                  <a
                    href={link}
                    className="text-white text-decoration-none d-block py-1"
                    style={{ transition: "color 0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#FFA500")}
                    onMouseOut={(e) => (e.target.style.color = "white")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3" style={{ color: "#FFA500" }}>
              Subscribe
            </h6>
            <p className="small mb-2 text-white-50">
              Get the latest updates and offers.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control form-control-sm border-0"
                placeholder="Your email"
                style={{ fontSize: "0.875rem" }}
              />
              <button
                className="btn btn-sm fw-bold"
                style={{
                  backgroundColor: "#FFA500",
                  color: "#000",
                  border: "none",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="text-center small mt-4 pt-3 border-top"
          style={{ borderColor: "#FFA500", color: "#FFA500" }}
        >
          &copy; {new Date().getFullYear()} Engoko Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
