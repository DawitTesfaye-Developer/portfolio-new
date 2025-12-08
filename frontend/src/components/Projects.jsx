import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/mockData';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Featured <span className="font-semibold text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl">
              A collection of projects that showcase my skills in building real-world applications
            </p>
          </div>
          {projectsData.length > 4 && (
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-white/20 text-white hover:bg-white/10 self-start md:self-auto"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} />
            </Button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-500/90 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Problem & Contribution */}
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-sm text-gray-400 line-clamp-2">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">My Contribution</p>
                    <p className="text-sm text-gray-400 line-clamp-2">{project.contribution}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/5 text-gray-300 border-0 hover:bg-white/10 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-white text-black hover:bg-gray-100 font-medium"
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;