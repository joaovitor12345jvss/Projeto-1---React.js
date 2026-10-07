# Zelda: Hyrule Compendium - Projeto 1 (Frontend SPA)

## Descrição do Projeto
O Projeto 1 da disciplina Programação Web Fullstack consiste no desenvolvimento da camada Frontend de uma aplicação web moderna. A aplicação utiliza React.js e requisições assíncronas via Axios, sendo desenvolvida no conceito de SPA (Single Page Application). Utilizamos a API pública [Hyrule Compendium](https://hyrule-compendium.com/) para criar uma enciclopédia interativa do universo de Zelda, com direito a filtros dinâmicos e janelas modais detalhadas.

## Integrantes do Grupo
* **Gabriel Mohamad** — RA/Matrícula: 2779730
* **João Vitor Souza Santiago** — RA/Matrícula: 2767082
* **Abner Eduardo** — RA/Matrícula: 2766930

## Tecnologias e Requisitos Cumpridos
* **React.js & JavaScript (ES6+)**: Base da interface reativa.
* **Consumo de API JSON (AJAX)**: Integração com a Hyrule Compendium API v3.
* **Biblioteca Externa**: Utilização do `react-router-dom` para garantir o funcionamento como Single Page Application (SPA), permitindo a navegação entre a página Início e a página Sobre sem recarregar o navegador.
* **Hook React Obrigatório**: Implementação do `useMemo` na página principal (`Home.jsx`) para otimizar a barra de pesquisa e os filtros de categoria, evitando re-renderizações desnecessárias.
* **UI/UX e Funcionalidades Extras**: Implementação de design temático (fontes customizadas e backgrounds dinâmicos) e desenvolvimento de um Modal interativo para exibição de detalhes dos itens (drops e locais comuns).

## Divisão de Tarefas
Para garantir que cada integrante fosse responsável por uma parte bem definida, o trabalho foi dividido da seguinte forma:
* **Gabriel Mohamad**: Configuração inicial do repositório no GitHub, estruturação das pastas, desenvolvimento da interface, estruturação do layout HTML/CSS com tema moderno (Glassmorphism e Zelda theme)
* **João Vitor Souza Santiago**:Implementação da camada de serviços ( `api.js` com Axios para consumo da API). Criação dos arquivos Home.jsx e Sobre.jsx.
* **Abner Eduardo**: Configuração do `react-router-dom` (ficheiro `App.jsx`).

## Documentação de Ferramentas de Apoio
* **Vite**: Utilizado para inicialização rápida e otimizada do ambiente React.
* **Git/GitHub**: Controle de versão e cadência de commits em equipa.
* **Inteligência Artificial (Gemini)**: Utilizada como assistente de programação (pair programming). A IA ajudou a estruturar inicialmente as rotas da SPA, a solucionar o problema de mapeamento do JSON misto retornado pela nova versão (v3) da API, a ajustar conflitos de especificidade de CSS nas fontes customizadas (*HyliaSerif*) e a depurar a lógica de estado de clique no Modal. O uso focou-se em acelerar a resolução de bugs e garantir o alinhamento com os requisitos da disciplina.

## Como rodar o projeto localmente
1. Clone este repositório para a sua máquina.
2. Abra o terminal na pasta raiz do projeto e execute `npm install` para instalar todas as dependências.
3. Execute `npm run dev` para iniciar o servidor local.
4. Abra o link gerado no terminal (geralmente `http://localhost:5173`) no seu navegador.
