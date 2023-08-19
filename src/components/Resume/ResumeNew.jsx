import React, { useState, useEffect, useCallback } from "react";
import { Container, Button, Grid } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { gsap } from "gsap";
import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import pdf from "../../assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function ResumeNew() {
  useEffect(() => {
    setParticlesConfigState({
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 1100
          }
        },
        color: {
          value: "#000"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 3,
            color: "#FF99FF"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#3d5a80",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 70,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }, []);
  const [particlesConfigState, setParticlesConfigState] = useState({});
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });
  const [showProfiles, setShowProfiles] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setShowProfiles(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".resume", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".resume-section",
        start: "top 60%",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <div>
      <Particles options={particlesConfigState} init={init} />

      <Container
        maxWidth="xl"
        className="resume-section scrollbar-none"
        style={{
          minHeight: window.innerHeight - 10
        }}
      >
        <motion.div
          className="download-button flex justify-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="contained"
            color="primary"
            href={pdf}
            target="_blank"
            startIcon={<AiOutlineDownload />}
            style={{ marginBottom: "20px" }}
          >
            Download CV
          </Button>
        </motion.div>

        <motion.div
          className="resume flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.8 : 0.6} />
          </Document>
        </motion.div>

        <motion.div
          className="download-button flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="contained"
            color="primary"
            href={pdf}
            target="_blank"
            startIcon={<AiOutlineDownload />}
            style={{ marginTop: "20px" }}
          >
            Download CV
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}

export default ResumeNew;
