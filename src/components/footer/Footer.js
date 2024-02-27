import React from "react";
import { logo3 } from "../../assets/index";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full py-20 h-auto  border-b-[1px] border-b-black grid grid-cols-2 gap-8">
      <div className="w-full h-full flex flex-col justify-center gap-8 items-center ">
        <img className="rounded-full w-[35%]" src={logo3} alt="logo" />
        <div className=" flex gap-4 justify-center">
          <span className="bannerIcon">
            <a
              href="https://www.facebook.com/profile.php?id=100073451979921"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
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
      <div className="w-auto h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
        <h1 className=" text-5xl font-bold text-white">
          Please free to contact me
          <span className=" text-designColor capitalize ">
            {" "}
            And share your valuable feedback{" "}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
