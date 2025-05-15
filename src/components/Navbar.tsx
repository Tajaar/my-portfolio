import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-dark/90 backdrop-blur-sm shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center space-x-2 group"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-gold p-0.5 transition-all duration-300 group-hover:shadow-neon-purple">
                <div className="h-full w-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-neon-purple to-neon-gold bg-clip-text text-transparent">Portfolio</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                    activeSection === link.href.substring(1)
                      ? 'text-neon-gold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-purple to-neon-gold transform scale-x-0 transition-transform duration-300 origin-left ${
                    activeSection === link.href.substring(1) ? 'scale-x-100' : ''
                  }`}></span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-neon-gold hover:bg-dark-200 transition-all"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-dark/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-neon-gold hover:bg-dark-200 transition-all"
          >
            <X className="block h-6 w-6" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center justify-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-6 py-4 text-xl font-medium rounded-md transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-neon-gold'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;