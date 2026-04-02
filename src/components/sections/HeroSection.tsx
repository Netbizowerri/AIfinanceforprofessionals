import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const trustBadges = [
    "No coding required",
    "Instant access",
    "Practical strategies",
    "Bonus templates"
  ];

  return (
    <header className="relative overflow-hidden bg-slate-50 pt-20 pb-24 md:pt-32 md:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700">
              <Sparkles size={16} /> Transform Your Finance Career
            </div>
            <h1 className="mb-6 text-3xl font-black leading-[1.1] text-slate-900 md:text-5xl">
              AI For Finance Professionals: <span className="text-blue-600">Automate Reporting, Analysis and Forecasting</span>
            </h1>
            <h2 className="mb-6 text-xl font-bold text-slate-600 md:text-2xl">
              Transform Your Finance Career With AI — Before You're Left Behind
            </h2>
            
            <div className="space-y-4 mb-10 text-base text-slate-600 leading-relaxed max-w-xl">
              <p>Finance is changing faster than ever. Artificial Intelligence is no longer optional — it's becoming the most important skill for modern finance professionals.</p>
              <p>The professionals who understand AI today will become tomorrow's Finance Directors, CFOs, and Strategic Advisors.</p>
              <p className="font-bold text-slate-900">The ones who ignore it risk becoming obsolete.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
                className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-blue-200 transition-all hover:bg-blue-700"
              >
                Get Your Copy Now <ArrowRight size={20} />
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 text-sm font-bold text-slate-500 md:grid-cols-4">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" /> {badge}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Book Video (Vimeo) */}
            <div className="relative z-10 aspect-[3/4] rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border-8 border-white/10 bg-slate-900">
              <iframe
                src="https://player.vimeo.com/video/1179529100?autoplay=1&loop=1&muted=1&background=1"
                className="absolute inset-0 h-full w-full object-cover"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="AI For Finance Professionals Video"
              ></iframe>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};
