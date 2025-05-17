import React, { useState } from 'react';
import { Mail, MapPin, Send, Github as GitHub, Linkedin, Instagram } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import Button from './Button';
import Card from './Card';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Mock implementation with a timeout to simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate success
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-neon-purple group-hover:text-neon-gold transition-colors duration-300" />,
      label: 'Email',
      value: 'tajaar07@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6 text-neon-purple group-hover:text-neon-gold transition-colors duration-300" />,
      label: 'Location',
      value: 'Chennai, India'
    }
  ];

  const socialLinks = [
    {
      icon: <GitHub className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/Tajaar'
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark to-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-neon-purple to-neon-gold bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-gold mx-auto"></div>
          <p className="mt-4 text-xl text-gray-300">
            Have a question or want to work together? Get in touch!
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimateOnScroll animation="animate-slide-up" delay={100}>
            <Card className="p-8 group">
              <h3 className="text-2xl font-bold text-white group-hover:text-neon-gold transition-colors duration-300 mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.label}</p>
                      <p className="text-base text-white group-hover:text-neon-gold transition-colors duration-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dark-300 p-3 rounded-full text-gray-300 hover:text-neon-gold hover:bg-dark-200 transition-all duration-300 hover:shadow-neon-purple transform hover:scale-110"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-slide-up" delay={200}>
            <Card className="p-8 border-2 border-transparent hover:border-neon-purple/30 group">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-neon-purple focus:border-transparent text-white transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-neon-purple focus:border-transparent text-white transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-dark-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-neon-purple focus:border-transparent text-white resize-none transition-colors duration-300"
                  ></textarea>
                </div>

                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.success 
                      ? 'bg-green-900/20 text-green-400 border border-green-700' 
                      : 'bg-red-900/20 text-red-400 border border-red-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                  icon={isSubmitting ? undefined : <Send />}
                  iconPosition="right"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;