import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-[#43D9AD]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-16 w-48 h-48 bg-[#6C63FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#6C63FF] rounded-full" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, id) => (
                <div
                  key={id}
                  className="group flex flex-col items-center gap-2.5 bg-[#1A1A2E]/70 border border-[#2A2A45] rounded-xl p-4 hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6C63FF]/10 cursor-default"
                >
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-slate-400 text-xs text-center font-medium group-hover:text-slate-200 transition-colors duration-200 leading-tight">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#43D9AD] rounded-full" />
              Work Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6C63FF] via-[#43D9AD] to-transparent rounded-full" />

              <div className="space-y-8 pl-12">
                {history.map((item, id) => (
                  <div key={id} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-12 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#43D9AD] shadow-lg shadow-[#6C63FF]/40 group-hover:scale-125 transition-transform duration-300" />

                    <div className="bg-[#1A1A2E]/70 border border-[#2A2A45] rounded-2xl p-5 hover:border-[#6C63FF]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#6C63FF]/10">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-white font-semibold text-base leading-tight">
                            {item.role}
                          </h4>
                          {item.organisation && (
                            <span className="text-[#6C63FF] text-sm font-medium">
                              @ {item.organisation}
                            </span>
                          )}
                        </div>
                        <span className="flex-shrink-0 text-xs bg-[#6C63FF]/15 text-[#6C63FF] border border-[#6C63FF]/30 px-3 py-1 rounded-full font-medium">
                          {item.startDate} – {item.endDate}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {item.experiences.map((exp, eid) => (
                          <li key={eid} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-[#43D9AD] rounded-full" />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-24 max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#6C63FF]/40 to-transparent" />
      </div>
    </section>
  );
};
