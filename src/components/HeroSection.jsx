
import React from "react";
import heroImage from "../assets/hero_logo.png"; // replace with your image

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh", // full screen
        paddingTop: "80px", // offset for fixed navbar
        background: "linear-gradient(135deg, #ffffff 40%, #0d6efd 100%)", // white → blue gradient
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold display-4">
              <span style={{ color: "#0d6efd" }}>Welcome to </span>
              <span style={{ color: "#0d6efd" }}>GRB Technologies</span>
            </h1>
            <p className="lead text-dark mt-3">
              Empowering businesses with{" "}
              <b>Web Solutions, Machine Learning,</b> and <b>Cloud Services.</b>
            </p>

            <div className="mt-4">
              <a href="#contact" className="btn btn-primary btn-lg me-3 shadow">
                Contact Us
              </a>
              <a
                href="#services"
                className="btn btn-outline-primary btn-lg shadow"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="img-fluid"
              style={{
                maxHeight: "600px", // scales better
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
