import { useEffect, useRef } from "react";
// import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import "./ProjectTile.css";
import reactjs from "../../../assets/tech/reactjs.png";
import javascript from "../../../assets/tech/javascript.png";
import typescript from "../../../assets/tech/typescript.png";
import html from "../../../assets/tech/html.png";
import nodejs from "../../../assets/tech/nodejs.png";
import mongodb from "../../../assets/tech/mongodb.png";
import git from "../../../assets/tech/git.png";
import figma from "../../../assets/tech/figma.png";
import docker from "../../../assets/tech/docker.png";
import redux from "../../../assets/tech/redux.png";
import tailwind from "../../../assets/tech/tailwind.png";
import css from "../../../assets/tech/css.png";
import axios from "../../../assets/tech/axios.svg";
import expressjs from "../../../assets/tech/expressjs.png";

const ProjectTile = ({ project, classes, isDesktop }) => {
  const techIcons = {
    reactjs: reactjs,
    javascript: javascript,
    typescript: typescript,
    html: html,
    nodejs: nodejs,
    mongodb: mongodb,
    git: git,
    figma: figma,
    docker: docker,
    redux: redux,
    css: css,
    axios: axios,
    expressjs: expressjs,
    tailwind: tailwind
    // Add more technology icons here
  };

  const { name, image, blurImage, description, gradient, url, tech } = project;
  const projectCard = useRef(null);
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    gyroscope: false
  };

  useEffect(() => {
    VanillaTilt.init(projectCard.current, options);
  }, [projectCard]);

  return (
    <a
      href={url}
      className={`overflow-hidden rounded-3xl ${additionalClasses} `}
      ref={projectCard}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)"
      }}
    >
      <div
        className={`h-[20rem] w-[30rem] bg-black ProjectTile rounded-3xl  relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`
        }}
      >
        <img
          src="/project-bg.svg"
          alt="project"
          className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
        />
        <img
          placeholder="blur"
          src={image}
          alt={name}
          className={`projectImage absolute top-0 rounded-xl shadow-xl fill z-0`}
        />
        <div
          className="absolute top-0 left-0 w-full h-20"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`
          }}
        ></div>
        <h1
          className="font-medium text-white-100  text-2xl mb-auto  sm:text-3xl z-10 pl-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>
        <div
          className={`
            techIcons w-1/2 h-full absolute left-10 top-0 sm:flex items-center 
          `}
        >
          <div className="flex flex-col pb-10">
            {project.tech.map((el, i) => (
              <img
                className={`${i % 2 === 0 && "ml-16"} `}
                src={techIcons[el]}
                alt={el}
                height={45}
                width={45}
                key={el}
              />
            ))}
          </div>
        </div>
        <h2
          className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {description}
        </h2>
      </div>
    </a>
  );
};

export default ProjectTile;
