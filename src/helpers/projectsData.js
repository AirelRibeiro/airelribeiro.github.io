import wallet from '../images/wallet-image.png';
import talker from '../images/talker.png';
import store from '../images/store.png';
import blogs from '../images/blogs.png';
import ss from '../images/ss.png';
import sw from '../images/star.gif';
import sequelize from '../icons/sequelize.svg';
import js from '../icons/javascript.svg';
import mysql from '../icons/mysql.svg';
import react from '../icons/react.svg';
import redux from '../icons/redux.svg';
import node from '../icons/nodedotjs.svg';
import express from '../icons/express.svg';
import chai from '../icons/chai.svg';
import docker from '../icons/docker.svg';
import mocha from '../icons/mocha.svg';
import css from '../icons/css3.svg';
import swagger from '../icons/swagger.svg';
import postman from '../icons/postman.svg';
import nodemon from '../icons/nodemon.svg';
import jwt from '../icons/jsonwebtokens.svg';
import hooks from '../icons/react_hooks.png';
import hammer from '../icons/hammer.svg';

const projects = [
  {
    name: 'AirWallet',
    icon: wallet,
    description: 'AirWallet é uma carteira de controle de gastos com conversor de moedas, nela os usuários podem adicionar, visualizar, atualizar e excluir seus gastos. ',
    tecnologies: [js, react, redux, css],
    repository: 'https://github.com/AirelRibeiro/wallet',
  },
  {
    name: 'Talker Manager',
    icon: talker,
    description: 'Talker Manager é API de palestras, constuída com CRUD (Create, Read, Update e Delete) permite manipulação de dados das palestras o dos palestrantes.',
    tecnologies: [docker, node, express, nodemon, swagger, postman],
    repository: 'https://github.com/AirelRibeiro/talker-manager',
  },
  {
    name: 'Store Manager',
    icon: store,
    description: 'API RESTful que simula um sistema de gerenciamento de vendas, onde é possível criar, ler, deletar e atualizar (CRUD) produtos e vendas.',
    tecnologies: [mocha, chai, docker, mysql, node, express, swagger, postman],
    repository: 'https://github.com/AirelRibeiro/store-manager',
  },
  {
    name: 'Blogs API',
    icon: blogs,
    description: 'Blogs API é uma API RESTful ligada a um banco de dados para a produção de conteúdo de um blog.',
    tecnologies: [docker, sequelize, mysql, jwt, node, express, postman],
    repository: 'https://github.com/AirelRibeiro/blogs-api',
  },
  {
    name: 'Solar System',
    icon: ss,
    description: 'Aplicação React sobre os panetas do nosso sistema solar contendo imagens dos planetas e as missões conhecidas a cada um deles.',
    tecnologies: [js, react, css],
    repository: 'https://github.com/AirelRibeiro/solar-system',
  },
  {
    name: 'Star Wars Planets',
    icon: sw,
    description: 'Página contendo os planetas do universo Star Wars, com a possibilidade de filtrar os planetas por suas características, tais como população e diâmetro.',
    tecnologies: [js, react, hooks, css],
    repository: 'https://github.com/AirelRibeiro/star-wars-planets',
  },
  {
    name: 'Tu Tu Tunes',
    icon: hammer,
    description: 'Projeto em construção... Mas não se preocupe, assim que estiver pronto para o mundo, colocarei ele aqui! 😉',
    c: 'Em construção',
    tecnologies: [react, css],
    repository: 'https://github.com/AirelRibeiro/tunes',
  },
];

export default projects;
