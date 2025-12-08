import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/mockData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'featured', label: 'Featured' },
    { id: 'react', label: 'React' },
    { id: 'firebase', label: 'Firebase' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.techStack.some(tech => 
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my work, from web applications to UI experiments
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                exit="exit"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                  
                  {/* Overlay Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-gray-400 text-xs border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 gap-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;