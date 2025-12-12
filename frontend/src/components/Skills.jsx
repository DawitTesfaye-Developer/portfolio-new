import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

// Skill icons using CDN URLs (similar to bisrat.tech)
const skillIcons = {
  'React.js': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB'
  },
  'Next.js': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: '#FFFFFF'
  },
  'JavaScript': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E'
  },
  'TypeScript': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: '#3178C6'
  },
  'Tailwind CSS': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    color: '#06B6D4'
  },
  'Bootstrap': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    color: '#7952B3'
  },
  'HTML/CSS': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#E34F26'
  },
  'Node.js': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933'
  },
  'Express.js': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#FFFFFF'
  },
  'MongoDB': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47A248'
  },
  'Firebase': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    color: '#FFCA28'
  },
  'Laravel': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    color: '#FF2D20'
  },
  'REST APIs': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    color: '#009688'
  },
  'React Native': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB'
  },
  'Mobile UI/UX': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: '#F24E1E'
  },
  'Git': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#F05032'
  },
  'GitHub': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#FFFFFF'
  },
  'VS Code': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    color: '#007ACC'
  },
  'Figma': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: '#F24E1E'
  },
  'LX Design': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    color: '#00C4CC'
  },
  'UI/UX Design': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: '#F24E1E'
  },
  'Problem Solving': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    color: '#3776AB'
  },
  'Network Admin': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    color: '#FCC624'
  }
};

// All skills in order
const allSkills = [
  'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap',
  'HTML/CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Laravel',
  'React Native', 'Git', 'GitHub', 'VS Code', 'Figma', 'UI/UX Design'
];

const Skills = () => {
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
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
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {allSkills.map((skillName, index) => {
            const skill = skillIcons[skillName] || { icon: null, color: '#22D3EE' };
            return (
              <motion.div
                key={skillName}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.2 } 
                }}
                className="group flex flex-col items-center gap-3"
              >
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 p-3 sm:p-4"
                >
                  {skill.icon ? (
                    <img 
                      src={skill.icon} 
                      alt={skillName}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      style={{ filter: skillName === 'Express.js' || skillName === 'Next.js' || skillName === 'GitHub' ? 'invert(1)' : 'none' }}
                    />
                  ) : (
                    <span 
                      className="text-lg sm:text-xl font-bold transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skillName.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                  {skillName}
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
