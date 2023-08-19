import LINK_SHARING_APP from "../../assets/images/link-sharing-app.png";
import SPACE_TOURISM_WEBSITE from "../../assets/images/space-tourism-website.png";
import Project from "./ProjectContainer";

const ProjectSection = () => {
  return (
    <section className="bg-[rgb(22,0,56)] h-auto">
      <div className="text-center">
        <h1 className="text-white text-3xl font-black mx-0">My Projects</h1>
        <p className="text-white w-[600] text-xl font-light block m-auto md:text-left">
          I have used the following frameworks/libraries fro my projects; React,
          Redux, SASS, bootstrap and MUI
        </p>
      </div>
      {/* PROJECT CONTAINER */}
      <div className="block w-[300px] m-auto">
        <a
          className="block overflow-hidden w-[300px] h-60 rounded-[15px]"
          target="_blank"
          href="https://links-sharing-app.web.app/"
        >
          <img
            className="object-contain w-[300px] transition-all duration-[0.2s] ease-[ease-in] hover:scale-[1.2]"
            src={LINK_SHARING_APP}
          />
        </a>
        <p className="text-white text-center text-xl">Link Sharing App</p>
      </div>

      <Project
        href="https://links-sharing-app.web.app/"
        src={SPACE_TOURISM_WEBSITE}
        projectTitle="SPACE TOURSIMS WEBSITE"
      />
      <Project
        href="https://links-sharing-app.web.app/"
        src={SPACE_TOURISM_WEBSITE}
        projectTitle="SPACE TOURSIMS WEBSITE"
      />
      <Project
        href="https://links-sharing-app.web.app/"
        src={SPACE_TOURISM_WEBSITE}
        projectTitle="SPACE TOURSIMS WEBSITE"
      />
      <Project
        href="https://links-sharing-app.web.app/"
        src={SPACE_TOURISM_WEBSITE}
        projectTitle="SPACE TOURSIMS WEBSITE"
      />
      <Project
        href="https://links-sharing-app.web.app/"
        src={SPACE_TOURISM_WEBSITE}
        projectTitle="SPACE TOURSIMS WEBSITE"
      />
    </section>
  );
  // return (
  //   <section className="bg-[rgb(22,0,56)] grid grid-cols-[repeat(3,300px)] justify-center content-center gap-10 w-full min-h-screen md:grid-cols-[300px] lg:grid-cols-[repeat(3,300px)] lg:h-auto lg:py-[50px] lg:px-0">
  //     <div className="col-[1/4] text-center md:col-[1/2] lg:col-[1/3]">
  //       <h1 className="text-white text-5xl font-black my-10 mx-0 md:text-3xl">
  //         My Projects
  //       </h1>
  //       <p className="text-white w-[600]text-xl font-light block m-auto md:text-left md:text-lg md:w-[300px]">
  //         I have used the following frameworks/libraries fro my projects; React,
  //         Redux, SASS, bootstrap and MUI
  //       </p>
  //     </div>
  //     {/* PROJECT CONTAINER */}
  //     <div className="block w-[300px] m-auto">
  //       <a
  //         className="block overflow-hidden w-[300px] h-60 rounded-[15px]"
  //         target="_blank"
  //         href="https://links-sharing-app.web.app/"
  //       >
  //         <img
  //           className="object-contain w-[300px] transition-all duration-[0.2s] ease-[ease-in] hover:scale-[1.2]"
  //           src={LINK_SHARING_APP}
  //         />
  //       </a>
  //       <p className="text-white text-center text-xl">Link Sharing App</p>
  //     </div>
  //     <Project
  //       href="https://links-sharing-app.web.app/"
  //       src={SPACE_TOURISM_WEBSITE}
  //       projectTitle="SPACE TOURSIMS WEBSITE"
  //     />
  //     <Project
  //       href="https://links-sharing-app.web.app/"
  //       src={SPACE_TOURISM_WEBSITE}
  //       projectTitle="SPACE TOURSIMS WEBSITE"
  //     />
  //     <Project
  //       href="https://links-sharing-app.web.app/"
  //       src={SPACE_TOURISM_WEBSITE}
  //       projectTitle="SPACE TOURSIMS WEBSITE"
  //     />
  //     <Project
  //       href="https://links-sharing-app.web.app/"
  //       src={SPACE_TOURISM_WEBSITE}
  //       projectTitle="SPACE TOURSIMS WEBSITE"
  //     />
  //     <Project
  //       href="https://links-sharing-app.web.app/"
  //       src={SPACE_TOURISM_WEBSITE}
  //       projectTitle="SPACE TOURSIMS WEBSITE"
  //     />
  //   </section>
  // );
};

export default ProjectSection;
