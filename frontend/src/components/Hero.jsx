import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const profileImage = "https://dawit-me.onrender.com/static/media/T.43b8b659edf06fcca27b.png";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.03,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const titleText = "I build things for the web.";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/8 to-blue-500/5 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/5 to-cyan-500/8 rounded-full blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="mb-4"
            >
              <span className="text-cyan-400 font-mono text-lg">Hello, I'm</span>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              variants={itemVariants}
              className="mb-6 overflow-hidden"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
                {titleText.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === ' ' ? 'inline' : 'inline-block'}
                    whileHover={{ 
                      color: '#22d3ee',
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('#projects')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500 font-medium px-8 py-6 text-base shadow-lg shadow-cyan-500/20 border-0"
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-6 text-base backdrop-blur-sm"
                >
                  Hire Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-400/30 transition-colors duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl scale-110" />
              
              {/* Image Container */}
              <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={profileImage}
                      alt="Dawit Tesfaye"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl font-bold text-white">3+</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Years Experience
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('#services')}
          className="p-2 text-gray-500 hover:text-cyan-400 transition-colors"
          aria-label="Scroll down"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
