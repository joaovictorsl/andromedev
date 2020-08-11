import React from "react";

export const events = [
  {
    date: new Date("2020-07-27T00:00:00.000-03:00"),
    title: "Abertura das inscrições das organizações",
    description: (
      <span>
        Início do período de inscrição para organizações que possuem interesse
        de submeter projetos para o Andromedev.{" "}
        <a
          className="text-orange hover:underline"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdD8a9ug98Zaat2nyjrC5mMlvKesIsIX8ZqBDIK68smxL6uqw/viewform?usp=sf_link"
        >
          Inscreva sua organização.
        </a>
      </span>
    ),
  },
  {
    date: new Date("2020-07-31T00:00:00.000-03:00"),
    title: "Encerramento das inscrições das organizações",
    description:
      "Todas as organizações devem fazer a inscrição até às 23:59 do dia 31 de julho no horário de Brasília.",
  },
  {
    date: new Date("2020-08-02T00:00:00.000-03:00"),
    title: "Anúncio da lista de organizações inscritas",
    description:
      "Após a divulgação da lista de organizações inscritas, os alunos interessados podem começar a procurar as organizações para demonstrar interesse em serem aprendizes nos projetos e discutir ideias.",
  },
  {
    date: new Date("2020-08-03T00:00:00.000-03:00"),
    title: "Abertura da submissão de projetos",
    description:
      "Início do período para as organizações submeterem suas propostas de projeto e seus mentores. Os alunos podem fazer parte da discussão e criação de ideias entrando em contato com as organizações por meio dos canais abertos no nosso Discord e/ou pelos meios de comunicação informados pela organização.",
  },
  {
    date: new Date("2020-08-19T00:00:00.000-03:00"),
    title: "Encerramento da submissão de projetos",
    description:
      "Todas as organizações devem submeter seus projetos até às 23:59 do dia 14 de agosto no horário de Brasília.",
  },
  {
    date: new Date("2020-08-24T00:00:00.000-03:00"),
    title: "Anúncio da lista de projetos inscritos",
    description:
      "A lista de projetos inscritos será anunciada juntamente aos seus respectivos mentores. A partir disso, os alunos poderão começar a se planejar para quais projetos aplicarão e a entrar em contato com os mentores para demonstrar interesse e tirar possíveis dúvidas.",
  },
  {
    date: new Date("2020-08-24T00:00:00.000-03:00"),
    title: "Abertura da aplicação para aprendizes",
    description:
      "Início do período para alunos interessados aplicarem para serem aprendizes em projetos.",
  },
  {
    date: new Date("2020-08-30T00:00:00.000-03:00"),
    title: "Encerramento da aplicação para aprendizes",
    description:
      "Todos os alunos com interesse de se tornarem aprendizes em algum projeto devem fazer a aplicação até às 23:59 do dia 30 de agosto no horário de Brasília.",
  },
  {
    date: new Date("2020-08-31T00:00:00.000-03:00"),
    title: "Início da análise das aplicações para aprendizes",
    description:
      "As organizações, juntamente à OpenDevUFCG, iniciarão o processo de análise das aplicações para selecionar o aprendiz de cada projeto.",
  },
  {
    date: new Date("2020-09-06T00:00:00.000-03:00"),
    title: "Anúncio da lista de aprendizes",
    description:
      "Os aprendizes selecionados já poderão entrar em contato com seus mentores a fim de conseguir informações do planejamento inicial para a execução de seus projetos.",
  },
  {
    date: new Date("2020-09-14T00:00:00.000-03:00"),
    title: "Início do desenvolvimento",
    description:
      "Os mentores e aprendizes começam oficialmente a trabalhar em seus projetos!",
  },
  {
    date: new Date("2020-11-06T00:00:00.000-03:00"),
    title: "Fim do período do desenvolvimento e feedback final",
    description:
      "Data final para encerramento das atividades de desenvolvimento pelo Andromedev e envio do feedback final entre mentor e aprendiz.",
  },
  {
    date: null,
    title: "Apresentação final dos projetos",
    description:
      "Evento para aprendizes mostrarem os resultados de seus projetos no Andromedev para toda a comunidade OpenDevUFCG!",
  },
];
