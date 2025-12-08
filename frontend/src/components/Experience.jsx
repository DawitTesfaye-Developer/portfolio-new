import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Briefcase, GraduationCap, Building2, MapPin, Calendar } from 'lucide-react';
import { experienceData } from '../data/mockData';

const Experience = () => {
  const getIcon = (index) => {
    const icons = [Briefcase, Building2, GraduationCap];
    return icons[index] || Briefcase;
  };

  const getGradient = (index) => {
    const gradients = [
      'from-cyan-500 to-blue-500',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500'
    ];
    return gradients[index] || gradients[0];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#0F0F0F]">
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
            Career
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            My Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in technology and professional development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500" />

          {experienceData.map((item, index) => {
            const Icon = getIcon(index);
            const gradient = getGradient(index);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-start gap-8 mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${gradient} p-[2px]`}>
                    <div className="w-full h-full rounded-full bg-[#0F0F0F] flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${gradient}`} />
                    </div>
                  </div>
                </motion.div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  >
                    {/* Header */}
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${isEven ? 'md:ml-auto' : ''}`}>
                      {item.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className={`flex items-center gap-2 text-sm text-gray-500 ${isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;