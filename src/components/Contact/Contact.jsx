import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils";

const socialLinks = [
  {
    href: "https://www.instagram.com/ritika_sha_.rma/",
    label: "Instagram",
    color: "hover:border-[#E1306C]/50 hover:text-[#E1306C] hover:bg-[#E1306C]/10",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/ritika-sharma-62652023b/",
    label: "LinkedIn",
    color: "hover:border-[#0077B5]/50 hover:text-[#0077B5] hover:bg-[#0077B5]/10",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/RitikaSharma003",
    label: "GitHub",
    color: "hover:border-white/40 hover:text-white hover:bg-white/10",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    emailjs
      .sendForm("service_wqqfm5r", "template_ku02q5h", form.current, {
        publicKey: "oE58D5MxYtg-ofcz3",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("🎉 Message sent successfully! I'll get back to you soon.");
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-[120px]" 
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
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#43D9AD] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6C63FF] to-[#43D9AD] rounded-full mx-auto mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Feel free to reach out if you'd like to collaborate — you're just a few clicks away!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1A2E]/80 border border-[#2A2A45] rounded-3xl p-8 backdrop-blur-md shadow-2xl"
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#6C63FF] rounded-full" />
              Get In Touch
            </h3>

            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-[#43D9AD]/10 border border-[#43D9AD]/30 rounded-xl text-[#43D9AD] text-sm font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {success}
              </motion.div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-slate-300 text-sm mb-2 font-semibold">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0F0F1A] border border-[#2A2A45] rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-2 font-semibold">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0F0F1A] border border-[#2A2A45] rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Hi Ritika, I'd love to collaborate on..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0F0F1A] border border-[#2A2A45] rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-all duration-300 text-sm resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] hover:from-[#5a52e0] hover:to-[#7a73e0] transition-all duration-300 shadow-lg shadow-[#6C63FF]/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#1A1A2E]/80 border border-[#2A2A45] rounded-3xl p-8 backdrop-blur-md shadow-2xl">
              <h3 className="text-white font-bold text-xl mb-3">Let's Connect</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                I'm always open to new opportunities, collaborations, and interesting conversations. 
                Reach out through any of the platforms below.
              </p>
              <div className="space-y-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 p-4 bg-[#0F0F1A] border border-[#2A2A45] rounded-2xl text-slate-400 transition-all duration-300 group ${social.color} shadow-md`}
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{social.icon}</div>
                    <span className="font-bold text-sm tracking-wide">{social.label}</span>
                    <svg className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-[#6C63FF]/20 to-[#43D9AD]/10 border border-[#6C63FF]/30 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-md"
            >
              <svg className="w-10 h-10 text-[#6C63FF] mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white text-base italic leading-relaxed font-medium">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
              <p className="text-[#43D9AD] text-sm mt-3 font-bold tracking-widest uppercase">— Cory House</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-[#2A2A45] pt-10 pb-6">
        <p className="text-center text-slate-500 text-sm font-medium">
          © 2025{" "}
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#43D9AD] bg-clip-text text-transparent font-bold">
            Ritika Sharma
          </span>{" "}
          · All Rights Reserved. Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
