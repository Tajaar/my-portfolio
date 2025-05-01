// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/BackgroundAnimation';


const education = [
  {
    title: 'B.Tech in AI & Data Science',
    institution: 'XYZ University',
    duration: '2021 – 2025',
    description: 'Specialized in machine learning, NLP, and real-world AI projects.'
  },
  {
    title: 'Higher Secondary',
    institution: 'ABC School',
    duration: '2019 – 2021',
    description: 'Top performer with strong foundation in mathematics and computer science.'
  }
];

const certifications = [
  {
    title: 'Deep Learning Specialization',
    platform: 'Coursera',
    link: '#'
  },
  {
    title: 'Data Analyst with Python',
    platform: 'DataCamp',
    link: '#'
  }
];

const skills = ['Python', 'TensorFlow', 'Pandas', 'SQL', 'NLP', 'Power BI', 'GitHub', 'Docker'];

const About = () => {
  return (
    <><Navbar />
    <Background />
    <div className="relative overflow-hidden bg-[#0e0b1f] text-white min-h-screen py-16 px-6">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="w-48 h-48 rounded-full border-4 border-purple-600 overflow-hidden shadow-lg">
          <img src="/profile.jpg" alt="Tarun" className="w-full h-full object-cover" />
        </motion.div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-purple-400 mb-4">Hi, I'm Tarun</h1>
          <p className="text-lg text-gray-300 mb-6">
            An AI & Data Science enthusiast driven by curiosity and the desire to build impactful, intelligent systems that automate and inspire.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-full text-white font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Education Section */}
      <h2 className="text-3xl font-bold text-purple-300 mb-6">Education</h2>
      <div className="space-y-6 mb-16">
        {education.map((edu, idx) => (
          <motion.div key={idx} className="bg-[#1c1832] p-6 rounded-xl border-l-4 border-purple-500 shadow-xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
            <h3 className="text-xl font-semibold text-purple-200">{edu.title}</h3>
            <p className="text-gray-300">{edu.institution} | {edu.duration}</p>
            <p className="text-sm text-gray-400 mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <h2 className="text-3xl font-bold text-purple-300 mb-6">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {certifications.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1c1832] p-5 rounded-xl hover:scale-105 transition shadow-lg border border-purple-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            <h3 className="text-lg font-semibold text-purple-200">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.platform}</p>
          </motion.a>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="text-3xl font-bold text-purple-300 mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a132f] p-4 rounded-lg shadow-md border border-purple-600 text-purple-100 hover:bg-purple-800 hover:text-white transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="text-center text-purple-300 text-xl font-semibold">
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
