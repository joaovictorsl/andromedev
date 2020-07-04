import React from "react";
import Project from "../components/project";
import Layout from "../components/layouts/layout";

const ProjectsPage = () => {
  const projects = [
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

  return (
    <Layout>
      <section className="container py-10">
        <div className="w-full flex flex-col items-center justify-center">
          <h2>Projetos</h2>
            asdasdasd
            {/* <p>Lista de projetos do Andromedev</p> */}
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {projects.map((project, index) => <Project info={project} key={index} />)}
        </div>
      </section>
    </Layout>
  );
};
export default ProjectsPage;
