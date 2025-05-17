import React from 'react';
import { Code, Database, Settings, Sparkles, Download } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import Button from './Button';
import Card from './Card';

const AboutSection: React.FC = () => {
  const skills = [
    { 
      icon: <Code className="h-8 w-8 text-neon-purple group-hover:text-neon-gold transition-colors duration-300" />, 
      title: 'AI/ML Development', 
      description: 'Designing, training, and deploying machine learning models using TensorFlow, PyTorch, and Scikit-Learn to drive intelligent automation and predictive systems.' 
    },
    { 
      icon: <Database className="h-8 w-8 text-neon-purple group-hover:text-neon-gold transition-colors duration-300" />, 
      title: 'Data Science', 
      description: 'Performing in-depth exploratory analysis, statistical modeling, and data-driven storytelling using Python, Pandas, NumPy, and SQL to uncover actionable insights.' 
    },
    { 
      icon: <Sparkles className="h-8 w-8 text-neon-purple group-hover:text-neon-gold transition-colors duration-300" />, 
      title: 'LLMs & Agentic AI', 
      description: 'Building intelligent agents powered by Large Language Models (LLMs), enabling autonomous task execution and contextual understanding with frameworks like LangChain and OpenAI.' 
    },
    { 
      icon: <Settings className="h-8 w-8 text-neon-purple group-hover:text-neon-gold transition-colors duration-300" />, 
      title: 'Automation & AI Ops', 
      description: 'Developing automated workflows and pipelines using tools like Airflow, Selenium, and APIs to streamline data processes and operationalize AI solutions.' 
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-neon-purple to-neon-gold bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-gold mx-auto"></div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="animate-slide-up" className="space-y-6">
            <div className="flex justify-center md:justify-start mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-gold rounded-full blur opacity-70"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-dark shadow-xl"
                />
              </div>
            </div>
            <p className="text-lg text-gray-300">
              Hi there! I'm Tarun, a passionate AI and Data Science graduate with a deep curiosity for building intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300">
              I hold a degree in Artificial Intelligence and Data Science, and I specialize in creating practical, end-to-end solutions using machine learning, data analysis, and automation.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you'll find me exploring tech trends, writing blogs, or experimenting with personal projects that blend creativity and computation.
            </p>
            <div className="pt-6">
              <Button
                variant="primary"
                icon={<Download />}
                iconPosition="left"
                onClick={() => window.open('/Tarun_Resume.pdf', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="animate-fade-in" 
                delay={index * 100}
              >
                <Card className="p-6 group bg-dark-200 flex flex-col justify-between min-h-[300px]">
                  <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-neon-gold transition-colors duration-300 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {skill.description}
                  </p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;