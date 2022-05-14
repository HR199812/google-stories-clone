import { useRef } from "react";

const HeroFooter = () => {
  const phoneRef = useRef(null);

  return (
    <>
      <div ref={phoneRef} className="hero-text-section">
        <h1>Visual stories that feel like yours, because they are.</h1>
      </div>
    </>
  );
};
export default HeroFooter;
