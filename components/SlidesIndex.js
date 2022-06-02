import React, { useEffect, useRef } from "react";
import { featureSlides } from "../data";
import style from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function SlidesIndex() {
  const featureSliderRef = useRef(null);
  const slideRef = useRef(null);
  const handleScroll = () => {
    if (
      featureSliderRef.current.getBoundingClientRect().top < 1 
      // &&
      // document.getElementById("heroMidDiv").getBoundingClientRect().bottom < 1
    ) {
      slideRef.current.style.position = "fixed";
      // slideRef.current.className = style.asPrimary;
      console.log(slideRef.current.id);

      // if (
      //   document.getElementById("Complete control").getBoundingClientRect()
      //     .top < 10
      // ) {
      //   slideRef.current.className = style.asPrimary;

      //   slideRef.current.style.transition = "0.1s ease-in";
      // }
      // if (
      //   document.getElementById("On Brand").getBoundingClientRect().top < 10
      // ) {
      //   slideRef.current.className = style.asPrimary;

      //   slideRef.current.style.transition = "0.1s ease-in";
      // }
      // if (
      //   document.getElementById("Immersive").getBoundingClientRect().top < 10
      // ) {
      //   slideRef.current.className = style.asPrimary;

      //   slideRef.current.style.transition = "0.1s ease-in";
      // }
      // if (document.getElementById("footer").getBoundingClientRect().top < 790) {
      //   slideRef.current.style.position = "absolute";
      //   slideRef.current.style.bottom = 0;
      // }
    } else {
      slideRef.current.style.position = "absolute";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={featureSliderRef}
      className={style.featureSlidesContainer}
      id="featureSlidesContainer"
    >
      {featureSlides.map((feature, index) => (
        <>
          <div className={style.featureSlidesLeft}>
            <div key={index} className={style.featureSlide} id={feature.title}>
              <h3 className={style.featureSlideTitle}>{feature.title}</h3>
              <p className={style.featureSlideDescription}>
                {feature.description}
              </p>
            </div>
          </div>
          <motion.div
            className={style.featureSlidesRight}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={index} 
          >
            <img
              // className={style.asPrimary}
              id={feature.title}
              src={feature.imageUrl}
              ref={slideRef}
            />
          </motion.div>
        </>
      ))}
    </div>
  );
}
