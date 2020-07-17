# Documente o spotify-web-sdk

## Descrição do projeto

O spotify-web-sdk foi criado com o intuito de facilitar o acesso aos dados cedidos pela API Web do Spotify. No lugar de lidar diretamente com as requisições, usuários têm à disposição funções declaradas em alto nível e a diversas classes de tipos, melhorando a experiência de acesso aos dados. Embora todas as funcionalidades originais da API já estejam implementadas na sua versão atual e já haja uma suite de testes em desenvolvimento, ainda falta uma coisa importante: documentação. Com uma boa documentação, seria possível aumentar a compreensão das features adicionais cedidas pelo spotify-web-sdk, ajudando a justificar o seu uso e a atrair novos usuários.

A ideia desse projeto é iniciar o desenvolvimento de uma documentação das funções e modelos disponibilizados pelo spotify-web-sdk com [Docusaurus](http://v2.docusaurus.io).

### Link para o repositório

https://github.com/calluswhatyouwant/spotify-web-sdk

### O que eu ganho participando desse projeto?

Espera-se que o mentorado ou a mentorada trabalhe tanto com desenvolvimento web quanto a escrita técnica de documentação. Ainda, que ao fim do evento e caso seja de seu interesse, encaminhe-se a fazer parte ativamente da organização e seguir aprimorando os resultados obtidos.

### Quais tecnologias e ferramentas devem ser utilizadas?

- JavaScript
- TypeScript
- Markdown
- [React](https://reactjs.org/)
- [Docusaurus](https://v2.docusaurus.io/)

### Links úteis

- Referência principal: [Documentação da API Web do Spotify](https://developer.spotify.com/documentation/web-api/reference/)

### Qual perfil de mentorada ou mentorado se espera?

Espera-se que o mentorado ou mentorada tenha uma compreensão básica de inglês para facilitar o processo, embora não seja um requisito impeditivo. É também interessante que tenha alguma experiência com desenvolvimento web, mas iniciantes são bem-vindos e bem-vindas. Esse é um projeto amigável para quem ainda está começando e todos os interessados e interessadas na proposta são encorajados a discutir sobre e candidatar-se! :sparkles:

## Cronograma sugerido

### Primeiro ciclo

- Familiarização com a estrutura de código do repositório, buscando entender entidades e funcionalidades;
- Configuração do Docusaurus.

### Segundo ciclo

- Documentar instalação e primeiros passos, baseando-se no README do projeto;
- Documentar o módulo `driver`, que cede implementação de configurações principais (a exemplo da inicialização).

### Terceiro ciclo

- Documentar funções contidas nos diversos módulos do código e entidades relacionadas (ordem sugerida: `albums`, `search`, `users`, `tracks`, `artists`).

  - **Exemplo:** No módulo [`albums`](https://github.com/calluswhatyouwant/spotify-web-sdk/blob/master/src/lib/albums.ts), seriam documentadas as funções `getAlbum`, `getSeveralAlbums` e `getAlbumTracks`, descrevendo seus respectivos parâmetros e retornos, e entidades relacionadas: `Album`, `TrackSimplified` e `Page`.

### Adicional

- Documentar demais módulos e entidades de código;
- Desenvolver um _code playground_ para executar código através do portal da documentação.

## Sobre o mentor

Robson Junior é um dos criadores da organização open source **Call Us What You Want** e membro do core team da **OpenDevUFCG**. É estudante de Ciência da Computação na UFCG, cursando o nono (e penúltimo) período da graduação. Trabalha atualmente na parceria entre UFCG e VTEX como desenvolvedor de software, com ênfase em desenvolvimento web.

### Contate-me

- **E-mail:** [jrobsonjr16@gmail.com](mailto:jrobsonjr16@gmail.com)
- **Handle no Discord:** JRobsonJr#6574
- **GitHub:** [JRobsonJr](http://github.com/JRobsonJr)
- **Twitter:** [JRosboJr](http://twitter.com/JRosboJr)
- **LinkedIn:** [JRobsonJr](https://www.linkedin.com/in/jrobsonjr/)
