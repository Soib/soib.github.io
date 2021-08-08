import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import "./FindMeOn.style.scss";
import { socials } from "./../../shared/links";
import ShowIcon from "../ShowIcon/ShowIcon";

const FindMeOn = () => {
  const style = {
    color: "#ffffff",
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
