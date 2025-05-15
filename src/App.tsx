import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark transition-colors duration-300 z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-neon-purple border-r-neon-gold border-b-neon-purple border-l-neon-gold rounded-full animate-spin mb-4"></div>
          <h2 className="text-2xl font-bold text-neon-gold">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-gray-100 relative">
      <ParticleBackground />
      <div className="fixed inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
      <Navbar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;