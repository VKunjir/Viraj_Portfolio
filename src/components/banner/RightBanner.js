import React from "react";
import { bannerImg2 } from "../../assets/index";

function RightBanner() {
  return (
    <div className="w-1/2 pt-20 flex justify-center items-center relative">
      <img src={bannerImg2} alt="bannerImg" />
      {/* <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>     */}
    </div>
  );
}

export default RightBanner;
