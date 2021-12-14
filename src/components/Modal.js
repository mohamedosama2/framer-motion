import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
};
const modal = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: { opacity: 1, y: "200px", transition: { delay: 0.5 } },
};

function Modal({ isShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {isShowModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate={"visible"}
          exit={"hidden"}
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
