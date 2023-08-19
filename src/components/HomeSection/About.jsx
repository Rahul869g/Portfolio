import React, { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { styles } from "../../styles.jsx";
import { motion } from "framer-motion";

const About = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [
    "Front-End Development",
    "Data Structures",
    "Back-End Developement",
    "Problem Solving",
    "Team Collaboration",
    "Open Source Contributions"
  ];
  const typingSpeed = 100;
  const deletingSpeed = 70;
  const pauseTime = 1000;

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        handleTyping();
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting]);

  const handleTyping = () => {
    const currentWord = words[wordIndex];
    const currentLetter = currentWord[letterIndex];

    if (isDeleting) {
      if (letterIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        setLetterIndex((prevIndex) => prevIndex - 1);
      }
    } else {
      if (letterIndex === currentWord.length - 1) {
        setIsDeleting(true);
      }
      setLetterIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentWord = words[wordIndex];
  const displayText = currentWord.substring(0, letterIndex);
  return (
    <div className="flex flex-col mt-[-10rem] sm:mt-5 md:mt-[-5rem] lg:mt-[-15rem] justify-center items-center h-full">
      <br></br>
      <motion.div
        initial={{
          scale: 0
        }}
        whileInView={{
          scale: [0, 1.2, 1]
        }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 0
        }}
        viewport={{ once: true }}
        className="z-20 flex flex-col space-y-4"
      >
        <div className="relative w-full max-w-screen-lg mx-auto px-4">
          <br />
          <motion.p
            className={`font-bold text-white-100 mt-[-60px] text-2xl lg:text-5xl text-center mb-4 ${styles.sectionHeadText}`}
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div>
              <h5 className="flex flex-col font-medium text-gradient font-mono text-lg">
                Hi, my name is
              </h5>
              <h1 className="heroName">
                <span className=" text-white emphasize ">Rahul</span>
                <span> Gupta</span>
              </h1>
            </div>
          </motion.p>
          <motion.div
            className="text-[#807d90] font-medium text-lg lg:text-2xl text-center mb-8 "
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            I'm into
          </motion.div>
          <motion.h2
            className="text-secondary text-xl sm:text-4xl lg:text-5xl text-center mb-8 h-[40px] font-mono leading-relaxed "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {displayText}
          </motion.h2>
        </div>
        <br></br>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
