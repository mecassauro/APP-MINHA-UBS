# Desenvolvimento

## Instalação

### Com Docker

Para instalação do ambiente de desenvolvimento com docker é necessário possuir as seguintes dependências:

 - [Docker](https://www.docker.com/)
 - [docker-compose](https://docs.docker.com/compose/install/)

```
# Dentro da root do projeto utilizar os seguintes comandos:

# Para buildar o projeto
docker-compose build

# Para rodar o projeto dps de buildado
docker-compose up

# Pode ser necessário a utilização de sudo para os comandos acima
```

### Com npm

Para instalação do ambiente de desenvolvimento com npm é necessário possuir as seguintes dependências:

- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

```
# Dentro da root do projeto utilizar os seguintes comandos:

# Para instalar os pacotes do projeto
npm install

# Para rodar o projeto
npm start
```

## Tecnologias usadas

O frontend do Projeto covinfo atualmente utiliza Javascript com React.js.

Para estilização de componentes, se é utilizado o pacote [styled-components](https://styled-components.com/).

Para isolamento do ambiente é utilizado Docker e docker-compose.

Para gerenciamento de pacotes, se é utilizado o npm.