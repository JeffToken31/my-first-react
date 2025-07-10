import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import TransversalSkills from './components/TransversalSkills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './App.css';
import Stack from './components/Stack';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Stack />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <TransversalSkills />
              <Languages />
              <Interests />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
