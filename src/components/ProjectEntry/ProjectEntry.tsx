import React from "react";
import "./ProjectEntry.style.scss";
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
  url: string;
  image_url: string;
  description: string;
  technologies: string[];
  status: string;
}

const ProjectEntry = ({
  name,
  url,
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
      <p className="entry-title noselect">{name}</p>
      <img
        className="entry-image noselect"
        src={image_url}
        title={name}
        onClick={() => window.open(url, "_blank")}
      />
      {status === "in-progress" && <p className="entry-status">In-progress</p>}
      <p className="entry-description noselect">{description}</p>
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
    </div>
  );
};

export default ProjectEntry;
