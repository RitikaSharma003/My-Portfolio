import React from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  index
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative bg-[#1A1A2E]/70 border border-[#2A2A45] rounded-2xl overflow-hidden hover:border-[#6C63FF]/50 transition-colors duration-500 hover:shadow-2xl hover:shadow-[#6C63FF]/15 flex flex-col"
    >
      {/* Image with Parallax & Scale effect */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={getImageUrl(imageSrc)}
          alt={`Screenshot of ${title}`}
          className="w-full h-full object-cover"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-[#0F0F1A]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Quick action buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="bg-[#6C63FF] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#5a52e0] transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-[#6C63FF]/40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Site
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="bg-[#1A1A2E]/80 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center gap-2 shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#6C63FF] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {skills.map((skill, id) => (
            <span
              key={id}
              className="text-xs bg-[#2A2A45]/50 text-slate-300 border border-[#2A2A45] px-3 py-1.5 rounded-lg font-medium whitespace-nowrap group-hover:border-[#6C63FF]/30 group-hover:text-[#6C63FF] transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
