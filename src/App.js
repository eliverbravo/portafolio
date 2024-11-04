import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';
import Contact from './components/Contact.js';
import Jams from './components/Jams.js';
import MyArt from './components/MyArt.js';
import Photography from './components/Photography.js';
import Design from './components/design.js';
import Photography1 from './components/PhotographyProjects/Photography1.js';
import VideoProduction from './components/VideoProduction.js';
import VideoProd1 from './components/VideoProductionProjects/VideoProd1.js';


function App() {
  return (
    <Router>
      
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<Home />} />

          {/* Ruta para las diferentes secciones */}
          <Route path="/AboutMe" element={<AboutMe/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Jams" element={<Jams/>} />
          <Route path="/MyArt" element={<MyArt/>} />
          <Route path="/Design" element={<Design/>} />
          <Route path="/Photography" element={<Photography/>} />
          <Route path="/VideoProduction" element={<VideoProduction/>} />
          {/* Nueva ruta para la menu de proyectos */}
          <Route path="/Photography1" element={<Photography1 />} />
          <Route path="/VideoProd1" element={<VideoProd1 />} />          
        </Routes>
      
    </Router>
  );
}

export default App;