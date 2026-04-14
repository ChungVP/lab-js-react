import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import NestedRoutes from "./components/NestedRoutes";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Settings from "./components/Settings";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        {/* Cau03 */}
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        {/* Cau04 */}
        <Route path="/dashboard" element={<NestedRoutes />}>
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* Cau05 */}
        <Route path="/checkout" element={<Checkout />}></Route>

        {/* Notfound */}
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
