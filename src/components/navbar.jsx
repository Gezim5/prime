import React from "react";
import { Link } from "react-router-dom";
import logo from "root/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Prime Hairstyle" className="nav-logo" />
      <div className="nav-links">
        <Link to="/" className="nav-link">Startseite</Link>
        <Link to="/about" className="nav-link">Über Uns</Link>
        <Link to="/products" className="nav-link">Produkte</Link>
        <Link to="/contact" className="nav-link">Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
