"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filteredProjects = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Project Gallery
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Explore our completed works and see the quality of our craftsmanship
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-white hover:bg-secondary/80"
            }`}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-white hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group overflow-hidden rounded-lg"
            >
              <div className="relative h-64 bg-secondary overflow-hidden">
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card rounded-lg max-w-2xl w-full max-h-96 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-primary p-2 rounded-full z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedProject.imageUrl || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
