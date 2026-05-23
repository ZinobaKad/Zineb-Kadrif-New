
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppFab from './components/WhatsAppFab';
import DrawingCanvas from './components/DrawingCanvas';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <DrawingCanvas 
          isActive={isDrawingMode} 
          onToggle={() => setIsDrawingMode(!isDrawingMode)} 
        />
      )}

      <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoading ? 'opacity-0 overflow-hidden h-screen' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
        {!isLoading && <WhatsAppFab />}
      </div>
    </>
  );
};

export default App;
