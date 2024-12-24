import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          Mon Site
        </a>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${isOpen ? "navbar-menu-open" : ""}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Accueil
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              À propos
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
