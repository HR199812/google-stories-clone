import React, { useEffect } from "react";

import { videos, photos } from "../data";
import style from "../styles/Home.module.css";
import { motion } from "framer-motion";

function VideoElement({ src, loc }) {
  if (loc === "left") {
    return (
      <motion.div
        className={style.heroElement}
        initial={{ y: 300 }}
        animate={{ y: -47 }}
        transition={{
          delay: 3.8,
          duration: 1.5,
          type: "spring",
          stiffness: 70,
        }}
      >
        <video
          className={style.collageElement}
          playsinline=""
          autoPlay
          webkit-playsinline=""
          loop
          // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
          src={src}
        ></video>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className={style.heroElement}
        initial={{ y: 300 }}
        animate={{ y: -47 }}
        transition={{
          delay: 4,
          duration: 1.5,
          type: "spring",
          stiffness: 70,
        }}
      >
        <video
          className={style.collageElement}
          playsinline=""
          autoPlay
          webkit-playsinline=""
          loop
          // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
          src={src}
        ></video>
      </motion.div>
    );
  }
}
function ImageElement({ src, custom, loc }) {
  return (
    <motion.div
      className={style.heroElement}
      initial={{ y: 300 }}
      animate={{ y: -47 }}
      transition={{
        delay: (custom + 1) * 1.6,
        duration: 1.5,
        type: "spring",
        stiffness: 70,
      }}
    >
      <img src={src} className={style.collageElement} alt="" />
    </motion.div>
  );
}
export default function HeroCollage() {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);
  const [leftVideo, rightVideo] = videos;

  return (
    <div className={style.heroCollage}>
      <div className={style.leftColumn}>
        {leftImages.map((src, i) => (
          <ImageElement loc={"left"} custom={i} key={src} src={src} />
        ))}
        <VideoElement loc={"left"} src={leftVideo} />
      </div>
      <div className={style.rightColumn}>
        <VideoElement loc={"right"} src={rightVideo} />
        {rightImages.map((src, i) => (
          <ImageElement loc={"right"} custom={i} key={src} src={src} />
        ))}
      </div>
    </div>
  );
}
