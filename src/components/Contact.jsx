import React, { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState(""); // to show fake success/failure

  const sendEmail = (e) => {
    e.preventDefault();

    // Simulate sending email
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent successfully!"); // fake success message
      e.target.reset(); // reset form
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="container py-5"
      style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "50px 30px" }}
    >
      <h2 className="text-center fw-bold mb-5" style={{ color: "#0d6efd" }}>
        Contact Us
      </h2>
      <form onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "700px" }}>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control border-primary"
              id="name"
              placeholder="Your Name"
              required
              style={{ boxShadow: "0 2px 6px rgba(13,110,253,0.2)" }}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control border-primary"
              id="email"
              placeholder="Your Email"
              required
              style={{ boxShadow: "0 2px 6px rgba(13,110,253,0.2)" }}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-semibold">
            Message
          </label>
          <textarea
            className="form-control border-primary"
            id="message"
            rows="5"
            placeholder="Your Message"
            required
            style={{ boxShadow: "0 2px 6px rgba(13,110,253,0.2)" }}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary px-5"
            style={{
              backgroundColor: "#0d6efd",
              borderColor: "#0d6efd",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0d6efd")}
          >
            Send
          </button>
        </div>

        {status && (
          <p className="text-center mt-3 fw-semibold" style={{ color: "#0d6efd" }}>
            {status}
          </p>
        )}
      </form>

      <style>
        {`
          input:focus, textarea:focus {
            border-color: #0d6efd;
            box-shadow: 0 0 8px rgba(13,110,253,0.3);
            outline: none;
          }
          .form-label {
            color: #0d6efd;
          }
        `}
      </style>
    </section>
  );
};
