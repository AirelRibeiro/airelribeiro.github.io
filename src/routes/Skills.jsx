import React, { useEffect, useState } from 'react';
import skills from '../helpers/skillsData';
import '../style/Skills.css';

export default function Skills() {
  const [showSkill, setShowSkill] = useState([]);
  const [showTitle, setShowTitle] = useState(true);

  const loadingSkills = () => {
    const arrSkills = skills.map((s, i) => i);
    setShowSkill(arrSkills);
  };

  useEffect(() => {
    loadingSkills();
  }, []);

  const showDescription = (index) => {
    const newArr = showSkill.map((s, i) => {
      if (i === index) return true;
      return i;
    });
    setShowSkill(newArr);
    setShowTitle(false);
  };

  const hiddeDescription = () => {
    const newArr = showSkill.map((s, i) => i);
    setShowSkill(newArr);
    setShowTitle(true);
  };

  return (
    <div className="skills-div">
      { showTitle && <h1>Passe o mouse para ler mais sobre minhas skills 😉</h1> }
      { skills.map((s, i) => (
        <div key={s.name}>
          <img
            src={s.icon}
            alt={s.name}
            className="skill-icons"
            onMouseOver={() => showDescription(i)}
            onMouseOut={hiddeDescription}
            onFocus=""
            onBlur=""
          />
          {showSkill[i] === true && (
            <div className="description">
              <h3>{ s.description }</h3>
            </div>
          )}
        </div>
      )) }
    </div>
  );
}
