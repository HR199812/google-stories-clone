import React, { useRef, useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { motion } from "framer-motion";
import featureSlides from "../data";
const videoUrl =
  "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

const HeroPhoneBlock = () => {
  const scrollColorTransition = useRef(0);
  const scrollScaleTransition = useRef(1.5);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;

    if (
      document.getElementById("heroPhoneTemplateDiv").getBoundingClientRect()
        .top < 1 &&
      document.getElementById("heroText").getBoundingClientRect().bottom < 1
    ) {
      document.getElementById("heroPhoneDiv").style.position = "fixed";
      document.getElementById("heroPhoneDiv").style.marginTop = "200px";

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
        document.getElementById("heroPhoneDiv").style.position = "absolute";
        document.getElementById("heroPhoneDiv").style.marginTop = "0";
      }
      if (
        document.getElementById("heroPhoneTemplateDiv").getBoundingClientRect()
          .top > 1
      ) {
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
      document.getElementById("heroPhoneDiv").style.position = "absolute";
      document.getElementById("heroPhoneDiv").style.marginTop = "0";
      document.body.style.background = "rgba(0,0,0,0)";
      document.body.style.transition = "1s ease-in";
    }
    if (
      document.getElementById("featureSlidesContainer").getBoundingClientRect()
        .top < 1 &&
      document.getElementById("heroMidDiv").getBoundingClientRect().bottom < 1
    ) {
      document.getElementById("FeatureImage").style.position = "fixed";

      if (
        document.getElementById("Complete control").getBoundingClientRect()
          .top < 10
      ) {
        document.getElementById("FeatureImage").src =
          "https://images.unsplash.com/photo-1615617396130-db493d04e2c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100";
        document.getElementById("FeatureImage").style.transition =
          "0.1s ease-in";
      }
      if (
        document.getElementById("On Brand").getBoundingClientRect().top < 10
      ) {
        document.getElementById("FeatureImage").src =
          "https://images.unsplash.com/photo-1561532089-cb18d10f86b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100";

        document.getElementById("FeatureImage").style.transition =
          "0.1s ease-in";
      }
      if (
        document.getElementById("Immersive").getBoundingClientRect().top < 10
      ) {
        document.getElementById("FeatureImage").src =
          "https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100";

        document.getElementById("FeatureImage").style.transition =
          "0.1s ease-in";
      }
      if (document.getElementById("footer").getBoundingClientRect().top < 790) {
        document.getElementById("FeatureImage").style.position = "absolute";
        document.getElementById("FeatureImage").style.bottom = 0;
      }
    } else {
      document.getElementById("FeatureImage").style.position = "absolute";
    }
    setScrollPosition(position);
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
      // ref={phoneRef}
      id="heroPhoneDiv"
    >
      <div className={style.heroPhoneTemplate} id="heroPhoneTemplateDiv">
        <video
          className={style.collageElement}
          playsinline=""
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
