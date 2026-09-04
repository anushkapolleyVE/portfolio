import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Learning } from './components/Learning';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-bg text-text-primary min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Learning />
        <Process />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
