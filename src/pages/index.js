import React from "react";
import { Helmet } from "react-helmet"
import Layout from "../components/layouts/layout";
import EventSchedule from "../components/event-schedule"
import Margarete from "../assets/svg/margarete.svg";
import Planet1 from "../assets/svg/planeta1.svg";
import Planet2 from "../assets/svg/planeta2.svg";
import Planet3 from "../assets/svg/planeta3.svg";
import Planet4 from "../assets/svg/planeta4.svg";
import Planet5 from "../assets/svg/planeta5.svg";
import Logo from "../assets/png/andromedev.png";
import "../styles/home.css";

const Home = () => {
  const events = [
    {
      date: new Date('2020-07-27'),
      title: 'Abertura das inscrições das organizações',
      description: 'Período de inscrição das organizações que possuem interesse de submeter projetos para o Andromedev.',
    },
    {
      date: new Date('2020-07-31'),
      title: 'Encerramento das inscrições das organizações',
      description: 'Todas as organizações devem fazer a inscrição até às 23:59 do dia 31 de Julho no horário de Brasília.',
    },
    {
      date: new Date('2020-08-02'),
      title: 'Anúncio da lista de organizações inscritas',
      description: 'Após a divulgação da lista de organizações inscritas, os alunos interessados podem começar a procurar as organizações para demonstrar interesse em serem aprendizes nos projetos e discutir ideias.',
    },
    {
      date: new Date('2020-08-03'),
      title: 'Abertura da submissão de projetos',
      description: 'Período para as organizações submeterem suas propostas de projeto e seus mentores. Os alunos podem fazer parte da discussão e criação de ideias entrando em contato com as organizações por meio dos canais abertos no nosso discord e/ou pelos meios de comunicação informados pela organização.',
    },
    {
      date: new Date('2020-08-14'),
      title: 'Encerramento da submissão de projetos',
      description: 'Todas as organizações devem submeter seus projetos até às 23:59 do dia 14 de Agosto no horário de Brasília.',
    },
    {
      date: new Date('2020-08-16'),
      title: 'Anúncio da lista de projetos inscritos',
      description: 'A lista de projetos inscritos serão anunciadas juntamente aos seus respectivos mentores e a partir disso os alunos poderão começar a se planejar para quais projetos aplicará para aprendiz e a entrar em contato com os mentores para demonstrar interesse e tirar possíveis dúvidas.',
    },
    {
      date: new Date('2020-08-16'),
      title: 'Abertura da aplicação para aprendizes',
      description: 'Período para alunos interessados aplicarem para serem aprendizes em algum projeto.',
    },
    {
      date: new Date('2020-08-30'),
      title: 'Encerramento da aplicação para aprendizes',
      description: 'Todas os alunos com interesse de se tornarem aprendizes em algum projeto devem fazer a aplicação até às 23:59 do dia 30 de Agosto no horário de Brasília.',
    },
    {
      date: new Date('2020-08-31'),
      title: 'Início da análise das aplicações para aprendizes',
      description: 'As organizações juntamente ao OpenDevUFCG iniciarão o processo de análise das aplicações para selecionar o aprendiz de cada projeto.',
    },
    {
      date: new Date('2020-09-06'),
      title: 'Anúncio da lista de aprendizes',
      description: 'Os aprendizes selecionados já poderão entrar em contato com seus mentores a fim de conseguir informações a respeito do planejamento inicial para a execução projeto.',
    },
    {
      date: new Date('2020-09-14'),
      title: 'Início do desenvolvimento',
      description: 'Os mentores e aprendizes começam oficialmente a trabalhar em seus projetos!',
    },
    {
      date: new Date('2020-11-06'),
      title: 'Fim do período do desenvolvimento e feedback final',
      description: 'Data final para encerramento das atividades de desenvolvimento pelo Andromedev e envio do feedback final entre mentor e aprendiz.',
    },
    {
      date: null,
      title: 'Apresentação final dos projetos',
      description: 'Evento para aprendizes mostrarem os resultados de seus projetos no Andromedev para toda a comunidade OpenDevUFCG!',
    },
  ];

  return (
    <Layout className={"bg-dark-gray text-white"}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Andromedev</title>
      </Helmet>
      <section className="w-full linear bg-primary">
        <div className="w-full flex justify-center mx-auto max-w-3xl my-8">
          <article>
            <div className="max-w-lg flex flex-col items-center justify-center xl:mx-auto">
              <img src={Logo} alt="Andromedev Logo" />
              <p className="p-2 text-white text-center sm:text-xl">
                O primeiro evento organizado de mentoria pela OpenDevUFCG com o
                intuito de incentivar a participação de estudantes da UFCG em
                projetos open source!
              </p>
              <div className="p-2 block w-full py-6 px-6 text-center">
                <a
                  className="text-white w-full block bg-blue-700 hover:bg-blue-600 px-4 py-2"
                  href="#"
                >
                  INSCRIÇÕES
                </a>
              </div>
            </div>
          </article>
          <article className="w-1/2 relative margaret">
            <img
              className="absolute inset-0 h-full w-full"
              src={Margarete}
              alt="Margarete Happy!"
            />
          </article>
        </div>
      </section>
      <section className="planets-section bg-dark-gray relative">
        <img
          className="planet absolute z-10 h-auto"
          src={Planet1}
          alt="Planet1"
        />
        <img
          className="planet absolute z-10 h-auto"
          src={Planet2}
          alt="Planet2"
        />
        <img
          className="planet absolute z-10 h-auto"
          src={Planet3}
          alt="Planet3"
        />
        <img
          className="planet absolute z-10 h-auto"
          src={Planet4}
          alt="Planet4"
        />
        <img
          className="planet absolute z-10 h-auto"
          src={Planet5}
          alt="Planet5"
        />
      </section>
      <section className="waves">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </section>
      <EventSchedule events={events} />
    </Layout>
  );
};

export default Home;
