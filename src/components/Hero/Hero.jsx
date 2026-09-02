import React from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#43D9AD]/15 rounded-full blur-3xl" 
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(108,99,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(108,99,255,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20"
      >
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full px-4 py-1.5 mb-6">
            <motion.span 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-[#43D9AD] rounded-full" 
            />
            <span className="text-sm text-[#43D9AD] font-medium">Available for opportunities</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-slate-900 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#FF6584] to-[#43D9AD] bg-clip-text text-transparent animate-gradient-x bg-300%">
              Ritika
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
            <span className="text-[#43D9AD]">FullStack Developer</span> & Software Engineer
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            Passionate about crafting beautiful, responsive, and user-focused web experiences using
            React, JavaScript, and modern web technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(108,99,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="/public/Resume Ritika Sharma.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-slate-900 dark:text-white overflow-hidden"
              style={{ background: "linear-gradient(135deg, #6C63FF, #8B85FF)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(108,99,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#6C63FF] border-2 border-[#6C63FF]/50 transition-colors"
            >
              Contact Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Improved Image Card Design */}
        <motion.div 
          variants={itemVariants}
          className="relative w-64 h-80 md:w-80 md:h-[400px] lg:w-[380px] lg:h-[480px] mx-auto lg:mx-0 flex-shrink-0"
        >
          {/* Background Glow */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF] to-[#43D9AD] blur-2xl rounded-[3rem]"
          />

          {/* Main Image Container */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full p-2 bg-dark-card/60 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl"
          >
            <div className="w-full h-full overflow-hidden rounded-[2.5rem] bg-dark">
              <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Ritika Sharma"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-12 -left-6 md:-left-10 bg-dark-card/90 backdrop-blur-md border border-[#6C63FF]/40 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">React.js</span>
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-24 -right-6 md:-right-10 bg-dark-card/90 backdrop-blur-md border border-[#43D9AD]/40 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#43D9AD] animate-pulse" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Tailwind</span>
          </motion.div>

          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-6 left-12 bg-dark-card/90 backdrop-blur-md border border-[#FF6584]/40 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2 z-10"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6584] animate-pulse" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Next.js</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.svg 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-4 text-[#6C63FF]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </section>
  );
};
