<p align="center">
<img src="images/logo.png" width="100" height="100"> 
</p>

# Desenvolvimento de uma API de Gestão de Tarefas 

> Uma API RESTful para a gestão de tarefas, desenvolvida em Node.js, permitindo operações como criar, atualizar, apagar e listar tarefas.



## Objetivo

O propósito deste trabalho prático é criar uma API RESTful para a gestão de tarefas, possibilitando aos usuários realizar operações como criar, atualizar, apagar e listar tarefas. A API foi projetada com a flexibilidade necessária para integração em diversas aplicações de gestão de tarefas, como listas de afazeres, calendários e mais.

## Descrição

Neste projeto, a tarefa é desenvolver uma API de gestão de tarefas utilizando Node.js. A API permitirá que os usuários executem as seguintes operações:

### Criação de Tarefa

- Parâmetros: Título, descrição, data de vencimento, prioridade e estado.

### Atualização de Tarefa

- Incluindo a capacidade de marcar como concluída, alterar estado ou modificar outros campos.

### Eliminação de Tarefa

- Com base no ID único da tarefa.

### Listagem de Tarefas

- Com opção de filtrar por critérios como prioridade, data de vencimento ou estado.

## Requisitos Técnicos

- A API segue os princípios RESTful, fornecendo respostas em formato JSON.
- Tratamento de erros adequado, com códigos de estado HTTP apropriados e mensagens descritivas.
- Implementação de autenticação básica, como tokens de API, garantindo a segurança e autenticidade das operações.
- Utilização de uma base de dados para armazenar informações das tarefas, podendo escolher entre uma base de dados relacional (ex: MySQL) ou NoSQL (ex: MongoDB).
- Documentação clara da API no formato OpenAPI, descrevendo endpoints disponíveis, parâmetros e respostas.


---


## Metodologia

>O trabalho é realizado segundo a metodologia SCRUM e contará com vários sprints.

- Cada sprint terá duração de 1 a 2 semanas, com início em 02 de novembro. As datas limite para submissão das tarefas do sprint são indicadas no cartão correspondente da board do Trello.

- O trabalho desenvolvido durante um sprint deverá ser apresentado ao docente na aula seguinte à data de entrega do trabalho. O grupo deverá solicitar ao docente a apresentação do sprint durante um período que não interfira com o apoio do docente à implementação das fichas de trabalho.

- A submissão do trabalho do sprint resume-se à execução de um commit no Github do grupo. O repositório deverá ser configurado como privado e deverá incluir o docente das aulas práticas na equipa.

- O trabalho desenvolvido durante o sprint deverá ser submetido e apresentado pelo product owner (responsável pelo sprint) dessa semana. O papel de product owner deverá ser atribuído a cada sprint de forma a garantir que cada elemento do grupo possa assumir o papel pelo menos duas vezes durante a realização do projeto.

---

## Sprint 1: Criação dos Diagramas de Contexto e Containers

### Objetivo

O primeiro sprint concentra-se na elaboração dos Diagramas de Contexto e Containers para fornecer uma visão abrangente da arquitetura da API de Gestão de Tarefas. O objetivo principal é estabelecer as interações entre a API e os sistemas externos, além de mapear os componentes internos e a infraestrutura necessária.

### Tarefas

Durante este sprint, as atividades incluem:

1. **Diagrama de Contexto:**
   - Identificar e representar as interfaces externas que interagem com a API.
   - Mapear as principais interações e fluxos de informação entre a API e outros sistemas.

2. **Diagrama de Containers:**
   - Descrever os principais componentes de software da API.
   - Identificar as dependências entre esses componentes.
   - Representar a infraestrutura necessária para suportar a aplicação.

3. **Revisão e Ajuste:**
   - Revisar os diagramas para garantir clareza e precisão.
   - Realizar ajustes conforme necessário, considerando feedback da equipa.
  
---

### Diagrama de Contexto

<img src="Diagramas de Contexto e Containers/Diagrama De Contexto.png" width="360" height="541">

### Diagrama de Containers
<img src="Diagramas de Contexto e Containers/Diagrama de Containers.png" width="360" height="560">   

---
