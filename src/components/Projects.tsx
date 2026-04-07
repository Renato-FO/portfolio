"use client";

import Image from "next/image";

interface ProjectsProps {
  dictionary: {
    projects_title: string;
    projects_subtitle: string;
    projects_view_all: string;
    projects_view_case: string;
    project1_category: string;
    project1_year: string;
    project1_title: string;
    project1_desc: string;
    project1_tags: string;
    project2_category: string;
    project2_year: string;
    project2_title: string;
    project2_desc: string;
    project2_tags: string;
    project3_category: string;
    project3_year: string;
    project3_title: string;
    project3_desc: string;
    project3_tags: string;
    project4_category: string;
    project4_year: string;
    project4_title: string;
    project4_desc: string;
    project4_tags: string;
  };
}

const projects = [
  {
    key: "project1",
    image: "/placeholder-project-1.jpg",
  },
  {
    key: "project2",
    image: "/placeholder-project-2.jpg",
  },
  {
    key: "project3",
    image: "/placeholder-project-3.jpg",
  },
  {
    key: "project4",
    image: "/placeholder-project-4.jpg",
  },
];

export default function Projects({ dictionary }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-dark-primary">
      <div className="content">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{dictionary.projects_title}</h2>
            <p className="mt-2 text-gray-400 max-w-xl">{dictionary.projects_subtitle}</p>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-0 text-accent hover:text-accent-hover flex items-center gap-1 text-sm font-medium transition-colors"
          >
            {dictionary.projects_view_all}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.key}
              className="bg-dark-secondary border border-white/5 rounded-xl overflow-hidden hover:border-accent/30 transition-all group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-dark-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20" />
                {/* Placeholder - substituir por imagem real */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category & Year */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
                    {dictionary[`${project.key}_category` as keyof typeof dictionary]}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {dictionary[`${project.key}_year` as keyof typeof dictionary]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                  {dictionary[`${project.key}_title` as keyof typeof dictionary]}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {dictionary[`${project.key}_desc` as keyof typeof dictionary]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {dictionary[`${project.key}_tags` as keyof typeof dictionary]
                    .split(",")
                    .map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-dark-primary rounded text-xs text-gray-400"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="text-accent hover:text-accent-hover text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  {dictionary.projects_view_case}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
