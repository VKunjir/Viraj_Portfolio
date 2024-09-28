import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiNextdotjs } from "react-icons/si";

function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Professional coder.",
      "Full Stack Developer.",
      "ML Enthusiast.",
      "Problem Solver",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className=" text-6xl font-bold text-white">
          Hi, I'm
          <span className=" text-designColor capitalize "> Viraj Kunjir </span>
        </h1>
        <h2 className="text-4xl font-blod text-white">
          a <span> {text}</span>
          <Cursor
            cursorBlinking="flase"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Hi, I'm Viraj Vilas Kunjir, a B.Tech Final Year IT engineering student
          at VIIT, Pune. I'm a tech enthusiast who loves coding, reading about
          new concepts and learning new technology. I've worked on projects like
          a Online Art Gallery system, College Rating System, and Personal
          Portfolio website. I've solved over 300+ Data Structures and
          Algorithms problems, and I'm eager to connect with professionals and
          experts on LinkedIn to make a difference in the IT world. Currently I
          have learned MERN Stack and Intern at Ineuron as Software Developer.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className=" text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://www.facebook.com/profile.php?id=100073451979921"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://twitter.com/VirajKunjir"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/viraj-kunjir-073b7822a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className=" text-base uppercase font-titleFont mb-4">
            BEST SKILLS ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
