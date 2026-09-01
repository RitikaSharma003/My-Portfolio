import React from "react";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0F0F1A]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#43D9AD]/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FF6584]/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(108,99,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(108,99,255,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left animate-[slideUp_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#43D9AD] rounded-full animate-pulse" />
            <span className="text-sm text-[#43D9AD] font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#FF6584] to-[#43D9AD] bg-clip-text text-transparent animate-[gradientX_4s_ease_infinite] bg-[length:300%_300%]">
              Ritika
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            <span className="text-[#43D9AD]">FullStack Developer</span> & Software Engineer
          </h2>

        p
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/public/Resume Ritika Sharma.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/30"
              style={{
                background: "linear-gradient(135deg, #6C63FF, #8B85FF)",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#6C63FF] border-2 border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 transition-all duration-300 hover:scale-105 hover:border-[#6C63FF]"
            >
              Contact Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-10 justify-center md:justify-start">
            <span className="text-slate-500 text-sm">Find me on:</span>
            <a href="https://github.com/RitikaSharma003" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ritika-sharma-62652023b/" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-[#0077B5] transition-colors duration-200 hover:scale-110 transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ritika_sha_.rma/" target="_blank" rel="noreferrer"
              className="text-slate-400 hover:text-[#E1306C] transition-colors duration-200 hover:scale-110 transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 relative animate-[float_3s_ease-in-out_infinite]">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6C63FF] via-[#FF6584] to-[#43D9AD] p-1 animate-[glow_2s_ease-in-out_infinite_alternate]">
              <div className="w-full h-full rounded-full bg-[#0F0F1A] p-2">
                <img
                  src={getImageUrl("hero/heroImage.png")}
                  alt="Ritika Sharma"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Orbiting badges */}
            <div className="absolute -top-3 -right-3 bg-[#1A1A2E] border border-[#6C63FF]/40 rounded-xl px-3 py-1.5 shadow-lg shadow-[#6C63FF]/20">
              <span className="text-xs font-semibold text-[#6C63FF]">React.js</span>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-[#1A1A2E] border border-[#43D9AD]/40 rounded-xl px-3 py-1.5 shadow-lg shadow-[#43D9AD]/20">
              <span className="text-xs font-semibold text-[#43D9AD]">Node.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs">Scroll down</span>
        <svg className="w-5 h-5 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};
