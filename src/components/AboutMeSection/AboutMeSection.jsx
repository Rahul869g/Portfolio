import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = ({ clientHeight }) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 }
    });

    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1
      });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline
    });
  }, [quoteRef, targetSection]);

  return (
    <section
      className="w-full relative select-none  flex justify-center items-center"
      ref={targetSection}
    >
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container w-[80%] sm:w-[85%] md:w-[88%] lg:w-[90%]`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.40rem] md:text-6xl lg:text-[4rem] text-center"
        >
          <span className="about-1 leading-tight about-3">
            I&apos;m a passionate Engineer who&apos;s focused on building
            scalable and performant apps.{" "}
          </span>
          <span className="about-2 leading-tight about-3">
            I take responsibility to craft a good user experience using modern
            frontend architecture.{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About;