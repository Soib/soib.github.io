import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { motion } from "framer-motion";
import "./FindMeOn.style.scss";
import { socials } from "./../../shared/links";

interface IShowIcon {
  icon: React.ReactNode;
  link?: string;
}

const ShowIcon: React.FC<IShowIcon> = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: [1.2, 1.2],
        rotate: [0, 360],
        borderRadius: ["20%", "50%"],
      }}
      transition={{ duration: 0.5 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      className="icon-box"
      onClick={() => window.open(props.link, "_blank")}
    >
      {props.icon}
    </motion.div>
  );
};

const FindMeOn = () => {
  const style = {
    color: "#fdddff",
    fontSize: "3.5rem",
  };
  return (
    <div className="icon-container">
      <ShowIcon icon={<VscGithubAlt style={style} />} link={socials.github} />
      <ShowIcon
        icon={<AiOutlineLinkedin style={style} />}
        link={socials.linkedin}
      />
      <ShowIcon icon={<RiMailSendLine style={style} />} link={socials.mail} />
    </div>
  );
};

export default FindMeOn;
