import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const Home = () => {
  const containerVarients = {
    hover: {
      scale: 1.1,
      boxShadow: "0 0 8px rgb(255,255,255)",
      textShadow: "0 0 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity, ////repeat animtion times or infinity
      },
    },
  };
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button whileHover="hover" variants={containerVarients}>
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
