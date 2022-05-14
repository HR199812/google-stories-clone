import { motion } from "framer-motion";
const HeroHeader = () => {
  const list = {
    visible: { opacity: 1, transition: { delay: 0.5, duration:0.5 } },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <div className="hero-text-section">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={list}
          id="hero-text"
        >
          Stories meet their widest Audience ever.
        </motion.h1>
      </div>
    </>
  );
};
export default HeroHeader;
