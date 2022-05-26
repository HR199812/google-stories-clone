import React, { useRef, useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { motion } from "framer-motion";
import featureSlides from "../data";
const videoUrl =
  "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

const HeroPhoneBlock = () => {
  const scrollColorTransition = useRef(0);
  const scrollScaleTransition = useRef(1.5);
  const phoneRef = useRef(null);
  const phoneTemplateRef = useRef(null);

  const handleScroll = () => {
    if (
      phoneTemplateRef.current.getBoundingClientRect().top < 1 &&
      document.getElementById("heroText").getBoundingClientRect().bottom < 1
    ) {
      phoneRef.current.style.position = "fixed";
      phoneRef.current.style.marginTop = "200px";

      if (
        document.getElementById("heroCollageDiv").getBoundingClientRect().top <
          -40 &&
        document.getElementById("usedByDiv").getBoundingClientRect().top > 0
      ) {
        // document.getElementById(
        //   "heroPhoneTemplateDiv"
        // ).style.transform = `scale(${
        //   scrollScaleTransition.current, scrollScaleTransition.current
        // })`;
        // scrollScaleTransition.current -= 0.01;

        document.body.style.background = `rgba(
              0,
              0,
              0,
              ${scrollColorTransition.current}
            )`;
        scrollColorTransition.current += 0.01;
      }
      if (
        document.getElementById("heroMidDiv").getBoundingClientRect().top < 750
      ) {
        phoneRef.current.style.position = "absolute";
        phoneRef.current.style.marginTop = "0";
      }
      if (phoneTemplateRef.current.getBoundingClientRect().top > 1) {
        document.body.style.backgroundColor = "white";
        document.body.style.transition = "0.5s linear";
      }
      if (
        document.getElementById("heroMidDiv").getBoundingClientRect().top < 550
      ) {
        document.body.style.backgroundColor = "white";
        document.body.style.transition = "0.5s linear";
      }
    } else {
      phoneRef.current.style.position = "absolute";
      phoneRef.current.style.marginTop = "0";
      document.body.style.background = "rgba(0,0,0,0)";
      document.body.style.transition = "1s ease-in";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={style.heroPhoneBlock}
      initial={{ y: 300 }}
      animate={{ y: -47 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 40 }}
      ref={phoneRef}
    >
      <div
        className={style.heroPhoneTemplate}
        ref={phoneTemplateRef}
        id="heroPhoneTemplateDiv"
      >
        <video
          className={style.collageElement}
          playsInline=""
          autoPlay
          webkit-playsinline=""
          loop
          // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
          src={videoUrl}
        ></video>
      </div>
    </motion.div>
  );
};
export default HeroPhoneBlock;
