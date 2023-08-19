import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles.jsx";
import { navLinks } from "../constants/index.jsx";
import fplogo from "../../assets/fplogo.svg";
import { motion } from "framer-motion";

const NavbarForLP = () => {
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const closes = "/close.svg";
  const menu = "/menu.svg";
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        !navColour ? "sticky" : "navbar"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-end items-end max-w-7xl mx-auto md:ml-auto md:mr-32 my-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        ></Link>

        <ul className="list-none flex gap-8 sm:gap-10 md:gap-14 lg:gap-16 ">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -10, scale: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.02 }}
              whileHover={{ scale: 1.1, color: "primary" }} // Hover animation
              className={`${
                active === nav.title ? "text-secondary" : "text-secondary"
              }
               hover:font-semibold text-[18px]
              font-medium text-red cursor-pointer text-gradient`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`} className="">
                {nav.title}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* for mobile navigation bar */}
        <motion.div
          id="toggle-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${
            navColour ? "bg-primary" : "bg-transparent"
          } flex flex-1 justify-end  items-center `}
        >
          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-20 absolute top-20 right-0 mx-3 my-2 min-w-[140px] z-10 rounded-3xl bg-primary`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  }
                  font-poppins font-medium cursor-pointer text-[24px]
                  `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a className="" href={`${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default NavbarForLP;
