import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const containerVarients = {
    hover: {
      scale: 1.3,
      color: "yellow",
      originX: 0,
      transition: { stiffness: 300, type: "spring" },
    },
  };

  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ stiffness: 120, type: "spring" }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              // whileHover={{}}
              // transition={{}}
              variants={containerVarients}
              whileHover={"hover"}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ stiffness: 120, type: "spring" }}
              whileHover={{
                scale: [1.1, 1, 1.1, 1], /////////////////////////KEY FRAMES
                boxShadow: "0 0 8px rgb(255,255,255)",
                textShadow: "0 0 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Base;
