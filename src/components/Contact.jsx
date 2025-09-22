import React from "react";
// import '../Styles/Contact.css';
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = ({ social }) => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-content">
        <p className="contact-text">
          I'm currently open to new opportunities. Let's connect!
        </p>
        <div className="social-links">
          <a
            href={`mailto:${social.email}`}
            className="social-link"
            title="Email"
          >
            <Mail className="social-icon" />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <Github className="social-icon" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <Linkedin className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
