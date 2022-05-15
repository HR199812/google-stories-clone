import React, { useState, useRef } from "react";
import { featureSlides } from "../data";
import style from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function SlidesIndex() {
  const featureSliderRef = useRef(null);

  return (
    <div
      ref={featureSliderRef}
      className={style.featureSlidesContainer}
      id="featureSlidesContainer"
    >
      <div className={style.featureSlidesLeft}>
        {featureSlides.map((feature, index) => (
          <>
            <div className={style.featureSlide} id={feature.title}>
              <h3 className={style.featureSlideTitle}>{feature.title}</h3>
              <p className={style.featureSlideDescription}>
                {feature.description}
              </p>
            </div>
          </>
        ))}
      </div>
      <motion.div
        className={style.featureSlidesRight}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img
          className={style.asPrimary}
          id="FeatureImage"
          src="https://images.unsplash.com/photo-1615617396130-db493d04e2c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100"
        />
      </motion.div>
    </div>
  );
}
