import React from "react";
import { motion } from "framer-motion";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -right-32 w-64 h-64 bg-[#43D9AD]/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-16 w-48 h-48 bg-[#6C63FF]/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#43D9AD] font-semibold text-sm tracking-widest uppercase mb-3 block">
            My Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#43D9AD] to-[#6C63FF] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#43D9AD] to-[#6C63FF] rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#6C63FF] rounded-full" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: id * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex flex-col items-center gap-3 bg-[#1A1A2E]/70 border border-[#2A2A45] rounded-xl p-4 hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 shadow-lg cursor-pointer"
                >
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider text-center font-semibold group-hover:text-white transition-colors duration-200">
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#43D9AD] rounded-full" />
              Work Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-[#6C63FF] via-[#43D9AD] to-transparent rounded-full" 
              />

              <div className="space-y-10 pl-12">
                {history.map((item, id) => (
                  <motion.div 
                    key={id} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: id * 0.2 }}
                    className="relative group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#0F0F1A] border-2 border-[#6C63FF] group-hover:border-[#43D9AD] group-hover:bg-[#43D9AD] transition-colors duration-300 shadow-lg shadow-[#6C63FF]/40" />

                    <div className="bg-[#1A1A2E]/70 border border-[#2A2A45] rounded-2xl p-6 hover:border-[#6C63FF]/40 transition-all duration-300 shadow-xl group-hover:-translate-y-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h4 className="text-white font-bold text-lg leading-tight">
                            {item.role}
                          </h4>
                          {item.organisation && (
                            <span className="text-[#6C63FF] text-sm font-semibold tracking-wide">
                              @ {item.organisation}
                            </span>
                          )}
                        </div>
                        <span className="flex-shrink-0 text-xs bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/20 px-3 py-1.5 rounded-full font-semibold tracking-wider">
                          {item.startDate} – {item.endDate}
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {item.experiences.map((exp, eid) => (
                          <li key={eid} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-[#43D9AD]/60 rounded-full" />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
