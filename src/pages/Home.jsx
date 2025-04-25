import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Spline from '@splinetool/react-spline';
import avatar from '../assets/avatar.png'; // Add your avatar image path

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 overflow-hidden">

      {/* Spline Background */}
      <Spline
        scene="https://prod.spline.design/HaAv2uAtW3F4Y6HV/scene.splinecode"
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Content Layer */}
      <div className="relative z-10">

        {/* Profile Avatar */}
        <motion.img
          src={avatar}
          alt="Profile Avatar"
          className="rounded-full w-32 h-32 mb-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        {/* Hero Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-700 mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm <span className="text-purple-900">Tarun</span> 👋
        </motion.h1>

        {/* Animated Titles using Typewriter */}
        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-2xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typewriter 
            words={['AI Engineer', 'Data Scientist', 'Developer']} 
            loop={true} 
            typeSpeed={100} 
            deleteSpeed={50} 
            delaySpeed={1500} 
          />
        </motion.p>

        {/* Intro */}
        <motion.p
          className="text-gray-600 text-lg md:text-xl max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I'm passionate about building intelligent solutions that make a real-world impact. Explore my projects to see what I've been working on!
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            to="/projects"
            className="inline-block bg-purple-600 text-white text-base font-medium px-8 py-3 rounded-2xl shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            View My Projects
          </Link>
        </motion.div>
      </div>

      {/* Floating Blob Animation */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-purple-100 animate-pulse"
        style={{ bottom: '-5rem', right: '10%' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </section>
  );
};

export default Home;
