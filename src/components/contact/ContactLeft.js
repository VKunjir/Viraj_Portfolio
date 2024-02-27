import React from "react";
import { contactImg } from "../../assets/index";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover roun-lg mb-2"
        src={contactImg}
        alt="Contact"
      />
      <div className="flex  flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Viraj Kunjir</h3>
        <p className="text-lg font-normal text-gray-400">Web Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          If have any thing to say, please free to contact me.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className=" text-lightText">kunjirviraj0321@gmail.com</span>
        </p>
      </div>
      <div className=" flex flex-col">
        <h2 className=" text-base uppercase font-titleFont mb-4">
          {" "}
          FIND ME IN
        </h2>
        <div className=" flex gap-4">
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
    </div>
  );
};

export default ContactLeft;
