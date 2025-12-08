import React from 'react';
import { Badge } from './ui/badge';
import { MapPin, GraduationCap, Rocket, Target } from 'lucide-react';
import { aboutData, personalInfo } from '../data/mockData';

const About = () => {
  const iconMap = {
    0: GraduationCap,
    1: Rocket,
    2: Target,
    3: MapPin
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Turning ideas into{' '}
            <span className="font-semibold text-cyan-400">digital reality</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              {aboutData.intro}
            </p>
            <div className="text-gray-400 leading-relaxed space-y-4">
              {aboutData.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {/* Location Info */}
            <div className="flex items-center gap-3 pt-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-medium">{personalInfo.location}</p>
                <p className="text-sm text-gray-500">Open to remote opportunities</p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-4">
            {aboutData.highlights.map((highlight, index) => {
              const Icon = iconMap[index];
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{highlight}</h3>
                      <p className="text-sm text-gray-500">
                        {index === 0 && 'Fresh perspective with solid fundamentals'}
                        {index === 1 && 'Passionate about modern web technologies'}
                        {index === 2 && 'Always finding efficient solutions'}
                        {index === 3 && 'Building towards a bigger vision'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
                <p className="text-3xl font-semibold text-white mb-1">10+</p>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <p className="text-3xl font-semibold text-white mb-1">2024</p>
                <p className="text-sm text-gray-400">CS Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;