import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './ui/badge';
import { skillsData } from '../data/mockData';

// Skill icons using simple colored backgrounds
const skillIcons = {
  'React': { color: '#61DAFB', letter: 'R' },
  'Next.js': { color: '#FFFFFF', letter: 'N' },
  'JavaScript': { color: '#F7DF1E', letter: 'JS' },
  'TypeScript': { color: '#3178C6', letter: 'TS' },
  'TailwindCSS': { color: '#06B6D4', letter: 'TW' },
  'Bootstrap': { color: '#7952B3', letter: 'B' },
  'Node.js': { color: '#339933', letter: 'No' },
  'Express': { color: '#FFFFFF', letter: 'Ex' },
  'Firebase': { color: '#FFCA28', letter: 'Fb' },
  'Firestore': { color: '#FF6F00', letter: 'Fs' },
  'MongoDB': { color: '#47A248', letter: 'M' },
  'REST APIs': { color: '#FF6C37', letter: 'API' },
  'Git': { color: '#F05032', letter: 'G' },
  'GitHub': { color: '#FFFFFF', letter: 'GH' },
  'VS Code': { color: '#007ACC', letter: 'VS' },
  'Figma': { color: '#F24E1E', letter: 'Fg' },
  'Canva': { color: '#00C4CC', letter: 'Ca' },
  'Android Studio': { color: '#3DDC84', letter: 'AS' },
  'UI/UX Design': { color: '#FF61F6', letter: 'UX' },
  'Responsive Design': { color: '#22D3EE', letter: 'RD' },
  'Problem Solving': { color: '#10B981', letter: 'PS' },
  'Agile/Scrum': { color: '#8B5CF6', letter: 'Ag' }
};

const Skills = () => {
  const allSkills = [
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.tools,
    ...skillsData.other
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Top Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid - Icon Style like Bisrat.tech */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {allSkills.map((skill) => {
            const iconData = skillIcons[skill.name] || { color: '#22D3EE', letter: skill.name.charAt(0) };
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
                className="group flex flex-col items-center gap-3"
              >
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300"
                >
                  <span 
                    className="text-lg sm:text-xl font-bold transition-transform duration-300 group-hover:scale-110"
                    style={{ color: iconData.color }}
                  >
                    {iconData.letter}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;