import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-text">Abhishek</span>
          <span className="logo-dot">.</span>
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Tech Stack</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link contact-btn">Let's Talk</a>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Abhishek</span>
          </h1>
          <p className="hero-subtitle">
            Creative Developer & Designer building premium digital experiences.
          </p>
          <div className="hero-social-links">
            <a href="https://github.com/Abhishek789275" target="_blank" rel="noopener noreferrer" className="hero-social github-social">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="icon-white" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-madiwalar-655b2a263" target="_blank" rel="noopener noreferrer" className="hero-social linkedin-social">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
            </a>
          </div>
          <div className="hero-actions">
            <button className="primary-btn">Explore Work</button>
            <a href="/Abhishek_CV.pdf" download="Abhishek_CV.pdf" className="secondary-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              Download CV
            </a>
          </div>
        </div>
      </main>

      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="heading-line"></div>
          <h3 className="about-subtitle">I am a Full Stack Java Developer</h3>
          <p className="about-description">
            Motivated Computer Science student with a strong foundation in building responsive and data-driven web applications. Highly proficient in developing backend logic with Java, managing databases with MySQL, and designing user-friendly front-end interfaces using HTML and CSS. Passionate about writing clean code and eager to bring strong problem-solving skills to a collaborative software development team.
          </p>
        </div>

        <div className="about-visual">
          <div className="profile-visual-wrapper">
            <div className="scatter-icon icon-1"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" /></div>
            <div className="scatter-icon icon-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" /></div>
            <div className="scatter-icon icon-3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" /></div>
            <div className="scatter-icon icon-4"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" /></div>
            <div className="scatter-icon icon-5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" /></div>
            <div className="scatter-icon icon-6"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" /></div>
            <img src="/profile.jpeg" alt="Abhishek Profile" className="profile-circle" />
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-header">
          <h2>Tech Stack</h2>
          <div className="heading-line"></div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" /><span>HTML5</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" /><span>CSS3</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" /><span>JavaScript</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /><span>React</span></div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" /><span>Java</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" /><span>Spring Boot</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" alt="Hibernate" /><span>Hibernate</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="JDBC" /><span>JDBC</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="JSP" /><span>JSP</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" /><span>MySQL</span></div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Other</h3>
            <div className="skill-items">
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /><span>Git</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="icon-white" /><span>GitHub</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" /><span>VS Code</span></div>
              <div className="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" alt="Eclipse" /><span>Eclipse</span></div>
              <div className="skill-item">
                <svg className="generic-icon" viewBox="0 0 24 24" fill="none" stroke="#e50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                <span>Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-header">
          <h2>What I Do</h2>
          <div className="heading-line"></div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3>Web Development</h3>
            <p>Building robust, scalable, and high-performance web applications using modern full-stack technologies from backend logic to database management.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3>Frontend UI</h3>
            <p>Crafting intuitive and engaging user interfaces with precise attention to detail, ensuring seamless user experiences and modern aesthetics.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3>Responsive Design</h3>
            <p>Developing flexible and adaptable layouts that look stunning and function flawlessly across all devices, from desktop monitors to mobile phones.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <div className="heading-line"></div>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-content">
              <h3>Attendance and Event Monitoring System</h3>
              <p>A robust application designed to streamline attendance tracking and event management for college campuses. Simplifies administrative tasks by providing a reliable platform to monitor student attendance and organize upcoming collegiate events.</p>
              <div className="tech-stack">
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="tech-icon" /> Java</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" alt="Maven" className="tech-icon" /> Maven</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" /> JavaScript</span>
                <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="tech-icon" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="tech-icon" style={{marginRight: '6px', marginLeft: '-2px'}}/>
                  HTML/CSS
                </span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Abhishek789275/Attendance-and-Event-Monitoring-System-for-College-Students" target="_blank" rel="noopener noreferrer" className="github-link">
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3>Food Delivery Crave</h3>
              <p>A full-stack food delivery web application featuring user authentication, a catalog of 500+ food items, search and filtering capabilities, and a complete shopping cart and checkout experience.</p>
              <div className="tech-stack">
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="tech-icon" /> Spring Boot</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" alt="Hibernate" className="tech-icon" /> Hibernate</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="tech-icon" /> MySQL</span>
                <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="tech-icon" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" className="tech-icon" style={{marginRight: '6px', marginLeft: '-2px'}}/>
                  HTML/CSS/JS
                </span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Abhishek789275/Food-Delivery-Crave-" target="_blank" rel="noopener noreferrer" className="github-link">
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3>Arogya-Sahaya Local</h3>
              <p>An Android healthcare assistance application designed to help rural and elderly patients manage medicines, doctor appointment reminders, and healthcare follow-ups through a simple, user-friendly mobile interface.</p>
              <div className="tech-stack">
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="tech-icon" /> Kotlin</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" className="tech-icon" /> Android Studio</span>
                <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="tech-icon" /> Java</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Abhishek789275/Arogya_Sahaya_Local" target="_blank" rel="noopener noreferrer" className="github-link">
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Let's Connect</h2>
          <div className="heading-line centered"></div>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            {/* Replace YOUR_ACCESS_KEY_HERE with the access key from Web3Forms */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>

          <div className="social-links-footer">
            <p>Or connect with me on</p>
            <div className="social-icons-container">
              <a href="https://github.com/Abhishek789275" target="_blank" rel="noopener noreferrer" className="social-link github-social">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="icon-white" />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-madiwalar-655b2a263" target="_blank" rel="noopener noreferrer" className="social-link linkedin-social">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
