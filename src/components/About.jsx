
import React from "react";
import aboutImg from "../assets/about.png";

export const About = () => {
  return (
    <section id="about" className="container py-5" style={{ paddingTop: "100px", scrollMarginTop: "90px" }}>
      <div className="row align-items-center">
        {/* Left side image */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src={aboutImg}
            alt="About GRB Technologies"
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* Right side content */}
        <div className="col-lg-6 text-start">
          <h2 className="fw-bold mb-4 text-primary">About Us</h2>
          <p className="fs-5 lh-lg text-dark">
            <strong>GRB Technologies</strong> is a forward-thinking IT company
            specializing in
            <span className="text-primary"> Web Development</span>,
            <span className="text-primary"> Machine Learning solutions</span>,
            and <span className="text-primary"> Cloud Services</span>.
            Our mission is to deliver innovative and scalable solutions that
            empower businesses to grow.
          </p>
        </div>
      </div>
    </section>
  );
};
