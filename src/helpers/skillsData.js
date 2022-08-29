import docker from '../icons/docker.svg';
import gitHub from '../icons/github.svg';
import git from '../icons/git.svg';
import bash from '../icons/gnubash.svg';
import html from '../icons/html5.svg';
import js from '../icons/javascript.svg';
import jest from '../icons/jest.svg';
import mysql from '../icons/mysql.svg';
import react from '../icons/react.svg';
import redux from '../icons/redux.svg';
import rtl from '../icons/testinglibrary.svg';
import express from '../icons/express.svg';
import chai from '../icons/chai.svg';
import node from '../icons/nodedotjs.svg';
import mocha from '../icons/mocha.svg';
import css from '../icons/css3.svg';

const skills = [
  {
    name: 'node_js',
    icon: node,
    description: 'Node.js é um software de código aberto que permite a execução de códigos JavaScript fora de um navegador web; ele permite ao usuário criar aplicações sem depender do browser.',
  },
  {
    name: 'express',
    icon: express,
    description: 'Express é um framework para aplicativo da web do Node.js, ele facilita requisições de diferentes verbos HTTP em diferentes URLs; muito popular, ele é a biblioteca inexplícita de diversos outros frameworks.',
  },
  {
    name: 'my_sql',
    icon: mysql,
    description: 'MySQL é um sistema open-source de gerenciamento de banco de dados que utiliza o modelo cliente-servidor. Desenvolvido e suportado pela Oracle, ele trabalha com bancos relacionais SQL (Structured Query Language).',
  },
  {
    name: 'docker',
    icon: docker,
    description: 'Docker é uma plataforma que permite a criação e administração de ambientes virtuais isolados; ele possibilita emapacotar aplicações ou ambientes, tornando-os acessíveeis em qualque máquina com o Docker instalado.',
  },
  {
    name: 'git',
    icon: git,
    description: 'O Git é um sistema open-source de controle de versão, ele permite criar um histórico de alterações no código dos projetos e voltar para qualquer ponto para saber como o código estava naquele momento.',
  },
  {
    name: 'mocha',
    icon: mocha,
    description: 'Mocha é um framework  de teste JavaScript, ele permite uma organização nos testes e o executa em série, permitindo relatórios flexíveis e precisos.',
  },
  {
    name: 'chai',
    icon: chai,
    description: 'O Chai é uma biblioteca acessível para escrever asserções para o projeto de testes JavaScript.',
  },
  {
    name: 'git_hub',
    icon: gitHub,
    description: 'GitHub é o maior repositório de dados compartilhados do mundo, majoritariamente usada por desenvolvedores, permite uma hospedagem prática de código-fonte e arquivos em nuvem.',
  },
  {
    name: 'bash',
    icon: bash,
    description: 'Bash é significa Bourne Again Shell, que é ao mesmo tempo um shell Unix e um interpretador de linguagem de comando.',
  },
  {
    name: 'html',
    icon: html,
    description: 'O HTML (Hyperdescription Markup Language) é uma linguagem de marcação, ela cria e estrutura seções, parágrafos e links utilizando diferentes elementos, tags ou atributos.',
  },
  {
    name: 'css',
    icon: css,
    description: 'CSS (Cascading Style Sheets) possibilita a separação entre o formato e o conteúdo de um documento, sendo muito útil na personalização visual dos sites.',
  },
  {
    name: 'java_script',
    icon: js,
    description: 'JavaScript é uma linguagem de programação que permite implementar itens complexos em páginas web; sempre que uma página faz mais do que mostrar informação estática, o JavaScript provavelmente está envolvido.',
  },
  {
    name: 'jest',
    icon: jest,
    description: 'É um framework de testes desenvolvido pelo Facebook com o objetivo de rodar os testes de uma maneira eficiente e com menos configurações.',
  },
  {
    name: 'react',
    icon: react,
    description: 'É uma biblioteca JavaScript declarativa que foi desenvolvida pelo Facebook em 2011 com o objetivo de criar aplicações front-end. Eficiente e flexível, React é uma das bibliotecas mais prestigiadas do mercado, presente em mais de 3 milhões de projetos.',
  },
  {
    name: 'redux',
    icon: redux,
    description: 'É uma biblioteca construída para gerenciar os estados de uma aplicação, ela possibilita que caso os componentes precisem acessar o estado uns dos outros, acessem as informações no estado geral, suportado pelo Redux.',
  },
  {
    name: 'rtl',
    icon: rtl,
    description: 'React Testing Library é um conjunto de utilitários que permitem o teste de componentes React, simulando a forma como o software funciona sem depender dos detalhes de implementação.',
  },
];

export default skills;
