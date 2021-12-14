import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  const svgVarients = {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
  };
  const pathVarients = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1, transition: { duration: 2 } },
  };
  return (
    <header>
      <motion.div className="logo" drag whileTap={{ scale: 1.1 }}>
        <motion.svg
          variants={svgVarients}
          initial="hidden"
          animate={"visible"}
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVarients}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />

          <motion.path
            variants={pathVarients}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className="title"
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: -10, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
