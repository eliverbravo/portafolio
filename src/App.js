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
import VideoProd2 from './components/VideoProductionProjects/VideoProd2.js';
import Design1 from './components/DesignProjects/design1.js';
import Design2 from './components/DesignProjects/design2.js';
import Design3 from './components/DesignProjects/design3.js';
import Design4 from './components/DesignProjects/design4.js';
import Design5 from './components/DesignProjects/design5.js';






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
          <Route path="/VideoProd2" element={<VideoProd2 />} /> 
          <Route path="/Design1" element={<Design1/>} />
          <Route path="/Design2" element={<Design2/>} />  
          <Route path="/Design3" element={<Design3/>} />     
          <Route path="/Design4" element={<Design4/>} />     
          <Route path="/Design5" element={<Design5/>} />   
        </Routes>
      
    </Router>
  );
}

export default App;