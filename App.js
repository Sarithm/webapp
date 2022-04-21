import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import Mobile from "./Mobile";
import Consulting from "./Consulting";
import Development from "./Development";
import Infrastructure from "./Infrastructure";
import Learn from "./Learn";
import Company from "./Company";
import About from "./About";
import Contactus from "./Contactus";
import Footer from "./Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/development" element={<Development />} />
        <Route path="/infra" element={<Infrastructure />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/company" element={<Company />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
