import React from "react";
import ProjectsCard from "./ProjectsCard";
import {
  projectFour,
  college_pro,
  portfolio_pro,
  ML_Pro,
} from "../../assets/index";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px border-b-black]"
    >
      <div className="flex justify-center items-center text-center"></div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard
          title="Online Art Gallery"
          des="I have developed Online Art Gallery System in MERN stack with my friends where we can Buy or Sell different arts."
          src={projectFour}
          link1="https://github.com/VKunjir/Art-Gallery"
          link2="https://art-gallery-frontend-seven.vercel.app/home/1"
        />
        <ProjectsCard
          title="Personal Portfolio WEebsite"
          des="I had developed my own Portfolio website using React and Tailwind."
          src={portfolio_pro}
          link1="https://github.com/VKunjir/Viraj_Portfolio"
          link2="https://vkunjir.github.io/Viraj_Portfolio/"
        />
        <ProjectsCard
          title="College Reviewing Website"
          des="This website help student to see different review about various college."
          src={college_pro}
          link1="https://github.com/VKunjir/College-Rating-Website"
        />
        <ProjectsCard
          title="Student Performance Indicator"
          des="This project help user to calculate student performance in upcoming test based on different parameter."
          src={ML_Pro}
          link1="https://github.com/VKunjir/ML_Project"
        />
      </div>
    </section>
  );
}

export default Projects;
