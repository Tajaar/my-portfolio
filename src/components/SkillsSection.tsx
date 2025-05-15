import React from 'react';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import Card from './Card';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', proficiency: 90, category: 'Programming Languages' },
  { name: 'SQL', proficiency: 85, category: 'Programming Languages' },
  
  // Frameworks & Tools
  { name: 'TensorFlow', proficiency: 85, category: 'Frameworks & Tools' },
  { name: 'PyTorch', proficiency: 80, category: 'Frameworks & Tools' },
  { name: 'Streamlit', proficiency: 80, category: 'Frameworks & Tools' },
  { name: 'Git', proficiency: 90, category: 'Frameworks & Tools' },
  { name: 'Pandas', proficiency: 90, category: 'Frameworks & Tools' },
  { name: 'NumPy', proficiency: 85, category: 'Frameworks & Tools' },
  { name: 'Matplotlib', proficiency: 80, category: 'Frameworks & Tools' },
  { name: 'Seaborn', proficiency: 80, category: 'Frameworks & Tools' },
  { name: 'PostgreSQL', proficiency: 85, category: 'Frameworks & Tools' },
  
  // Data & ML Skills
  { name: 'Machine Learning', proficiency: 90, category: 'Data & ML Skills' },
  { name: 'Deep Learning', proficiency: 85, category: 'Data & ML Skills' },
  { name: 'Data Analysis', proficiency: 90, category: 'Data & ML Skills' },
  { name: 'LLM', proficiency: 80, category: 'Data & ML Skills' },
];

const categories = ['Programming Languages', 'Frameworks & Tools', 'Data & ML Skills'];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-light-100 dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">
            <span className="bg-gradient-to-r from-neon-purple to-neon-gold bg-clip-text text-transparent">
              Skills & Proficiency
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-gold mx-auto"></div>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Technical expertise and competencies
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <AnimateOnScroll
              key={category}
              animation="animate-fade-in"
              delay={categoryIndex * 100}
            >
              <Card className="p-6 bg-white dark:bg-dark-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {category}
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                          <span>{skill.name}</span>
                          <span>{skill.proficiency}%</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-purple to-neon-gold rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.proficiency}%` }}
                          >
                            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;