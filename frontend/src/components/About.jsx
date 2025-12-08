import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { MapPin, Phone, Mail, Award, Languages } from 'lucide-react';
import { aboutData, personalInfo, certificationsData } from '../data/mockData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Turning ideas into{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              digital reality
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              {aboutData.intro}
            </p>
            <div className="text-gray-400 leading-relaxed space-y-4">
              {aboutData.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="pt-6 space-y-4">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{personalInfo.location}</p>
                  <p className="text-sm text-gray-500">Open to remote opportunities</p>
                </div>
              </motion.div>

              <motion.a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">{personalInfo.email}</p>
              </motion.a>

              <motion.a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">{personalInfo.phone}</p>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Highlights & Certifications */}
          <div className="space-y-6">
            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-white font-medium">{highlight}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutData.languages.map((lang) => (
                  <span 
                    key={lang.name}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400"
                  >
                    {lang.name} <span className="text-gray-600">• {lang.level}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
                <p className="text-3xl font-bold text-white mb-1">3+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                <p className="text-3xl font-bold text-white mb-1">6+</p>
                <p className="text-sm text-gray-400">Certifications</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;