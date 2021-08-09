import React from "react";
import "./ProjectsSpotlight.style.scss";
import { projects } from "./../../shared/projectsDescription";
import ProjectEntry from "../ProjectEntry/ProjectEntry";

const ProjectsSpotlight = () => {
  return (
    <div className="project-container">
      <h1 className="noselect">Projects</h1>
      {projects.map((props) => (
        <ProjectEntry {...props} />
      ))}
    </div>
  );
};

export default ProjectsSpotlight;
