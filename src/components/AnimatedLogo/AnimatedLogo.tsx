import { motion } from "framer-motion";
import React from "react";
import "./AnimatedLogo.style.scss";

const AnimatedLogo = () => {
  return (
    <motion.div
      className="motion-container"
      animate={{ rotate: -5 }}
      transition={{ duration: 3 }}
    >
      <motion.p
        animate={{ scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="logo"
      >
        Good to see you here!
      </motion.p>
    </motion.div>
  );
};

export default AnimatedLogo;
