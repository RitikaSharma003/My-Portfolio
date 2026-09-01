import React from "react";
import { motion } from "framer-motion";

const traits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Learner",
    desc: "200+ LeetCode problems solved; quickly adapts to new frameworks and technologies",
    color: "from-[#6C63FF] to-[#8B85FF]",
    border: "border-[#6C63FF]/30",
    glow: "hover:shadow-[#6C63FF]/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Team Player",
    desc: "Experienced in agile sprints, collaborating to ship production-ready features on time",
    color: "from-[#FF6584] to-[#FF8FAB]",
    border: "border-[#FF6584]/30",
    glow: "hover:shadow-[#FF6584]/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Creative Builder",
    desc: "Crafts performant, scalable, and visually engaging user-facing web features",
    color: "from-[#43D9AD] to-[#6EEDC7]",
    border: "border-[#43D9AD]/30",
    glow: "hover:shadow-[#43D9AD]/20",
  },
];

const achievements = [
  "Solved 200+ DSA problems on LeetCode",
  "Participated in ACM W-Hack 2022",
  "Completed Machine Learning with AI — Internshala",
  "Web Development for Beginners certification",
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-32 w-80 h-80 bg-[#6C63FF]/10 rounded-full blur-[100px]" 
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
          <span className="text-[#6C63FF] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Who am I?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#43D9AD] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6C63FF] to-[#43D9AD] rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Column */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A2E]/60 border border-[#2A2A45] rounded-3xl p-8 backdrop-blur-sm hover:border-[#6C63FF]/40 transition-colors duration-500 shadow-xl"
            >
              <p className="text-slate-300 leading-relaxed text-base">
                I'm <span className="text-[#6C63FF] font-bold text-lg">Ritika Sharma</span>, a
                Frontend-focused Software Engineer with hands-on experience building production
                {" "}<span className="text-white font-semibold">React.js / Next.js</span> applications
                and a strong Data Structures & Algorithms foundation (
                <span className="text-[#43D9AD] font-semibold">200+ LeetCode problems solved</span>).
              </p>
              <p className="text-slate-300 leading-relaxed text-base mt-4">
                Skilled across the <span className="text-white font-semibold">MERN stack</span>, with a
                track record of shipping performant, scalable, user-facing features. I hold a{" "}
                <span className="text-white font-semibold">B.Tech in Computer Science (GPA: 8.41/10)</span>{" "}
                from ABES Engineering College, Ghaziabad.
              </p>
              <p className="text-slate-300 leading-relaxed text-base mt-4">
                Beyond code, I enjoy travelling, exploring nature, playing badminton, and giving back to the community.
                I aim to build{" "}
                <span className="text-[#43D9AD] font-semibold">impactful digital experiences</span> that
                make a real difference.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "8.41", label: "GPA" },
                { value: "200+", label: "LeetCode" },
                { value: "3+", label: "Experiences" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  whileHover={{ y: -5 }}
                  className="bg-[#1A1A2E]/60 border border-[#2A2A45] rounded-2xl p-5 text-center hover:border-[#6C63FF]/40 transition-colors duration-300 shadow-lg"
                >
                  <div className="text-3xl font-black bg-gradient-to-r from-[#6C63FF] to-[#43D9AD] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1A1A2E]/60 border border-[#2A2A45] rounded-3xl p-7 hover:border-[#43D9AD]/40 transition-colors duration-300 shadow-xl"
            >
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-[#43D9AD] to-transparent rounded-full" />
                Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                    <svg className="flex-shrink-0 w-5 h-5 text-[#43D9AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Traits Column */}
          <div className="space-y-5">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className={`group bg-[#1A1A2E]/60 border ${trait.border} rounded-3xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${trait.glow} cursor-default`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${trait.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#6C63FF] transition-colors duration-200">
                      {trait.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{trait.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#1A1A2E]/60 border border-[#2A2A45] rounded-3xl p-7 hover:border-[#6C63FF]/40 transition-colors duration-300 shadow-xl mt-8"
            >
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-[#6C63FF] to-transparent rounded-full" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="bg-[#0F0F1A]/50 p-4 rounded-2xl border border-[#2A2A45]">
                  <p className="text-white font-bold">B.Tech — Computer Science</p>
                  <p className="text-[#6C63FF] text-sm font-medium mt-1">ABES Engineering College, Ghaziabad</p>
                  <p className="text-slate-500 text-xs mt-2 font-semibold tracking-wide uppercase">July 2020 – Aug 2024 · GPA: 8.41 / 10</p>
                </div>
                <div className="bg-[#0F0F1A]/50 p-4 rounded-2xl border border-[#2A2A45]">
                  <p className="text-white font-bold">Class XII (92.4%) & Class X (92.6%)</p>
                  <p className="text-[#43D9AD] text-sm font-medium mt-1">BloomingDale School, Budaun</p>
                  <p className="text-slate-500 text-xs mt-2 font-semibold tracking-wide uppercase">2018 – 2020</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
