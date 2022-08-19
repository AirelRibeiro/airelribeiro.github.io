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
import sinon from '../icons/logo.png';
import css from '../icons/css3.svg';

const skills = [
  {
    name: 'node_js',
    icon: node,
    text: 'Node.js é um software de código aberto que permite a execução de códigos JavaScript fora de um navegador web; ele permite ao usuário criar aplicações sem depender do browser.',
  },
  {
    name: 'express',
    icon: express,
    text: 'Express é um framework para aplicativo da web do Node.js, ele facilita requisições de diferentes verbos HTTP em diferentes URLs. O Express é o framework Node mais popular e a biblioteca inexplícita de diversos outros frameworks.',
  },
  {
    name: 'my_sql',
    icon: mysql,
    text: 'MySQL é um sistema open-source de gerenciamento de banco de dados que utiliza o modelo cliente-servidor. Desenvolvido e suportado pela Oracle, ele trabalha com bancos relacionais SQL (Structured Query Language).',
  },
  {
    name: 'docker',
    icon: docker,
    text: 'Docker é uma plataforma que permite a criação e administração de ambientes virtuais isolados. Com Docker é possível empacotar uma aplicação ou ambiente dentro de um container, tornando-o acessível em qualque máquina que tenha o Docker instalado.',
  },
  {
    name: 'git',
    icon: git,
    text: 'O Git é um sistema open-source de controle de versão, ele permite criar um histórico de alterações no código dos projetos e voltar para qualquer ponto para saber como o código estava naquele momento.',
  },
  {
    name: 'mocha',
    icon: mocha,
    text: 'Mocha é um framework  de teste JavaScript, ele permite uma organização nos testes e o executa em série, permitindo relatórios flexíveis e precisos.',
  },
  {
    name: 'chai',
    icon: chai,
    text: 'O Chai é uma biblioteca acessível para escrever asserções para o projeto de testes JavaScript.',
  },
  {
    name: 'sinon',
    icon: sinon,
    text: 'O Sinon é um pacote de código aberto que com diversas funcionalidades, tais como stubs e spies, que facilitam os testes no JavaScript.',
  },
  {
    name: 'git_hub',
    icon: gitHub,
    text: 'GitHub é o maior repositório de dados compartilhados do mundo, majoritariamente usada por desenvolvedores, permite uma hospedagem prática de código-fonte e arquivos em nuvem. O GitHub torna seguro para vários membros de um time trabalhem juntos no mesmo projeto, cada um fazendo a sua versão.',
  },
  {
    name: 'bash',
    icon: bash,
    text: 'Bash é significa Bourne Again Shell, que é ao mesmo tempo um shell Unix e um interpretador de linguagem de comando.',
  },
  {
    name: 'html',
    icon: html,
    text: 'O HTML (HyperText Markup Language) é uma linguagem de marcação, essencial para o funcionamento de sites; ela cria e estrutura seções, parágrafos e links utilizando diferentes elementos, tags ou atributos. Sendo uma linguagem de base, pode ser usada em conjunto com outras linguagens de programação',
  },
  {
    name: 'css',
    icon: css,
    text: 'CSS (Cascading Style Sheets) possibilita a separação entre o formato e o conteúdo de um documento. Ela ajuda na personalização visual dos sites, otimizando o conteúdo das páginas e proporcionando uma interface adaptável e consentânea ao usuário.',
  },
  {
    name: 'java_script',
    icon: js,
    text: 'JavaScript é uma linguagem de programação que permite [...] implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar [...] informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — [...] o JavaScript provavelmente está envolvido. (MOZILLA DEVELOPER NETWORK, 2022)',
  },
  {
    name: 'jest',
    icon: jest,
    text: 'É um framework de testes desenvolvido pelo Facebook com o objetivo de rodar os testes de uma maneira eficiente e com menos configurações.',
  },
  {
    name: 'react',
    icon: react,
    text: 'É uma biblioteca JavaScript declarativa que foi desenvolvida pelo Facebook em 2011 com o objetivo de criar aplicações front-end. Eficiente e flexível, React é uma das bibliotecas mais prestigiadas do mercado, presente em mais de 3 milhões de projetos.',
  },
  {
    name: 'redux',
    icon: redux,
    text: 'É uma biblioteca construída para gerenciar os estados de uma aplicação, ela possibilita que cada componente seja responsável apenas pelo seu estado e que, caso os componentes precisem acessar o estado uns dos outros, acessem as informações no estado geral, suportado pelo Redux. Bastante efetivo em evitar State Dealing, o Redux é comumente usado com bibliotecas como React na criação de interfaces de usuário.',
  },
  {
    name: 'rtl',
    icon: rtl,
    text: 'React Testing Library é um conjunto de utilitários que permitem testar componentes React sem depender dos detalhes de implementação. Essa abordagem facilita a refatoração e também te orienta para as melhores práticas de acessibilidade (FACEBOOK OPEN SOURCE, 2021).',
  },
];

export default skills;
