import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        {/* Logo Text */}
        <Link className="navbar-brand fw-bold fs-3" to="/" style={{ letterSpacing: '2px' }}>
          SCENTOLOGY
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-uppercase fw-semibold fs-6" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase fw-semibold fs-6" to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase fw-semibold fs-6" to="/quiz">Discover</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase fw-semibold fs-6" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase fw-semibold fs-6" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;