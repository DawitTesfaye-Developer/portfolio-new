import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Code2, Smartphone, Lightbulb, Database, Layout, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Creating seamless web applications with React, Next.js, Node.js, and Firebase. From front-end design to back-end integration, I deliver robust solutions tailored to your needs.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Building beautiful, responsive user interfaces with modern frameworks. Focused on performance, accessibility, and exceptional user experience.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Developing scalable APIs and server-side applications. Expertise in Node.js, Express, Firebase, and database management.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
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
    <section id="services" className="py-24 lg:py-32 bg-[#0A0A0A]">
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
            What I Do
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            My Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in building modern web applications with cutting-edge technologies
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-full h-full rounded-xl bg-[#0A0A0A] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;