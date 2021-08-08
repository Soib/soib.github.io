import React from "react";
import "./ProjectEntry.style.scss";

interface IProjectEntry {
  name: string;
  description: string;
  technologies: string[];
  status: string;
}

interface IProject {
  props: IProjectEntry[];
}

const ProjectEntry = ({
  name,
  description,
  technologies,
  status,
}: IProjectEntry) => {
  return (
    <div className="entry-container">
      <p>{name}</p>
      <p>{description}</p>
      <p>{technologies}</p>
      <p>{status}</p>
    </div>
  );
};

export default ProjectEntry;
