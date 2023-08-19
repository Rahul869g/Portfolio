import React, { useState, useEffect } from "react";
import { Container, Button, Grid } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import pdf from "../../assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function ResumeNew() {
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
      <Container
        maxWidth="xl"
        className="resume-section scrollbar-none"
        style={{
          minHeight: window.innerHeight - 10
        }}
      >
        <motion.div
          className="download-button flex justify-center"
          initial={{ opacity: 0, x: -100 }}
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
          initial={{ opacity: 0, y: 100 }}
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
