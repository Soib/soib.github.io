import { motion } from "framer-motion";
import React from "react";
import "./Navbar.style.scss";
const Navbar = () => {
  return (
    <motion.div className="navbar" whileHover={{ scale: [0.95, 1.2, 1.05] }}>
      <motion.p className="navbar-logo">
        <div className="flickered">
          {"<>"}lukasz_cybulski{"</>"}
        </div>
      </motion.p>
    </motion.div>
  );
};

export default Navbar;
