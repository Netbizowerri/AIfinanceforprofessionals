import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, MessageCircle } from 'lucide-react';

export const AboutAuthor = () => {
  return (
    <section id="author" className="py-24 px-4 md:px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-blue-600 uppercase tracking-wider">
              Meet the Author
            </div>
            <h2 className="mb-8 text-4xl font-black text-slate-900 md:text-5xl leading-tight">
              Bob Nichson
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                <span className="font-bold text-slate-900">Bob Nichson</span> is a seasoned finance professional and AI strategist dedicated to bridging the gap between traditional finance and the future of work.
              </p>
              <p>
                With over 15 years of experience in accounting, financial analysis, and corporate strategy, he has seen firsthand how manual processes drain productivity and stifle innovation.
              </p>
              <p>
                Through this book, Bob provides clear, actionable frameworks that help finance teams automate reporting, improve forecasting accuracy, and reclaim their time for high-value strategic advising.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 active:scale-95"
              >
                <Linkedin size={18} /> Follow on LinkedIn
              </a>
              <a 
                href="https://wa.me" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-700 active:scale-95"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl" />
            <div className="relative rounded-[2.5rem] bg-white overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://i.ibb.co/tMrYK8zM/AI-For-Finance-Professionals-1-1.png" 
                alt="Bob Nichson, author of AI For Finance Professionals" 
                className="w-full h-auto block transition-all duration-700 hover:scale-105"
                width={600}
                height={600}
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-600/10 blur-xl" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-amber-400/10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
