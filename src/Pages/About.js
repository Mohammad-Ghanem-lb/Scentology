import React from "react";
import aboutImage from "../Assets/about.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function About() {
  return (
    <div className="about">
      {/* Hero section */}
      <section
        className="position-relative text-white"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "45vh",
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ background: "rgba(0,0,0,0.55)" }} 
        />
        <div className="container position-relative py-5 text-center">
          <h1 className="display-4 text-white fw-bold mb-2 about-hero-title">
            About Scentology
          </h1>
          <p className="lead text-white mb-0 about-hero-subtitle">
            Where the art of perfumery meets scientific perfection
          </p>
        </div>
      </section>

      {/* Content section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4 p-md-5">
                  <h2 className="h3 fw-bold text-dark mb-3">ABOUT US</h2>
                  <p className="mb-0 text-muted lh-lg">
                    Welcome to Scentology, where the art of perfumery meets scientific perfection. 
                    We believe that a fragrance is more than just a scent; it is a memory, an emotion, and a reflection of your unique personality. 
                    Our master perfumers carefully select the finest ingredients from around the world to craft luxurious, long-lasting fragrances that leave an unforgettable trail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;