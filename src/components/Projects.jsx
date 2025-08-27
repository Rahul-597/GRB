import Image1 from '../assets/img1.png'
import Image2 from '../assets/img2.png'
import Image3 from '../assets/img3.png'
import Image4 from '../assets/img4.png'
import Image5 from '../assets/img5.png'

const projects = [
  {
    title: "AI-Powered Therapy Chatbot – DrEllis.ai",
    description:
      "Provides emotional support and therapy sessions for individuals with PTSD and depression.",
    client: "Pierre Cote",
    tech: ["Custom AI Model", "NLP", "Therapeutic Materials"],
    image: `${Image1}`,
    caseStudyLink:
      "https://www.reuters.com/lifestyle/it-saved-my-life-people-turning-ai-therapy-2025-08-23/",
  },
  {
    title: "AI-Aided Voice Bot for Customer Service – KSEB",
    description:
      "Enhances customer service by automating complaint registration and categorization.",
    client: "KSEB",
    tech: ["AI Voice Bot", "Speech Recognition", "CRM Integration"],
     image: `${Image2}`,
    caseStudyLink:
      "https://timesofindia.indiatimes.com/city/thiruvananthapuram/kseb-plans-ai-aided-voice-bot-for-customer-service/articleshow/123527942.cms",
  },
  {
    title: "Cloud Migration for Healthcare – Deloitte & Academic Hospital",
    description:
      "Migrated from mainframe to cloud to improve patient care and streamline operations.",
    client: "Large Academic Hospital",
    tech: ["AWS", "Azure", "Cloud Infrastructure"],
     image: `${Image3}`,
    caseStudyLink:
      "https://www.deloitte.com/us/en/what-we-do/capabilities/cloud-transformation/case-studies/health-care-cloud-migration-case-study.html",
  },
  {
    title: "Real-Time Microservices with Node.js – Rising Odegua",
    description: "Scaled microservices to handle millions of real-time users.",
    client: "Rising Odegua",
    tech: ["Node.js", "Microservices Architecture", "Real-Time Processing"],
    image: `${Image4}`,
    caseStudyLink:
      "https://blog.risingstack.com/nodejs-microservices-scaling-case-study/",
  },
  {
    title: "AI Chatbot for Customer Engagement – Waiver Group",
    description:
      "Automates lead generation and customer engagement processes.",
    client: "Waiver Group",
    tech: ["AI Chatbot", "Lead Generation", "Customer Engagement"],
     image: `${Image5}`,
    caseStudyLink: "https://botpress.com/blog/ai-agent-case-study",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center fw-bold mb-5" style={{ color: "#0d6efd" }}>
        Real Client Projects
      </h2>
      <div className="row g-4">
        {projects.map((proj, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-lg project-card">
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="card-img-top"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
              )}
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{proj.title}</h5>
                <p className="text-muted">{proj.description}</p>
                <p className="text-primary fw-semibold">{proj.client}</p>
                <div className="mt-2">
                  {proj.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="badge bg-primary me-1 mb-1"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.caseStudyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-3"
                >
                  View Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .project-card {
            border-radius: 10px;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </section>
  );
};
