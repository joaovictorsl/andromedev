const categories = require('../enums/orgCategory');

const orgs = [
  {
    name: "Open Knowledge Brasil",
    slug: "open-knowledge",
    description:
      "A Open Knowledge Brasil (OKBR), também chamada de Rede pelo Conhecimento Livre, é o capítulo da Open Knowledge Internacional no Brasil. Nós utilizamos e desenvolvemos ferramentas cívicas, projetos, análises de políticas públicas, jornalismo de dados e promovemos o conhecimento livre nos diversos campos da sociedade. Na esfera política, buscamos tornar a relação entre governo e sociedade mais próxima e transparente.",
    category: categories.STARS,
    github: "https://github.com/okfn-brasil",
    logo: "https://i.imgur.com/GFqCFMu.png",
    email: "mario@ok.org.br",
  },
  {
    name: "CAESI - Centro Acadêmico de Ciência da Computação",
    slug: "caesi",
    description:
      "O CAESI (Centro Acadêmico dos Estudantes de Informática) é o Centro Acadêmico de Ciência da Computação na UFCG, atua na representação do corpo discente do curso e trabalha para melhorar a experiência do estudante durante a graduação.",
    category: categories.PARTNER,
    github: "https://github.com/caesiufcg",
    logo: "https://raw.githubusercontent.com/caesiufcg/caesi-documentos/master/imagens/logo-vazado.png",
    email: "caesi@ccc.ufcg.edu.br",
  },
  {
    name: "VTEX / SPLab",
    slug: 'vtex',
    description:
      "A VTEX é uma empresa global de tecnologia focada em produtos para e-commerce que impacta diariamente o trabalho de milhares de pessoas ao redor do mundo. Através dos seus produtos e serviços, oferece aos lojistas uma plataforma coesa para executar todo o seu negócio e proporcionar aos seus clientes sempre a melhor experiência de compra. No contexto da Universidade Federal de Campina Grande (UFCG), a VTEX e o SPLab firmaram parceria para o desenvolvimento de componentes e soluções da plataforma.",
    category: categories.LAB,
    github: "https://github.com/vtex",
    logo: "https://i.imgur.com/xS3ul8s.png",
    email: "thayannevls@gmail.com",
  },
  {
    name: "Call Us What You Want",
    slug: "calluswhatyouwant",
    description:
      "Call Us What You Want foi criada por José Renan e Robson Junior em 2018 a partir do desejo de desenvolver projetos relacionados com música e de aprender novas tecnologias. O projeto inicial, chamado Musicritic, consiste em uma espécie de avaliador musical. Com o seu desenvolvimento, surgiu um repositório de propósito mais geral: o spotify-web-sdk, trazendo a ideia de facilitar o acesso a dados da API Web do Spotify.",
    category: categories.PARTNER,
    github: "https://github.com/calluswhatyouwant",
    logo: "https://i.imgur.com/Dm8oHwK.png",
    email: "jrobsonjr16@gmail.com",
  },
  {
    name: "Laboratório de Sistemas Distribuídos",
    slug: "lsd",
    description:
      "O LSD é um dos Laboratórios de Pesquisa e Desenvolvimento (P&D) da Unidade Acadêmica de Sistemas e Computação da UFCG e realiza ativividades de P&D nas áreas de Computação em Nuvem, Mineração de dados, Computação Social, Big Data e Aplicações.",
    category: categories.LAB,
    github: "https://github.com/ufcg-lsd",
    logo: "https://i.imgur.com/Y7OErgK.png",
    email: "fubica@dsc.ufcg.edu.br",
  },
  {
    name: "Coordenação de Graduação da UASC",
    slug: "uasc",
    description:
      "A Coordenação de Graduação da UASC é responsável pela gestão das atividades acadêmicas do Curso de Ciência da Computação da UFCG. Nesse contexto, apoia diversas iniciativas de software aberto, incluindo algumas voltadas para melhorar a gestão do curso.",
    category: categories.PARTNER,
    github: "http://www.computacao.ufcg.edu.br/",
    logo: "https://i.imgur.com/zH2iP6s.png",
    email: "fubica@dsc.ufcg.edu.br",
  },
  {
    name: "PET - Computação",
    slug: "pet",
    description:
      "O grupo PET-Computação é reconhecido por realizar atividades indissociáveis entre ensino, pesquisa e extensão tanto dentro da comunidade acadêmica do curso de Ciência da Computação quanto na sociedade em geral.",
    category: categories.PARTNER,
    github: "http://www.dsc.ufcg.edu.br/~pet/",
    logo: "https://i.imgur.com/7ncijtD.png",
    email: "pet@ccc.ufcg.edu.br",
  },
  {
    name: "dadosjusbr.org",
    slug: "dadosjusbr",
    description:
      "Os principais objetivos do projeto dadosjusbr.org são denunciar a dificuldade no acesso, libertar e consolidar as informações sobre remunerações do sistema de justiça.  Iniciaremos com a esfera estadual e federal dos ministérios públicos e os tribunais eleitorais, do trabalho e de justiça. Fazemos isso combinando a construção comunitária de programas coletores de dados de remunerações com um sistema que consolida, calcula as dificuldades de acessar os dados de cada órgão e publica todas essas informações. ",
    category: categories.SUPPORTED,
    github: "https://github.com/dadosjusbr",
    logo: "https://i.imgur.com/SrxbE5X.png",
    email: "danielfireman@gmail.com",
  },
];

function getOrg(slug) {
  return orgs.find(org => org.slug === slug)
}

module.exports = {
  orgs,
  getOrg,
}
