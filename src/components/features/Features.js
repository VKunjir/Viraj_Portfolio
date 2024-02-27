import React from "react";
import Titles from "../layouts/Titles";
import Card from "./Card";
// import { AiFillAppstore } from "react-icons/ai";
import { FaReact, FaCode } from "react-icons/fa";
// import { FaMobile, FaGlobe } from "react-icons/fa";
// import { SiProgress, SiAntdesign } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
// import {BsCodeSlash} from "react-icons/bs"

function Features() {
  return (
    <section
      id="features"
      className="w-full px-20 py-20 border-b-[1px] border-b-black"
    >
      <Titles title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Problem Solver"
          des="I have solved 240+ DSA problem on Different Platform."
          icon={<FaCode />}
        />

        <Card
          title="MERN Stack Developer"
          des="I have build Art Gallery and Portfolio website using Html, CSS, Tailwind and MERN stack."
          icon={<FaReact />}
        />

        <Card
          title="ML Enthusiastic"
          des="I have keen interest in Machine Learning and I did completed ML course on INeuron Platform."
          icon={<FaComputer />}
        />

        {/* <Card
      title="Mobile Development"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<FaMobile/>}
      />
      
      <Card
      title="UX Design"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<SiAntdesign/>}
      />
      
      <Card
      title="Hosting Websites"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<FaGlobe/>}
      /> */}
      </div>
    </section>
  );
}

export default Features;
