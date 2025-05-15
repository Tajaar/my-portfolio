import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Button from './Button';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import '../styles/HeroName.css';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-dark-300 to-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/10 rounded-full filter blur-3xl animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20 text-center">
        {/* Hero Name Animation */}
        <div className={`name-container mx-auto transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <span className="key">T</span>
          <span className="key">A</span>
          <span className="key">R</span>
          <span className="key">U</span>
          <span className="key">N</span>
        </div>

        {/* Subtext */}
        <AnimateOnScroll animation="animate-fade-in" delay={600}>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
             Automate, innovate, repeat — the future’s already here.
          </p>
        </AnimateOnScroll>

        {/* Buttons Section */}
        <AnimateOnScroll animation="animate-fade-in" delay={800} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 mb-24">
          <Button
            variant="primary"
            size="lg"
            className="group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-neon-gold text-neon-gold hover:bg-neon-gold/10 hover:shadow-gold-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </AnimateOnScroll>
      </div>

      {/* Scroll Arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-200 rounded-full p-3 shadow-neon-md hover:shadow-neon-xl transition-all duration-500 animate-bounce cursor-pointer z-10"
        aria-label="Scroll to About section"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDown className="h-6 w-6 text-neon-purple" />
      </a>
    </section>
  );
};

export default HeroSection;