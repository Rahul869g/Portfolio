import React, { useEffect, useState } from "react";
import "./Icons.css";
import { motion } from "framer-motion";

const SocialIcon = ({ href, icon, label }) => {
  const isSpecialLink = label === "Download Resume" || label === "Contact Me"; // Check if it's the "Resume" or "Contact Me" link

  return (
    <motion.div
      className="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a
        href={href}
        rel="noopener noreferrer"
        target={isSpecialLink ? "_self" : "_blank"}
      >
        <motion.div
          className="icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <i className={icon}></i>
        </motion.div>
        <span>{label}</span>
      </a>
    </motion.div>
  );
};

const Socialicons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Delay of 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="icons">
      {isVisible && (
        <motion.div
          className="wrapper "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SocialIcon
            href="https://github.com/Rahul869g"
            icon="fab fa-github"
            label="Rahul869g"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/rahull-gupta/"
            icon="fab fa-linkedin"
            label="rahull-gupta"
          />
          <SocialIcon
            href="mailto:rahul916g@gmail.com"
            icon="fas fa-envelope"
            label="rahul916g@gmail.com"
          />
          <SocialIcon
            // href="/path/to/your/resume.pdf"
            href="/resume"
            icon="fas fa-file-download"
            label="Download Resume"
          />
          {/* <SocialIcon
            href="/contact"
            icon="fas fa-envelope-open-text"
            label="Contact Me"
          /> */}
        </motion.div>
      )}
    </div>
  );
};

export default Socialicons;
