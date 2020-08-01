const categories = require('../enums/orgCategory');

const orgs = [
  {
    name: "Open Knowledge Brasil",
    slug: "open-knowledge",
    representant: 'Mário Sérgio Oliveira de Queiroz',
    description:
      "A Open Knowledge Brasil (OKBR), também chamada de Rede pelo Conhecimento Livre, é o capítulo da Open Knowledge Internacional no Brasil. Nós utilizamos e desenvolvemos ferramentas cívicas, projetos, análises de políticas públicas, jornalismo de dados e promovemos o conhecimento livre nos diversos campos da sociedade. Na esfera política, buscamos tornar a relação entre governo e sociedade mais próxima e transparente.",
    category: categories.STARS,
    logo: "https://i.imgur.com/GFqCFMu.png",
    discord: "https://discord.gg/PASGyqa",
    email: "mario@ok.org.br",
  },
  {
    name: "CAESI - Centro Acadêmico de Ciência da Computação",
    slug: "caesi",
    representant: 'Andrielly de Lima Lucena',
    description:
      "O CAESI (Centro Acadêmico dos Estudantes de Informática) é o Centro Acadêmico de Ciência da Computação na UFCG, atua na representação do corpo discente do curso e trabalha para melhorar a experiência do estudante durante a graduação.",
    category: categories.PARTNER,
    logo: "https://raw.githubusercontent.com/caesiufcg/caesi-documentos/master/imagens/logo-vazado.png",
    discord: "https://discord.gg/DstfN83",
    email: "caesi@ccc.ufcg.edu.br",
  },
  {
    name: "VTEX / SPLab",
    slug: 'vtex',
    representant: 'Thayanne Luiza Victor Landim Sousa',
    description:
      "A VTEX é uma empresa global de tecnologia focada em produtos para e-commerce que impacta diariamente o trabalho de milhares de pessoas ao redor do mundo. Através dos seus produtos e serviços, oferece aos lojistas uma plataforma coesa para executar todo o seu negócio e proporcionar aos seus clientes sempre a melhor experiência de compra. No contexto da Universidade Federal de Campina Grande (UFCG), a VTEX e o SPLab firmaram parceria para o desenvolvimento de componentes e soluções da plataforma.",
    category: categories.LAB,
    logo: "https://i.imgur.com/xS3ul8s.png",
    discord: "https://discord.gg/yzhste8",
    email: "thayannevls@gmail.com",
  },
  {
    name: "Call Us What You Want",
    slug: "calluswhatyouwant",
    representant: 'José Robson da Silva Araujo Junior',
    description:
      "Call Us What You Want foi criada por José Renan e Robson Junior em 2018 a partir do desejo de desenvolver projetos relacionados com música e de aprender novas tecnologias. O projeto inicial, chamado Musicritic, consiste em uma espécie de avaliador musical. Com o seu desenvolvimento, surgiu um repositório de propósito mais geral: o spotify-web-sdk, trazendo a ideia de facilitar o acesso a dados da API Web do Spotify.",
    category: categories.PARTNER,
    logo: "https://i.imgur.com/Dm8oHwK.png",
    discord: "https://discord.gg/yhKDD4Y",
    email: "jrobsonjr16@gmail.com",
  },
  {
    name: "Laboratório de Sistemas Distribuídos",
    slug: "lsd",
    representant: 'Francisco Vilar Brasileiro',
    description:
      "O LSD é um dos Laboratórios de Pesquisa e Desenvolvimento (P&D) da Unidade Acadêmica de Sistemas e Computação da UFCG e realiza ativividades de P&D nas áreas de Computação em Nuvem, Mineração de dados, Computação Social, Big Data e Aplicações.",
    category: categories.LAB,
    logo: "https://i.imgur.com/Y7OErgK.png",
    discord: "https://discord.gg/gSd32g9",
    email: "fubica@dsc.ufcg.edu.br",
  },
  {
    name: "Coordenação de Graduação da UASC",
    slug: "uasc",
    representant: 'Francisco Vilar Brasileiro',
    description:
      "A Coordenação de Graduação da UASC é responsável pela gestão das atividades acadêmicas do Curso de Ciência da Computação da UFCG. Nesse contexto, apoia diversas iniciativas de software aberto, incluindo algumas voltadas para melhorar a gestão do curso.",
    category: categories.PARTNER,
    logo: "https://i.imgur.com/zH2iP6s.png",
    discord: 'https://discord.gg/p63T93J',
    email: "fubica@dsc.ufcg.edu.br",
  },
  {
    name: "PET - Computação",
    slug: "pet",
    representant: 'Marcelo Alves de Barros',
    description:
      "O grupo PET-Computação é reconhecido por realizar atividades indissociáveis entre ensino, pesquisa e extensão tanto dentro da comunidade acadêmica do curso de Ciência da Computação quanto na sociedade em geral.",
    category: categories.PARTNER,
    logo: "https://i.imgur.com/7ncijtD.png",
    discord: "https://discord.gg/dcfg7Gd",
    email: "pet@ccc.ufcg.edu.br",
  },
  {
    name: "dadosjusbr.org",
    slug: "dadosjusbr",
    representant: 'Daniel Lacet de Faria Fireman',
    description:
      "Os principais objetivos do projeto dadosjusbr.org são denunciar a dificuldade no acesso, libertar e consolidar as informações sobre remunerações do sistema de justiça.  Iniciaremos com a esfera estadual e federal dos ministérios públicos e os tribunais eleitorais, do trabalho e de justiça. Fazemos isso combinando a construção comunitária de programas coletores de dados de remunerações com um sistema que consolida, calcula as dificuldades de acessar os dados de cada órgão e publica todas essas informações.",
    category: categories.SUPPORTED,
    logo: "https://i.imgur.com/SrxbE5X.png",
    discord: "https://discord.gg/bQZDKZe",
    email: "danielfireman@gmail.com",
  },
  {
    name: "Guardians",
    slug: "guardians",
    representant: 'Matheus Gaudencio do Rêgo',
    description:
      "Os Guardians é um grupo voluntário de alunos preocupados com a disseminação de conhecimento sobre administração de sistemas. São responsáveis por realizar tarefas de manutenção nos laboratórios de informática da UFCG, bem como desenvolver software, realizar seminários e disseminar sobre a cultura da área.",
    category: categories.PARTNER,
    logo: "https://i.imgur.com/7Dnxli4.png",
    discord: "https://discord.gg/6WvswEd",
    email: "matheusgr@computacao.ufcg.edu.br",
  },
  {
    name: "SPLab",
    slug: "splab",
    representant: 'Matheus Gaudencio do Rêgo',
    description:
      "O SPLab é um laboratório de ensino, pesquisa, inovação e desenvolvimento cujo tema central de interesse são as Práticas de Software. O SPLab tem por missão produzir e disseminar conhecimento sobre práticas de desenvolvimento de software tendo como norte a excelência na formação de recursos humanos.",
    category: categories.LAB,
    logo: "https://i.imgur.com/YMVDAX8.png",
    discord: "https://discord.gg/ccpvexv",
    email: "matheusgr@computacao.ufcg.edu.br",
  },
  {
    name: "Elas Computação",
    slug: "elas",
    representant: 'Emilly de Albuquerque Oliveira',
    description:
      "Comunidade criada na UFCG por todas as mulheres na área de tecnologia",
    category: categories.PARTNER,
    logo: "https://i.imgur.com/KzS6nSL.png",
    discord: "https://discord.gg/m9nck96",
    email: "emilly.oliveira@ccc.ufcg.edu.br",
  },
  {
    name: "Frente pelo direito à cidade",
    slug: "frente-pelo-direito-a-cidade",
    representant: 'Jobson Brunno da Silva Lima',
    description:
      "A nossa frente é uma articulação de diferentes entidades que lutam pelo direito à cidade. Temos como pauta viabilizar políticas públicas de desenvolvimento urbano para a inclusão social e efetivação dos direitos humanos, sociais, ambientais e culturais, enfrentando as desigualdades e discriminações de gênero, raça e etnia.",
    category: categories.SUPPORTED,
    logo: "https://i.imgur.com/t1BEAih.png",
    discord: "https://discord.gg/ucQnvwK",
    email: "frentepelodireitoacidade@gmail.com",
  },
  {
    name: "Laboratório de Rua (LabRua)",
    slug: "labrua",
    representant: 'Aída Paula Pontes de Aquino',
    description:
      "O Laboratório de Rua, o LabRua, é uma associação sem fins lucrativos que atua na realização de pesquisas e eventos que envolvam o entendimento e funcionamento das cidades. Nascemos em 2015, em Campina Grande, na Paraíba, e desde então viemos desenvolvendo projetos focados em espaços públicos de nossa cidade e de outras localidades próximas. Entendendo a cidade como uma construção multidisciplinar, e a importância de uma contribuição colaborativa, buscamos sempre a participação de profissionais de diferentes áreas. Nossas ações possuem diferentes temáticas, mas nosso foco principal é a elaboração de pesquisas que possam tanto embasar o desenho urbano dos espaços públicos estudados, como também dar subsídios para políticas públicas que contemplem uma cidade mais democrática. Entre outros objetivos, está também o de informar a população sobre os aspectos que envolvem a cidade, produzindo eventos e conteúdos informativos a partir de nossas pesquisas e análises, além de realizar ações que lidem com a cidade direta e indiretamente, como a assessoria técnica urbanística e/ou arquitetônica, ocupações em espaços públicos e intervenções urbanas. Aprendendo e ensinando sobre assuntos que tenham repercussão na espaço urbano. Alguns exemplos dessas ações são nosso cinema, 'CineLab'; nossa roda de discussão, 'Janela'; o 'Debate' de livros e textos; a ocupação de espaços públicos, o 'Lab na Rua'; a famosa 'Maratona de Projetos'; entre outras.",
    category: categories.PARTNER,
    logo: "https://i.imgur.com/KY4wbUH.png",
    discord: "https://discord.gg/BnQNhBu",
    email: "contato@labrua.org",
  },
  {
    name: "Laboratório Analytics",
    slug: "lab-analytics",
    representant: 'Nazareno Andrade',
    description:
      "Laboratório de pesquisa, desenvolvimento, ensino e inovação em Ciência de Dados Cívica.",
    category: categories.LAB,
    logo: "https://i.imgur.com/kQ8VM8I.png",
    discord: 'https://discord.gg/gccDTYw',
    email: "nazareno@computacao.ufcg.edu.br",
  },
  {
    name: "PyLadiesPB",
    slug: "pyladies-pb",
    representant: 'Iele Facundo Passo',
    description:
      "Comunidade na Paraíba com foco em ajudar mais mulheres a se tornarem participantes ativas e líderes da comunidade de código aberto Python.",
    category: categories.PARTNER,
    logo: "https://i.imgur.com/vL74x2k.png",
    discord: "https://discord.gg/7DEJAyM",
    email: "pb@pyladies.com",
  },
  {
    name: "Alt Zap",
    slug: "alt-zap",
    representant: 'Luciano de Oliveira Júnior',
    description:
      "O Alt Zap é uma aplicação feita para ajudar pequenos e médios negócios a venderem na internet, especialmente pra quem faz entrega por delivery. Atualmente usa tecnologias modernas como React, Gatsby e Firebase e já temos um roadmap bem definido para ser implementado!",
    category: categories.PARTNER,
    logo: "https://i.imgur.com/nTUJq2g.png",
    discord: "https://discord.gg/yzhste8",
    email: "lucis@vtex.com",
  },
];

function getOrg(slug) {
  return orgs.find(org => org.slug === slug)
}

module.exports = {
  orgs,
  getOrg,
}
