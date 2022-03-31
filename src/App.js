import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import "./index.css";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
