import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const btnVarients = {
  hidden: { x: "-100vw" },
  visible: { x: 0 },
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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: "yellow",
                originX: 0,
              }}
              transition={{
                stiffness: 300,
                type: "spring",
              }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          transition={{ stiffness: 120, type: "spring" }}
          whileHover="hover"
          variants={btnVarients}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
