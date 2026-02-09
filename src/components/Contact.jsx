import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          I’m currently open to new opportunities.
          Whether you have a question or want to collaborate, feel free to reach out.
          I’ll do my best to respond promptly.
        </p>
        <div className="contact-buttons">
          <a
            href="mailto:mdsameeransari847@gmail.com"
            className="contact-btn contact-btn-primary"
          >
            Email Me
          </a>
          <a
            href="https://github.com/SameerAnsari3002"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-secondary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/md-sameer-ansari-784733269/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;