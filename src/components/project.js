import React from "react";

import "./project.css";

const Project = (props) => {
  const info = props.info;

  return (
    <div className="project">
      <h3>Nome: {info.name}</h3>
      <p>Organização: {info.org} </p>
      <p>Descrição: {info.description} </p>
    </div>
  );
};

export default Project;
