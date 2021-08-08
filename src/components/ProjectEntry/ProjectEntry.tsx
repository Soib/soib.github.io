import React from "react";
import "./ProjectEntry.style.scss";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineHourglass } from "react-icons/ai";
import {
  SiRedux,
  SiStyledComponents,
  SiReact,
  SiTypescript,
  SiSass,
  SiFirebase,
  SiReactrouter,
  SiMaterialUi,
} from "react-icons/si";

interface IProjectEntry {
  name: string;
  image_url: string;
  description: string;
  technologies: string[];
  status: string;
}

const ProjectEntry = ({
  name,
  image_url,
  description,
  technologies,
  status,
}: IProjectEntry) => {
  const style = {
    color: "#ffffff",
    fontSize: "3.5rem",
    margin: "5px",
  };
  return (
    <div className="entry-container">
      <p className="entry-title">{name}</p>
      <img className="entry-image" src={image_url} title={name} />
      <p className="entry-description">{description}</p>
      {technologies.map((technology) => {
        if (technology === "react") return <SiReact style={style} />;
        if (technology === "typescript") return <SiTypescript style={style} />;
        if (technology === "firebase") return <SiFirebase style={style} />;
        if (technology === "styled-components")
          return <SiStyledComponents style={style} />;
        if (technology === "react-router")
          return <SiReactrouter style={style} />;
        if (technology === "redux") return <SiRedux style={style} />;
        if (technology === "material-ui") return <SiMaterialUi style={style} />;
        if (technology === "scss") return <SiSass style={style} />;
        return "";
      })}
      {status === "success" ? (
        <FiCheckCircle style={style} />
      ) : (
        <AiOutlineHourglass style={style} />
      )}
    </div>
  );
};

export default ProjectEntry;
