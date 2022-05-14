import { useRef } from "react";
import style from "../styles/Home.module.css";

const HeroMidDiv = () => {
  const phoneRef = useRef(null);

  return (
    <>
      <div ref={phoneRef} className={style.heroTextSection}>
        <h1>Visual stories that feel like yours, because they are.</h1>
      </div>
    </>
  );
};
export default HeroMidDiv;
