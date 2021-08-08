import React from "react";
import "./ProjectsSpotlight.style.scss";
import { projects } from "./../../shared/projectsDescription";
import ProjectEntry from "../ProjectEntry/ProjectEntry";

const ProjectsSpotlight = () => {
  return (
    <div className="project-container">
      {projects.map((props) => (
        <ProjectEntry {...props} />
      ))}
    </div>
  );
};

export default ProjectsSpotlight;
