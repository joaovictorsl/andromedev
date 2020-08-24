import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import Layout from "../components/layouts/layout";

const contentObject = {
  organizations: {
    title: "Inscrição de organizações",
    description:
      "Período de inscrição para organizações que possuem interesse de submeter projetos para o Andromedev",
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSdD8a9ug98Zaat2nyjrC5mMlvKesIsIX8ZqBDIK68smxL6uqw/viewform?usp=sf_link",
  },
  projects: {
    title: "Submissão de projetos",
    description:
      "Período para as organizações submeterem suas propostas de projeto e seus mentores. Os alunos podem fazer parte da discussão e criação de ideias entrando em contato com as organizações por meio dos canais abertos no nosso Discord e/ou pelos meios de comunicação informados pela organização",
    link: "#",
  },
  apprentices: {
    title: "Aplicação de aprendizes",
    description:
      "Período para alunos interessados aplicarem para serem aprendizes em projetos",
    link: "#",
  },
};

const Applications = () => {
  const initialTab = getInitialTab();
  const [currTab, setCurrTab] = useState(initialTab);
  const [currTabContent, setCurrTabContent] = useState(contentObject[currTab]);

  function getInitialTab() {
    return "organizations";
  }

  function handleTabClick(value) {
    setCurrTab(value);
  }

  function handleTabChange() {
    setCurrTabContent(contentObject[currTab]);
  }

  function getTabActiveStyle(tab) {
    return currTab === tab
      ? "bg-purple-100 rounded-t border-indigo-600 text-indigo-600"
      : "border-gray-200 hover:text-gray-900";
  }

  useEffect(handleTabChange, [currTab]);

  const tabClassName =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider";
  return (
    <Layout title="Inscrições">
      <section className="text-dark-gray body-font mt-10">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap">
            <button
              className={`${tabClassName} ${getTabActiveStyle(
                "organizations"
              )}`}
              onClick={() => handleTabClick("organizations")}
            >
              ORGANIZAÇÕES
            </button>
            <button
              className={`${tabClassName} ${getTabActiveStyle("projects")}`}
              onClick={() => handleTabClick("projects")}
            >
              PROJETOS
            </button>
            <button
              className={`${tabClassName} ${getTabActiveStyle("apprentices")}`}
              onClick={() => handleTabClick("apprentices")}
            >
              APRENDIZES
            </button>
          </div>

          {initialTab === currTab && (
            <div className="py-8 w-full text-center block lg:flex lg:flex-row justify-center uppercase font-bold">
              <Link
                className="w-full lg:my-0 lg:w-64 block py-4 z-10 rounded bg-purple-700 text-white hover:bg-purple-600"
                to={currTabContent.link}
              >
                {currTabContent.title}
              </Link>
            </div>
          )}
          <div className="flex flex-col text-center w-full">
            {initialTab !== currTab && (
              <p className="lg:w-2/3 mx-auto leading-relaxed text-xs font-bold bg-gray-200 uppercase text-gray-800 py-4 my-8">
                Prazo de inscrição finalizado
              </p>
            )}
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
              {currTabContent.description}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Applications;
