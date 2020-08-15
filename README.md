# Andromedev [![Netlify Status](https://api.netlify.com/api/v1/badges/f17ca792-e1b9-448b-af31-5a74d0451f98/deploy-status)](https://app.netlify.com/sites/andromedev/deploys)

Esse repositório contém o código do [site do Andromedev](https://andromedev.opendevufcg.org/).

## Como funciona

O site é feito utilizando [Gatsby](https://www.gatsbyjs.org/) que é um gerador de site estático que utiliza [React](https://reactjs.org/) e [GraphQL](https://graphql.org/), e para ajudar na estilização usamos [Tailwindcss](https://tailwindcss.com/).

Para dados de organizações e projetos utilizamos um [CMS](https://pt.wikipedia.org/wiki/Sistema_de_gerenciamento_de_conte%C3%BAdo) chamado [Prismic](https://prismic.io/) e consumimos aqui no Gatsby.

### Estrutura

Nosso código se concentra dentro da página `src/`. Abaixo segue a explicação da estrutura do código e o funcionamento de cada componente.

```
/assets             --> Contém imagens, fontes, scrips que complementam o conteúdo do site.
/components         --> Componentes em React que montam o site.
    /layouts        --> Layout básico de todas as páginas.
/lib                --> Contém alguns dados que usamos no site.
/pages              --> Cada arquivo representa uma página no site e pode conter páginas aninhadas utilizando subpastas.
/styles             --> Folhas de estilo para o site.
```

## Desenvolvimento

Antes de começar a desenvolver, siga esse [tutorial](https://github.com/OpenDevUFCG/andromedev/wiki/Configurando-Prismic) para configurar o Prismic.

Para executar o site localmente, é necessário ter o NodeJS e Yarn instalados e rodar os comandos abaixo:

```sh
yarn && yarn develop
```

Após isso acesse http://localhost:8000/ para visualizar o site.

Caso haja algum problema de build, antes de reportar, rode esse comando dentro do repositório e tente ver se o problema é resolvido:

```sh
yarn clean
```

## Como contribuir

Sinta-se livre para reportar erros, tirar dúvidas, dar sugestões e mandar mensagens bonitinhas pra gente nas issues :heart: e não esquece de entrar no nosso [discord](https://chat.opendevufcg.org/) pra conversar com a gente!
