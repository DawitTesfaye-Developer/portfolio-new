import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

// Skill icons using CDN URLs with proficiency levels
const skillIcons = {
  'React.js': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB',
    proficiency: 90,
    level: 'Advanced'
  },
  'Next.js': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: '#FFFFFF',
    proficiency: 85,
    level: 'Advanced'
  },
  'JavaScript': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E',
    proficiency: 90,
    level: 'Advanced'
  },
  'TypeScript': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: '#3178C6',
    proficiency: 75,
    level: 'Intermediate'
  },
  'Tailwind CSS': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    color: '#06B6D4',
    proficiency: 90,
    level: 'Advanced'
  },
  'Bootstrap': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    color: '#7952B3',
    proficiency: 85,
    level: 'Advanced'
  },
  'HTML/CSS': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#E34F26',
    proficiency: 95,
    level: 'Expert'
  },
  'Node.js': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933',
    proficiency: 85,
    level: 'Advanced'
  },
  'Express.js': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#FFFFFF',
    proficiency: 85,
    level: 'Advanced'
  },
  'MongoDB': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47A248',
    proficiency: 80,
    level: 'Advanced'
  },
  'Firebase': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    color: '#FFCA28',
    proficiency: 85,
    level: 'Advanced'
  },
  'Laravel': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    color: '#FF2D20',
    proficiency: 70,
    level: 'Intermediate'
  },
  'React Native': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB',
    proficiency: 80,
    level: 'Advanced'
  },
  'Git': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#F05032',
    proficiency: 85,
    level: 'Advanced'
  },
  'GitHub': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#FFFFFF',
    proficiency: 90,
    level: 'Advanced'
  },
  'VS Code': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    color: '#007ACC',
    proficiency: 95,
    level: 'Expert'
  },
  'Figma': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: '#F24E1E',
    proficiency: 70,
    level: 'Intermediate'
  },
  'UI/UX Design': {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: '#F24E1E',
    proficiency: 80,
    level: 'Advanced'
  }
};

// All skills in order
const allSkills = [
  'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap',
  'HTML/CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Laravel',
  'React Native', 'Git', 'GitHub', 'VS Code', 'Figma', 'UI/UX Design'
];

// Get proficiency color based on level
const getProficiencyColor = (proficiency) => {
  if (proficiency >= 90) return 'from-emerald-500 to-emerald-400';
  if (proficiency >= 80) return 'from-cyan-500 to-cyan-400';
  if (proficiency >= 70) return 'from-blue-500 to-blue-400';
  return 'from-purple-500 to-purple-400';
};

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
        <TooltipProvider delayDuration={100}>
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 lg:gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {allSkills.map((skillName, index) => {
              const skill = skillIcons[skillName] || { icon: null, color: '#22D3EE', proficiency: 50, level: 'Beginner' };
              const proficiencyColor = getProficiencyColor(skill.proficiency);
              
              return (
                <Tooltip key={skillName}>
                  <TooltipTrigger asChild>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.05,
                        transition: { duration: 0.2 } 
                      }}
                      className="group flex flex-col items-center gap-3 cursor-pointer"
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
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    className="bg-[#1a1a1a] border border-white/10 px-4 py-3 rounded-xl shadow-xl"
                  >
                    <div className="flex flex-col items-center gap-2 min-w-[140px]">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-white font-medium text-sm">{skillName}</span>
                        <span className={`text-xs font-semibold bg-gradient-to-r ${proficiencyColor} bg-clip-text text-transparent`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${proficiencyColor} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-gray-400 text-xs">{skill.proficiency}% Proficiency</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;
