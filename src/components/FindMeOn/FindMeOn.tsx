import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { IoIosMailOpen } from "react-icons/io";
import "./FindMeOn.style.scss";
import { socials } from "./../../shared/links";
import ShowIcon from "../ShowIcon/ShowIcon";

const FindMeOn = () => {
  const style = {
    color: "#ffffff",
    fontSize: "5rem",
  };
  return (
    <div className="icon-container">
      <ShowIcon icon={<GoMarkGithub style={style} />} link={socials.github} />
      <ShowIcon icon={<ImLinkedin style={style} />} link={socials.linkedin} />
      <ShowIcon icon={<IoIosMailOpen style={style} />} link={socials.mail} />
    </div>
  );
};

export default FindMeOn;
