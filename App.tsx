
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Publications from './components/Publications';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary font-sans">
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;