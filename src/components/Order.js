import { motion } from "framer-motion";
import React, { useEffect } from "react";

const containerVarients = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      // stiffness: 120,
      // delay: 0.5,
      mass: 0.1, //higher =>slower animation &&lower =>faster animation
      damping: 8, //higher =>little movement && lower =>much move (if 0 infinite move)
      staggerChildren: 0.4, //time to start children animation
      when: "beforeChildren", //run the animation of the parent first and once its done =>run children animation
    },
  },
};

const childrenVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza, setIsShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsShowModal(true);
    }, 4000);
  }, [setIsShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    >
      <motion.h2>Thank you for your order :)</motion.h2>

      <motion.p variants={childrenVarients}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <div variants={childrenVarients}>
        {pizza.toppings.map((topping) => (
          <motion.div variants={childrenVarients} key={topping}>
            {topping}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Order;
