import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
// import styles from "./Cursor.module.scss";

const Cursor = ({ isDesktop }) => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      const moveCircle = (e) => {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: Linear.easeNone
        });
        gsap.to(follower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: Linear.easeNone
        });
      };

      const hover = () => {
        gsap.to(cursor.current, {
          scale: 0.5,
          duration: 0.3
        });
        gsap.to(follower.current, {
          scale: 3,
          duration: 0.3
        });
      };

      const unHover = () => {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3
        });
        gsap.to(follower.current, {
          scale: 1,
          duration: 0.3
        });
      };

      document.addEventListener("mousemove", moveCircle);

      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });

      document.addEventListener("mousedown", hover);
      document.addEventListener("mouseup", unHover);
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className={`mix-blend-difference rounded-[100%] bg-[#A132B3] hidden z-50`}
        style={{
          position: "fixed",
          width: 16,
          height: 16,
          userSelect: "none",
          zIndex: 500000,
          pointerEvents: "none"
        }}
      ></div>
      <div
        ref={follower}
        className={`left-[-0.8rem] top-[-0.8rem] border translate-x-[5px] translate-y-[5px] rounded-[100%] border-solid border-[rgba(#ffffff,0.2)] hidden bg-[rgba(#ffffff, 0.027)] z-50`}
        style={{
          position: "fixed",
          width: 40,
          height: 40,
          userSelect: "none",
          zIndex: 500000,
          pointerEvents: "none"
        }}
      ></div>
    </>
  );
};

export default Cursor;
