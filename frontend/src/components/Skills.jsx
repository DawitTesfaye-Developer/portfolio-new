import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Code, Server, Wrench, Sparkles } from 'lucide-react';
import { skillsData } from '../data/mockData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code, data: skillsData.frontend },
    { id: 'backend', label: 'Backend', icon: Server, data: skillsData.backend },
    { id: 'tools', label: 'Tools', icon: Wrench, data: skillsData.tools },
    { id: 'other', label: 'Other', icon: Sparkles, data: skillsData.other }
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4">
            Skills & <span className="font-semibold text-cyan-400">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Tabs */}
        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.02] border border-white/5 text-gray-400 data-[state=active]:bg-cyan-500/10 data-[state=active]:border-cyan-500/30 data-[state=active]:text-cyan-400 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {category.data.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-white/5"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Tech Icons Cloud */}
        <div className="mt-16 pt-16 border-t border-white/5">
          <p className="text-center text-sm text-gray-500 mb-8">Technologies I work with daily</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'TailwindCSS', 'Firebase', 'Git', 'Figma'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;