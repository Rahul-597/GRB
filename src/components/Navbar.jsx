import React from "react";
import companyLogo from "../assets/company_logo.png"; // adjust path if needed

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top"
      style={{
        background: "linear-gradient(90deg, #ffffff, #0d6efd)", // white → blue
        minHeight: "85px", // slightly taller navbar
      }}
    >
      <div className="container">
        {/* Logo */}
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-4"
          href="#"
        >
          <img
            src={companyLogo}
            alt="GRB Technologies Logo"
            height="55"
            className="me-2"
          />

        </a>

        {/* Toggler button */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <a className="nav-link text-white fw-semibold fs-5" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-white fw-semibold fs-5"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-white fw-semibold fs-5"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-white fw-semibold fs-5"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
