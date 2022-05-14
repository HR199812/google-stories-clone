import { motion } from "framer-motion";
import style from "../../styles/Home.module.css";

const HeroHeader = () => {
  const motionList = {
    visible: { opacity: 1, transition: { delay: 0.5, duration:0.5 } },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <div className={style.heroTextSection}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={motionList}
          id="heroText"
        >
          Stories meet their widest Audience ever.
        </motion.h1>
      </div>
    </>
  );
};
export default HeroHeader;
