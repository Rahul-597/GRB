import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white text-blue-900 pt-5 pb-4 border-top" style={{ borderColor: '#0d6efd' }}>
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: "#0d6efd" }}>GRB Technologies</h5>
            <p>We provide Web Solutions, Machine Learning & AI, Cloud Services, and innovative digital solutions to help your business grow.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white bg-primary p-2 rounded-circle"><FaFacebookF /></a>
              <a href="#" className="text-white bg-primary p-2 rounded-circle"><FaTwitter /></a>
              <a href="#" className="text-white bg-primary p-2 rounded-circle"><FaLinkedinIn /></a>
              <a href="#" className="text-white bg-primary p-2 rounded-circle"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: "#0d6efd" }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="#services" className="text-decoration-none text-dark">Services</a></li>
              <li><a href="#projects" className="text-decoration-none text-dark">Projects</a></li>
              <li><a href="#contact" className="text-decoration-none text-dark">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: "#0d6efd" }}>Our Services</h6>
            <ul className="list-unstyled">
              <li>Web Solutions</li>
              <li>Machine Learning & AI</li>
              <li>Cloud Services</li>
              <li>Mobile App Development</li>
              <li>Cybersecurity & Data Protection</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: "#0d6efd" }}>Contact Us</h6>
            <p>Email: info@grbtech.com</p>
            <p>Phone: +91 9052439683</p>
            <p>Address: 567 Tech Street, Noida, India</p>
          </div>
        </div>

        <hr style={{ borderColor: "#0d6efd" }} />

        <div className="text-center mt-3">
          <small>© {new Date().getFullYear()} GRB Technologies. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};
