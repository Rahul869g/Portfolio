import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cursor from "./components/Cursor";
import ProgressIndicator from "./components/ProgressIndicator/ProgressIndicator";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./components/Resume/ResumeNew";
import NavbarForLP from "./components/Navbar/NavbarForLP";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import Projects from "./components/Projects/Projects";
import ContactMeSection from "./components/ContactMeSection/ContactMeSection";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
  const [isDesktop, setIsDesktop] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;
    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
  }, [isDesktop]);

  return (
    <div className="bg-black">
      <ProgressIndicator />
      <Cursor isDesktop={isDesktop} />

      <div className="">
        <NavbarForLP />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {location.pathname !== "/resume" && (
          <>
            <section className="">
              <AboutMeSection clientHeight={clientHeight} />
            </section>
            <section className="">
              <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
            </section>
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
