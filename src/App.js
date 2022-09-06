import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Aside from './components/Aside';
import Skills from './routes/Skills';
import Header from './components/Header';
import './style/App.css';

// display: flex;
// width: 100vw;

function App() {
  const [showAside, setShowAside] = useState(false);
  return (
    <div className="app">
      <MenuIcon className="menu" id="a" fontSize="large" onClick={() => setShowAside(!showAside)} />
      <Aside showAside={showAside} setShowAside={setShowAside} />
      <Header />
      <div>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <footer>
        <a href="../helpers/airel-curriculo.pdf" download>
          <img
            src="https://img.icons8.com/nolan/512/open-resume.png"
            alt="cv-icon"
            className="header-icons"
          />
        </a>
        <p>Cliando aqui você pode acessar meu currículo!</p>
      </footer>
    </div>
  );
}

export default App;
