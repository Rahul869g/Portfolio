import linkSharingApp from "../../assets/projects/links-sharing-app.png";
import spaceTourismWebsite from "../../assets/projects/space-tourizm.web.png";
import morningstarz from "../../assets/projects/morningstarz.png";
import SwiggyClone from "../../assets/projects/SwiggyClone.png";
export const navLinks = [
  {
    id: "/",
    title: "Home"
  },
  {
    id: "about",
    title: "About"
  },
  // {
  //   id: "skills",
  //   title: "Skills"
  // },
  {
    id: "projects",
    title: "Projects"
  },

  {
    id: "contact",
    title: "Contact"
  }
];

export const PROJECTS = [
  {
    name: "Mornigstar",
    image: morningstarz,
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Employee Management System using MERN Stack + Tailwind CSS 🛏️",
    gradient: ["#b135a1", "#ca4fe0  "],
    url: "https://morningstarz.web.app/",
    tech: [
      "reactjs",
      "javascript",
      "nodejs",
      "tailwind",
      "git",
      "axios",
      "mongodb",
      "expressjs"
    ]
  },
  {
    name: "Link Sharing",
    image: linkSharingApp,
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Get All Your Links at one place ✍🏻",
    gradient: ["#d46e3c", "#eac771"],
    url: "https://links-sharing-app.web.app/",
    tech: [
      "javascript",
      "reactjs",
      "expressjs",
      "axios",
      "git",
      "tailwind",
      "mongodb",
      "nodejs"
    ]
  },
  {
    name: "Space Travel",
    image: spaceTourismWebsite,
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Landing Page for Space Tourism - A challenge by Frontend Mentor 🎙",
    gradient: ["#44469d", "#4debfd"],
    url: "https://space-tourizm.web.app/",
    tech: ["reactjs", "css", "tailwind", "javascript", "git"]
  },
  {
    name: "Swiggy Clone",
    image: SwiggyClone,
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Clone Of Swiggy Web App (Web UI)🏎️",
    gradient: ["#d14195", "#faa7d0"],
    url: "https://foood-fire.web.app/",
    tech: ["reactjs", "redux", "javascript", "tailwind", "git", "css"]
  }
];
