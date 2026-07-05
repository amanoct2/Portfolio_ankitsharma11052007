import React from "react";

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      image: "/Certificate-Hackathone.jpeg",
      title: "Build with AI Hackathon 26",
      issuer: "Divine Educational Solutions",
      date: "Jan 2026",
      description: "Successfully participated in the 4-hour Hackathon 2026."
    },
    {
      id: 2,
      image: "/Uti mutual fund certificate.jpeg",
      title: "UTI Mutual Fund Certification",
      issuer: "UTI Mutual Fund",
      date: "Dec 2025",
      description: "Successfully completed the UTI Mutual Fund Certification."
    },
    {
      id: 3,
      image: "/Generative ai certificate.jpeg",
      title: "Generative AI Certification",
      issuer: "AI Learning Platform",
      date: "May 2026",
      description: "Successfully completed the Generative AI Certification."
    },
    {
      id: 4,
      image: "/internship certificate.jpeg",
      title: "Software Development Internship",
      issuer: "IIFL",
      date: "Nov 3, 2025 - Jan 30, 2026",
      description: "Successfully completed a 3-month internship working extensively on .NET and SQL Server."
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-header">
        <h2>My Certificates</h2>
        <div className="heading-line"></div>
      </div>

      <div className="certificates-grid">
        {certificatesData.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <div className="certificate-image-wrapper">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
              <p className="certificate-desc">{cert.description}</p>
              <div className="certificate-actions">
                <a href={cert.image} download className="cert-download-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
