import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const educationData = [
    {
      title: "Ph.D., Plant Science",
      institution: "University of Connecticut, CT, USA",
      date: "2019 - 2025",
      details:
        "Concentration: Remote sensing of biotic and abiotic stress in vegetation",
      color: "blue",
    },
    {
      title: "B.Sc. Agriculture",
      institution:
        "Tribhuvan University, Institute of Agriculture and Animal Science, Nepal",
      date: "2017",
      details: [
        "Thesis: Comparison of Interpolation techniques for mapping soil fertility parameters",
      ],
      color: "green",
    },
  ];

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

  // Child item animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/bivek/bivek.jpg" alt="Profile" className="profile-picture" />

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
            University of Connecticut, USA
            <br /> Ph.D. in Plant Science (Applied Remote Sensing and GIS)
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
