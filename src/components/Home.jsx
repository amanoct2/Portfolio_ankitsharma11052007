import React, { useEffect, useState } from "react";
import Certificates from "./Certificates";
import "./Home.css";

const GREETING = "Hello, I'm";
const NAME = "Ankit Sharma";

const Home = () => {
  const [greetingText, setGreetingText] = useState("");
  const [nameText, setNameText] = useState("");
  const [phase, setPhase] = useState("greeting"); // 'greeting' | 'name' | 'done'

  // Typewriter logic — loops infinitely
  useEffect(() => {
    let timeout;

    if (phase === "greeting") {
      if (greetingText.length < GREETING.length) {
        timeout = setTimeout(() => {
          setGreetingText(GREETING.slice(0, greetingText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setPhase("name"), 400);
      }
    } else if (phase === "name") {
      if (nameText.length < NAME.length) {
        timeout = setTimeout(() => {
          setNameText(NAME.slice(0, nameText.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => setPhase("done"), 2000); // pause before reset
      }
    } else if (phase === "done") {
      // Reset and loop
      timeout = setTimeout(() => {
        setGreetingText("");
        setNameText("");
        setPhase("greeting");
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [phase, greetingText, nameText]);


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badgely/v1/badge.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-text">Ankit</span>
          <span className="logo-dot">.dev</span>
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Tech Stack
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link contact-btn">
            Let's Talk
          </a>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">
              {greetingText}
            </span>
            <span className="name">
              {nameText}
            </span>
          </h1>

          <p className="hero-subtitle">
            ASP.NET Developer | C# | SQL Server | Web API | GitHub | Docker |
            Power BI
          </p>
          <div className="hero-social-links">
            <a
              href="https://github.com/ankitsharma11052007"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social github-social"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="icon-white"
              />
            </a>
            <a
              href="https://in.linkedin.com/in/ankitsharma1105"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social linkedin-social"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="hero-actions">
            <button className="primary-btn">Explore Work</button>
            <a
              href="/Ankit_Resume_26.pdf"
              download="Ankit_Resume_26.pdf"
              className="secondary-btn"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </main>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="heading-line"></div>

          <h3 className="about-subtitle">ASP.NET Core Full Stack Developer</h3>

          <p className="about-description">
            Hi, I'm <strong>Ankit Sharma</strong>, a passionate B.Sc. IT student and
            <strong> Software Development Intern at IIFL</strong>. I specialize in building
            modern, scalable, and secure web applications using ASP.NET Core, C#, SQL Server,
            React.js, and MongoDB.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">💼</span>
              <div>
                <strong>Software Development Intern</strong>
                <p>
                  Interning at IIFL, developing RESTful APIs, database-driven applications, and API testing with Postman.
                </p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🎓</span>
              <div>
                <strong>B.Sc. Information Technology</strong>
                <p>
                  Pursuing IT degree, focusing on software development principles, architectures, and database design.
                </p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                  alt="Power BI"
                  style={{ width: "1em", height: "1em", display: "inline-block" }}
                />
              </span>
              <div>
                <strong>Data Analytics & Reporting</strong>
                <p>
                  Creating interactive dashboards and reporting layouts using Microsoft Power BI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="profile-visual-wrapper">

            {/* ── Orbit Icons around profile ── */}
            <div className="orbit-ring">
              <div className="orbit-icon" style={{ "--angle": "0deg" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
                <span className="orbit-label">C#</span>
              </div>
              <div className="orbit-icon" style={{ "--angle": "45deg" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET" />
                <span className="orbit-label">.NET</span>
              </div>
              <div className="orbit-icon" style={{ "--angle": "90deg" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                <span className="orbit-label">React</span>
              </div>
              <div className="orbit-icon" style={{ "--angle": "135deg" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" />
                <span className="orbit-label">JS</span>
              </div>
              <div className="orbit-icon" style={{ "--angle": "180deg" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL" />
                <span className="orbit-label">SQL</span>
              </div>
              <div className="orbit-icon" style={{ "--angle": "225deg" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
                <span className="orbit-label">HTML</span>
              </div>
              <div className="orbit-icon" style={{ "--angle": "270deg" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                <span className="orbit-label">CSS</span>
              </div>
              <div className="orbit-icon" style={{ "--angle": "315deg" }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
                <span className="orbit-label">Git</span>
              </div>
            </div>

            {/* ── Profile Image (center) ── */}
            <div className="profile-image-wrapper">
              <div className="profile-ripple ripple-1"></div>
              <div className="profile-ripple ripple-2"></div>
              <div className="profile-image-container">
                <img
                  src="/profile.jpeg"
                  alt="Ankit Sharma"
                  className="profile-circle"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="skills-section">
        <div className="skills-header">
          <h2>Tech Stack</h2>
          <div className="heading-line"></div>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category">
            <h3>Frontend</h3>

            <div className="skill-items">
              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML5"
                />
                <span>HTML5</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="CSS3"
                />
                <span>CSS3</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React"
                />
                <span>React.js</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <h3>Backend</h3>

            <div className="skill-items">
              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  alt="C#"
                />
                <span>C#</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                  alt=".NET Core"
                />
                <span>ASP.NET Core</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
                  alt="SQL Server"
                />
                <span>SQL Server</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
                <span>MongoDB</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  alt="NodeJS"
                />
                <span>Node.js</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  alt="Postman"
                />
                <span>Postman</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category">
            <h3>Tools & Technologies</h3>

            <div className="skill-items">
              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git"
                />
                <span>Git</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="GitHub"
                />
                <span>GitHub</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker"
                />
                <span>Docker</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  alt="VS Code"
                />
                <span>VS Code</span>
              </div>
              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
                  alt="Visual Studio 2022"
                />
                <span>Visual Studio 2022</span>
              </div>
              <div className="skill-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  alt="Postman"
                />
                <span>Postman</span>
              </div>

              <div className="skill-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                  alt="Power BI"
                />
                <span>Power BI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="services-section">
        <div className="services-header">
          <h2>What I Do</h2>
          <div className="heading-line"></div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⚙️</div>

            <h3>Backend Development</h3>

            <p>
              Building secure and scalable RESTful APIs using ASP.NET Core, C#,
              and SQL Server with clean architecture and best practices.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💻</div>

            <h3>Full Stack Development</h3>

            <p>
              Developing modern web applications using React.js, ASP.NET Core,
              and databases to deliver efficient business solutions.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔗</div>

            <h3>API Integration</h3>

            <p>
              Designing, testing, and integrating REST APIs using Postman while
              ensuring performance, security, and reliability.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                alt="Power BI"
                style={{ width: "1em", height: "1em", display: "inline-block" }}
              />
            </div>

            <h3>Power BI Reporting</h3>

            <p>
              Creating interactive dashboards and reports to transform raw
              business data into meaningful insights.
            </p>
          </div>
        </div>
      </section>

      {/* =================Yaha se code karna hai ================= */}
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <div className="heading-line"></div>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-content">
              <h3>Product Management System </h3>
              <p>
                This is a web-based Product Management System developed using
                ASP.NET MVC, ADO.NET, and SQL Server.
              </p>
              <div className="tech-stack">
                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                    alt="C#"
                    className="tech-icon"
                  />{" "}
                  C#
                </span>

                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
                    alt="SQL Server"
                    className="tech-icon"
                  />{" "}
                  SQL Server (SSMS)
                </span>

                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"
                    alt="Visual Studio 2022"
                    className="tech-icon"
                  />{" "}
                  Visual Studio 2022
                </span>
                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    alt="HTML"
                    className="tech-icon"
                    style={{ marginRight: "6px" }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    alt="CSS"
                    className="tech-icon"
                    style={{ marginRight: "6px" }}
                  />
                  HTML/CSS
                </span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/ankitsharma11052007/ASP.NET_MVC_5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3>Echo Chat - Real-time MERN Chat Application</h3>
              <p>
                Echo Chat is a modern, real-time chat application built using
                the MERN stack (MongoDB, Express, React, Node.js). It features
                real-time messaging, WebRTC video/audio calls, and an integrated
                Gemini AI assistant..
              </p>
              <div className="tech-stack">
                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React.js"
                    className="tech-icon"
                  />{" "}
                  React.js
                </span>

                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    className="tech-icon"
                  />{" "}
                  MongoDB
                </span>
                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                    className="tech-icon"
                  />{" "}
                  VS Code
                </span>
                {/* <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="tech-icon" /> Spring Boot</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" alt="Hibernate" className="tech-icon" /> Hibernate</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="tech-icon" /> MySQL</span> */}
                {/* <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="tech-icon" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" className="tech-icon" style={{ marginRight: '6px', marginLeft: '-2px' }} />
                  HTML/CSS/JS
                </span> */}
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/ankitsharma11052007/Echo-Chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3>Shopping Cart Project</h3>
              <p>
                A full-stack shopping cart application with Stripe integration
                for payments.
              </p>
              <div className="tech-stack">
                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React.js"
                    className="tech-icon"
                  />{" "}
                  React.js
                </span>

                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    className="tech-icon"
                  />{" "}
                  MongoDB
                </span>

                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt="Tailwind CSS"
                    className="tech-icon"
                  />{" "}
                  Tailwind CSS
                </span>

                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                    className="tech-icon"
                  />{" "}
                  VS Code
                </span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/ankitsharma11052007/Shopping-Cart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES SECTION ================= */}
      <Certificates />

      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Let's Connect</h2>
          <div className="heading-line centered"></div>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form"
          >
            <input
              type="hidden"
              name="access_key"
              value="dadf0067-c185-44d6-a9b4-6e941d7d575a"
            />

            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>

          <div className="social-links-footer">
            <p>Or connect with me on</p>

            <div className="social-icons-container">
              {/* GitHub */}
              <a
                href="https://github.com/ankitsharma11052007"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github-social"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="GitHub"
                  className="icon-white"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ankitsharma1105/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin-social"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:ankitsharma11052007@gmail.com"
                className="social-link email-social"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                  alt="Email"
                  className="icon-white"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918976518079"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link whatsapp-social"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="icon-white"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;
