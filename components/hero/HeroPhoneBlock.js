import React from "react";
import { useRef } from "react";

import imgSrc from "../../public/assets/hero-phone-frame-v2.png";
const videoUrl =
  "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

const HeroPhoneBlock = () => {
  const phoneRef = useRef(null);

  return (
    <div className="hero-phone-block" ref={phoneRef}>
      <div
        className="hero-phone-template"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <video
          className="collage-element"
          playsinline=""
          autoPlay
          webkit-playsinline=""
          loop
          // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
          src={videoUrl}
        ></video>
      </div>
    </div>
  );
};
export default HeroPhoneBlock;