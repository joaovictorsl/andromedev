import React from "react";

const eventSchedule = () => {
  const events = [
    {
      date: '27 de Julho de 2020',
      title: 'Abertura das inscrições das organizações',
      description: 'Período de inscrição das organizações que possuem interesse de submeter projetos para o Andromedev.',
    },
    {
      date: '31 de Julho de 2020',
      title: 'Encerramento das inscrições das organizações',
      description: 'Todas as organizações devem fazer a inscrição até às 23:59 do dia 31 de Julho no horário de Brasília.',
    },
    {
      date: '02 de Agosto de 2020',
      title: 'Anúncio da lista de organizações inscritas',
      description: 'Após a divulgação da lista de organizações inscritas, os alunos interessados podem começar a procurar as organizações para demonstrar interesse em serem aprendizes nos projetos e discutir ideias.',
    },
    {
      date: '03 de Agosto de 2020',
      title: 'Abertura da submissão de projetos',
      description: 'Período para as organizações submeterem suas propostas de projeto e seus mentores. Os alunos podem fazer parte da discussão e criação de ideias entrando em contato com as organizações por meio dos canais abertos no nosso discord e/ou pelos meios de comunicação informados pela organização.',
    },
    {
      date: '14 de Agosto de 2020',
      title: 'Encerramento da submissão de projetos',
      description: 'Todas as organizações devem submeter seus projetos até às 23:59 do dia 14 de Agosto no horário de Brasília.',
    },
    {
      date: '16 de Agosto de 2020',
      title: 'Anúncio da lista de projetos inscritos',
      description: 'A lista de projetos inscritos serão anunciadas juntamente aos seus respectivos mentores e a partir disso os alunos poderão começar a se planejar para quais projetos aplicará para aprendiz e a entrar em contato com os mentores para demonstrar interesse e tirar possíveis dúvidas.',
    },
    {
      date: '17 de Agosto de 2020',
      title: 'Abertura da aplicação para aprendizes',
      description: 'Período para alunos interessados aplicarem para serem aprendizes em algum projeto.',
    },
    {
      date: '30 de Agosto de 2020',
      title: 'Encerramento da aplicação para aprendizes',
      description: 'Todas os alunos com interesse de se tornarem aprendizes em algum projeto devem fazer a aplicação até às 23:59 do dia 30 de Agosto no horário de Brasília.',
    },
    {
      date: '31 de Agosto de 2020',
      title: 'Início da análise das aplicações para aprendizes',
      description: 'As organizações juntamente ao OpenDevUFCG iniciarão o processo de análise das aplicações para selecionar o aprendiz de cada projeto.',
    },
    {
      date: '06 de Setembro de 2020',
      title: 'Anúncio da lista de aprendizes',
      description: 'Os aprendizes selecionados já poderão entrar em contato com seus mentores a fim de conseguir informações a respeito do planejamento inicial para a execução projeto.',
    },
    {
      date: '14 de Setembro de 2020',
      title: 'Início do desenvolvimento',
      description: 'Os mentores e aprendizes começam oficialmente a trabalhar em seus projetos!!!',
    },
    {
      date: '28 de Setembro a 02 de Outubro de 2020 e 19 a 23 de Outubro de 2020',
      title: 'Períodos de avaliações e feedback',
      description: 'Aprendizes e mentores enviam seu feedback de um ao outro para que a organização e OpenDevUFCG acompanhem o andamento do projeto e possam ajustar o que for necessário para o bem estar de todos os participantes do evento.',
    },
    {
      date: '06 de Novembro de 2020',
      title: 'Fim do período do desenvolvimento e feedback final',
      description: 'Data final para encerramento das atividades de desenvolvimento pelo Andromedev e envio do feedback final entre mentor e aprendiz.',
    },
    {
      date: 'A ser definido',
      title: 'Apresentação final dos projetos',
      description: 'Evento para aprendizes mostrarem os resultados de seus projetos no Andromedev para toda a comunidade OpenDevUFCG!!!',
    },
  ];

  return (
    <section className="schedule text-gray-700 body-font bg-gray-200">
      <div className="container px-5 pb-24 mx-auto flex flex-wrap">
        {events.map((event, index) => (
          <div className="flex relative py-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-dark-gray pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dark-gray text-white relative z-10 title-font font-medium text-sm">{index + 1}</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 text-xl">{event.title}</h2>
                <h3 class="mb-1 text-sm">
                  {event.date}
                </h3>
                <p class="leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default eventSchedule;