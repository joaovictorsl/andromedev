import React from "react";

import "../styles/card.css";

const ProjectCard = ({ info }) => (
    <div className="shadow-lg rounded bg-white max-w-full">
      <h3>Nome: {info.name.text}</h3>
      <p>Descrição: {info.proposal.url} </p>
    </div>
);

const ProjectList = ({ projects }) => {
	if (!projects) {
		return null
	}
	return (
		<div className="flex flex-col space-y-4 cursor-pointer">
			{projects.map(({ node: { data: project }}) => <ProjectCard info={{...project}}/>)}
		</div>
  );
};

export default ProjectList;
