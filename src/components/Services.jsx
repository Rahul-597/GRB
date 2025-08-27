
import React from "react";
import { FaCloud, FaLaptopCode, FaRobot, FaMobileAlt, FaShieldAlt, FaLightbulb } from "react-icons/fa";

const services = [
  { name: "Web Solutions", icon: <FaLaptopCode size={40} /> },
  { name: "Machine Learning & AI", icon: <FaRobot size={40} /> },
  { name: "Cloud Services", icon: <FaCloud size={40} /> },
  { name: "Mobile App Development", icon: <FaMobileAlt size={40} /> },
  { name: "Cybersecurity & Data Protection", icon: <FaShieldAlt size={40} /> },
  { name: "Digital Transformation & Consulting", icon: <FaLightbulb size={40} /> },
];

export const Services = () => {
  return (
    <section id="services" className="container py-5" style={{ paddingTop: "100px", scrollMarginTop: "100px" }}>
      <h2 className="text-center fw-bold mb-5" style={{ color: "#0d6efd" }}>
        Our Services
      </h2>
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.name} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-lg text-center p-4 service-card">
              <div className="mb-3 text-primary">{service.icon}</div>
              <h5 className="fw-bold">{service.name}</h5>
              <p className="text-muted mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enhance your business with our solutions.
              </p>
              <button className="btn btn-outline-primary mt-3">Learn More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for hover effects */}
      <style>
        {`
          .service-card {
            transition: transform 0.3s, box-shadow 0.3s;
            border-radius: 15px;
          }
          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          }
          .service-card p {
            font-size: 0.9rem;
          }
        `}
      </style>
    </section>
  );
};
