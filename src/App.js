import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Products from "./components/Products";
import Team from "./components/Team";
import Blogs from "./components/Blogs";
import AdminOrders from "./components/Admin";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <CustomNavbar />
      {children}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <Layout>
              <AdminOrders />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
