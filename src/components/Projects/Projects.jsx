import React from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#FF6584]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-[#6C63FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="text-[#FF6584] font-semibold text-sm tracking-widest uppercase mb-3 block">
            What I've Built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-[#FF6584] to-[#6C63FF] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6584] to-[#6C63FF] rounded-full mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I specialize in{" "}
            <span className="text-white font-semibold">React and Modern JavaScript</span>, leveraging
            best practices to create scalable and maintainable projects. My experience spans from
            small business websites to{" "}
            <span className="text-white font-semibold">complex front-end systems</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-7">
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/RitikaSharma003"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border border-[#2A2A45] text-slate-300 hover:border-[#6C63FF]/50 hover:text-[#6C63FF] hover:bg-[#6C63FF]/5 transition-all duration-300 font-medium group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-24 max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#6C63FF]/40 to-transparent" />
      </div>
    </section>
  );
};
