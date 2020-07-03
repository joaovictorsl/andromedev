import React from "react";
import Project from "../components/project";

const ProjectsPage = () => {
  let projects = [
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
    { name: "Laguinho1", description: "Projeto laguinho", org: "OpendevUFCG" },
  ];

  let elements = [];

  for (let i = 0; i < projects.length; i++) {
    elements.push(<Project info={projects[i]} key={i} />);
  }

  return (
    <section className="container px-6 py-10">
      <div className="w-full flex flex-col items-center justify-center">
        <h2>Projetos</h2>
        {/* <p>Lista de projetos do Andromedev</p> */}
      </div>
      <div className="w-full flex flex-wrap justify-center">{elements}</div>
    </section>
  );
};
export default ProjectsPage;
