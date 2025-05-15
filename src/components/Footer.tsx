import React from 'react';
import { Github as GitHub, Linkedin, Instagram, Heart } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <GitHub className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/tajaar'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tajaar'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      href: 'https://instagram.com/_tarun_a'
    }
  ];

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-dark-300 text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      
      <div className="absolute inset-0 bg-dots-pattern opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll animation="animate-fade-in" className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-neon-purple to-neon-gold bg-clip-text text-transparent mb-4">Tarun</div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Automate, innovate, repeat — the future’s already here.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-purple transition-colors duration-300 transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-gold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-neon-gold transition-colors duration-300 inline-block relative group"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-neon-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-gold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-neon-purple transition-colors duration-300">tajaar07@gmail.com</li>
              <li className="hover:text-neon-purple transition-colors duration-300">Chennai, India</li>
            </ul>
          </div>
        </AnimateOnScroll>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Tarun A. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;