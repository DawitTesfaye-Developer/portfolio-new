import React from 'react';
import { Badge } from './ui/badge';
import { Briefcase, GraduationCap, Building2 } from 'lucide-react';
import { experienceData } from '../data/mockData';

const Experience = () => {
  const getIcon = (index) => {
    const icons = [Briefcase, Building2, GraduationCap];
    const Icon = icons[index] || Briefcase;
    return Icon;
  };

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
            Career
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4">
            Experience & <span className="font-semibold text-cyan-400">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in technology and professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const Icon = getIcon(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-[#0F0F0F] border-2 border-cyan-500/50 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-cyan-500" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${isEven ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div
                      className={`inline-block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 ${
                        isEven ? 'md:ml-auto' : ''
                      }`}
                    >
                      {/* Icon & Period */}
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <div className="p-2 rounded-lg bg-cyan-500/10">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <span className="text-sm text-gray-500">{item.period}</span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-cyan-400 text-sm font-medium mb-3">{item.company}</p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 max-w-md">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className={`space-y-2 ${isEven ? 'md:ml-auto' : ''}`}>
                        {item.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className={`flex items-center gap-2 text-sm text-gray-500 ${
                              isEven ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;