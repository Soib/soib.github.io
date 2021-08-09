import { motion } from "framer-motion";
import React from "react";
import "./Navbar.style.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <motion.p className="navbar-logo noselect">
        {"<> "}lukasz_cybulski{" </>"}
      </motion.p>
    </div>
  );
};

export default Navbar;
