import React from "react";
import ProjectsCard from "./ProjectsCard";
import {
  projectFour,
  college_pro,
  portfolio_pro,
  ML_Pro,
  ECommerce,
  ML_Harvesting,
  AgroMarket,
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
          title="Agro Market"
          des="Agro Market is online Web-Application where Farmer, Dealer and Shopkeeper can perform all Agriculter related trade on single platform"
          src={AgroMarket}
          link1="https://github.com/Pranay8841/Agromarket-Hub"
          link2="https://agromarket-hub.vercel.app/"
        />
        <ProjectsCard
          title="E-commerce Application"
          des="Introducing an e-commerce platform to facilitate online shopping. Tech stack used is HTML, CSS, Javascript, Flask & MongoDB database.This platform provides a comprehensive solution for users to browse, search, and purchase products conveniently from the comfort of their homes."
          src={ECommerce}
          link1="https://github.com/VKunjir/E-Commerce-Website-GSDS"
          link2="https://ecommerce-p0io.onrender.com/?user_id=6618cab6625f668b17f94633"
        />
        <ProjectsCard
          title="Optimizing-Harvesting-for-Maximum-Profit"
          des="This project aims to predict the best month for harvesting various agricultural goods such as vegetables, fruits, and flowers in order to maximize farmers' profits. By leveraging machine learning techniques, we can forecast the optimal time to harvest different crops, taking into account factors such as seasonal variations, market demand, and price fluctuations."
          src={ML_Harvesting}
          link1="https://github.com/VKunjir/Optimizing-Harvesting-for-Maximum-Profit"
          link2="https://github.com/VKunjir/Optimizing-Harvesting-for-Maximum-Profit"
        />
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
