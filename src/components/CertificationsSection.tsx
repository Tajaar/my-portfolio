import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';
import Card from './Card';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
 {
    title: "IBM Data Analyst",
    issuer: "Coursera - IBM",
    date: "April 2024",
    credentialUrl: "https://coursera.org/verify/professional-cert/BB3EQDHCZT4J"
  },
  {
    title: "Digital Marketing",
    issuer: "Udemy",
    date: "August 2023",
    credentialUrl: "https://www.ude.my/UC-cb3dcb8a-1a38-489b-ac07-325843406669/"
  },
  {
    title: "Python Professional",
    issuer: "Edureka",
    date: "July 2023",
    credentialUrl: "https://www.edureka.co/my-certificate/5e9137ade06eadfadb402b95ca9030ed"
  }
];

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-light-200 dark:bg-dark-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="animate-fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">
            <span className="bg-gradient-to-r from-neon-purple to-neon-gold bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-gold mx-auto"></div>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Professional certifications and achievements
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <AnimateOnScroll
              key={index}
              animation="animate-fade-in"
              delay={index * 100}
            >
              <Card className="p-6 group bg-white dark:bg-dark-200">
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-neon-purple group-hover:text-neon-gold flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-neon-gold transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      Completed {cert.date}
                    </p>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-neon-purple dark:text-neon-gold hover:text-neon-purple-dark dark:hover:text-neon-gold-light transition-colors duration-300"
                      >
                        <span className="text-sm">View Credential</span>
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;