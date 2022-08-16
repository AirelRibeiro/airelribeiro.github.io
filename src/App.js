import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Aside from './components/Aside';
import Skills from './routes/Skills';
import './style/App.css';

// display: flex;
// width: 100vw;

function App() {
  const [showAside, setShowAside] = useState(false);
  return (
    <div className="app">
      <MenuIcon className="menu" fontSize="large" onClick={() => setShowAside(!showAside)} />
      <Aside showAside={showAside} setShowAside={setShowAside} />
      <div>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
