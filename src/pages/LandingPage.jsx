// import About from "./About";
import Particles from "react-tsparticles";
import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import "../index.css";
import Socialicons from "../components/HomeSection/Socialicons";
import Profiles from "../components/Profiles/Profiles";

import About from "../components/HomeSection/About";
// import NextPageButton from "./NextPageButton"
const Introduction = () => {
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

  return (
    <div className="h-screen flex black justify-center items-center ">
      <Particles options={particlesConfigState} init={init} />
      {/* this div */}
      <div className="">
        <div className=" z-[-1] bg-cover bg-no-repeat bg-center">
          <About />
        </div>
        <div className="flex justify-center cursor-pointer">
          {showProfiles ? (
            <div className="">
              <Profiles />
            </div>
          ) : (
            <div className="items-center justify-center gap-10">
              <Socialicons />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        {/* <NextPageButton /> */}
      </div>
    </div>
  );
};

export default Introduction;
