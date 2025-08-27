import React from "react";
import { FaProjectDiagram, FaUsers, FaSmile } from "react-icons/fa";

import companyA from "../assets/comA.png"; 
import companyB from "../assets/comB.png"; 
import companyC from "../assets/comC.png"; 
import companyD from "../assets/comD.png"; 
import companyE from "../assets/comE.png"; 
import companyF from "../assets/comF.png"; 
import companyG from "../assets/comG.png"; 
import companyH from "../assets/comH.png"; 

export const ClientsStats = () => {
  return (
    <section
      id="clients-stats"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e9f2ff)",
      }}
    >
      <div className="container text-center">
        {/* Section Title */}
        <h2 className="fw-bold mb-4" style={{ color: "#0d6efd" }}>
          Our Clients & Achievements
        </h2>

        {/* Partner Logos */}
        <div className="row justify-content-center mb-5">
          {[companyA, companyB, companyC, companyD, companyE, companyF, companyG, companyH].map((logo, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="img-fluid"
                style={{ height:"110px" }}
              />
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded-3 h-100">
              <FaProjectDiagram size={40} className="mb-3 text-primary" />
              <h3 className="fw-bold">10+</h3>
              <p className="text-muted">Projects Completed</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded-3 h-100">
              <FaUsers size={40} className="mb-3 text-success" />
              <h3 className="fw-bold">20+</h3>
              <p className="text-muted">Happy Clients</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded-3 h-100">
              <FaSmile size={40} className="mb-3 text-warning" />
              <h3 className="fw-bold">98%</h3>
              <p className="text-muted">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
