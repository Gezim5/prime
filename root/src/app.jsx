import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from ".root/components/navbar";
import Footer from ".root/components/footer";
import Home from ".root/pages/home";
import About from ".root/pages/about";
import Products from ".root/pages/products";
import Contact from ".root/pages/contact";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="root/" element={<Home />} />
          <Route path="root/about" element={<About />} />
          <Route path="root/products" element={<Products />} />
          <Route path="root/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
