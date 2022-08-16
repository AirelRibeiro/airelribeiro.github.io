import React from 'react';
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
import '../style/Skills.css';

export default function Skills() {
  return (
    <div className="skills-div">
      <img
        src={bash}
        alt="bash-icon"
        className="skills-icons"
      />
      <img
        src={git}
        alt="git-icon"
        className="skills-icons"
      />
      <img
        src={gitHub}
        alt="gitHub-icon"
        className="skills-icons"
      />
      <img
        src={js}
        alt="js-icon"
        className="skills-icons"
      />
      <img
        src={html}
        alt="html-icon"
        className="skills-icons"
      />
      <img
        src={jest}
        alt="jest-icon"
        className="skills-icons"
      />
      <img
        src={rtl}
        alt="rtl-icon"
        className="skills-icons"
      />
      <img
        src={react}
        alt="react-icon"
        className="skills-icons"
      />
      <img
        src={redux}
        alt="redux-icon"
        className="skills-icons"
      />
      <img
        src={mysql}
        alt="mysql-icon"
        className="skills-icons"
      />
      <img
        src={docker}
        alt="docker-icon"
        className="skills-icons"
      />
    </div>
  );
}
