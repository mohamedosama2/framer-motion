import { motion, useCycle } from "framer-motion";
import React from "react";

const variants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -40],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
function Loader() {
  const [animation, cycle] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        {...{ variants }}
        animate={animation}
      ></motion.div>
      <motion.div
        whileHover={{ color: "yellow", cursor: "pointer" }}
        whileTap={{ scale: 1.1 }}
        onClick={() => cycle()}
      >
        Change Animation
      </motion.div>
    </>
  );
}

export default Loader;
