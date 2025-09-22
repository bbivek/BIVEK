import React, { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Research from "./components/Research.jsx";
import Outreach from "./components/Outreach.jsx";
// import Contact from "./components/Contact.jsx";
import SkillsAndAwards from "./components/SkillsAndAwards";
import { outreach } from "./data/portfolioData";
import "./styles/App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  // Parent container animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // delay between children
      },
    },
  };

  // Child animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="home-container">
      {/* Hero Section with Profile Picture */}
      <div className="hero-section">
        {/* First Image */}
        {/* <motion.img
          src="/bivek/bivek.jpg"
          alt="Profile"
          className="profile-picture first-picture"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        /> */}

        {/* Second Image */}
        <motion.img
          src="/bivek/IMG_0681.jpeg"
          alt="Profile 2"
          className="profile-picture second-picture"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="main-title" variants={item}>
            Bivek Bhusal
          </motion.h1>

          <motion.p className="subtitle" variants={item}>
            Ph.D. in Plant Science (Applied Remote Sensing and GIS) <br />
            University of Connecticut, USA
          </motion.p>

          {/* Contact Icons */}
          <motion.div className="contact-icons" variants={item}>
            <a
              href="https://www.linkedin.com/in/bivekbhusal/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="mailto:bivek.bhusal.iaas@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <About />

      {/* Education Section */}
      <Education />
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState("home"); // default to home

  const sections = {
    home: <Home />,
    about: <About />,
    education: <Education />,
    experience: <Experience />,
    research: <Research />,
    outreach: <Outreach outreach={outreach} />,
    "skills-awards": <SkillsAndAwards />,
    // contact: <Contact social={social} />,
  };

  return (
    <div className="app-container">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="main-content">
        {sections[activeSection] || <Home />}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bivek Bhusal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
