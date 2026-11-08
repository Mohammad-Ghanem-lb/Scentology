import React from "react";
import { Link } from "react-router-dom";
import homeBg from "../Assets/images.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home() {
  return (
    <div
      className="home d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      {/* المربع الشفاف النصي */}
      <div 
        className="p-5 rounded-3 shadow-lg"
        style={{ 
          backgroundColor: "rgba(0, 0, 0, 0.55)", 
          backdropFilter: "blur(4px)",
          maxWidth: "700px"
        }}
      >
        <h1 className="display-3 fw-bold mb-3 text-uppercase text-white">
          SCENTOLOGY
        </h1>
        <p className="fs-5 mb-4 text-uppercase tracking-wider text-white">
          LUXURY FRAGRANCES TO MATCH YOUR SOUL
        </p>
        <Link to="/catalog" className="btn btn-light btn-lg px-4 fw-semibold text-dark">
          Discover More
        </Link>
      </div>
    </div>
  );
}

export default Home;