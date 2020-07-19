---
title: Requisitos do Repositório
---

## Estrutura

Acreditamos que um repositório de código que possui uma boa documentação facilitará a adesão de novos contribuidores e tornará a experiência da comunidade melhor. Por isso, definimos uma estrutura básica para ser seguida:

- `README.md`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- `LICENSE`

> Você pode checar mais detalhes de cada arquivo no artigo "[Iniciando um Projeto Open Source](https://opensource.guide/pt/starting-a-project/)" da Open Source Guide.

### `README.MD`

O `README.MD` é o primeiro documento visto quando se entra no repositório, por isso é de suma importância que o mesmo contenha informações que responda às seguintes perguntas:

- O que esse projeto faz?
- Por onde começo?
- Como posso conseguir ajuda, se eu precisar?

Você pode tratar de outras questões mais especificas do seu repositório, como se há outros repositórios associados ou como os mantenedores lidam com contribuições.

### `CODE_OF_CONDUCT.md`

O **código de conduta** ajuda a criar regras básicas acerca do comportamento esperado dos participantes do seu projeto. É de suma importância que você garanta um ambiente saudável e respeitoso para toda a comunidade em torno do seu repositório.

Você não precisa escrever o seu próprio código de conduta do zero; é possível e recomendado adaptar os já existentes, como o do [Contributor Covenant](https://www.contributor-covenant.org/), que também possui [tradução para português](https://www.contributor-covenant.org/translations/).

### `CONTRIBUTING.md`

O `CONTRIBUTING` explica aos seus potenciais contribuidores como participar do projeto e também pode comunicar suas expectativas de padrão de contribuição. Pode conter informações como:

- Como abrir relatório de _bug_ ou _feature_ (_issue_);
- Como configurar seu ambiente;
- Os tipos de contribuição que se espera receber;
- Como abrir uma sugestão de código (_pull request_).

Use um tom acolhedor, pois lembre que você está se comunicando com possivelmente um contribuidor de primeira viagem!

### `LICENSE`

Uma **licença** garante a distribuição e acesso do seu repositório, mas também te protege de situações legais problemáticas, como a cópia, por exemplo.

Você não precisa escrever uma licença do zero! Recomenda-se adicionar uma das existentes que mais se adapta ao seu projeto. Siga esse [guia](https://choosealicense.com/) para escolher sua licença.

## Dicas

- Se sua ferramenta permitir, use `labels` para categorizar _issues_ e _pull requests_;
- Crie templates de _issue_ e _pull requests_ para incentivar descrições claras e concisas;
- Você pode incluir ferramentas de **CI/CD** (integração/entrega contínuas) para facilitar executar testes no repositório, como também o procedimento de _deploy_.
