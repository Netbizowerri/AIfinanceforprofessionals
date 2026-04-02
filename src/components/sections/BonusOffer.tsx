import React from 'react';
import { motion } from 'motion/react';
import { Gift, Zap, FileText, BarChart3 } from 'lucide-react';

export const BonusOffer = () => {
  const bonuses = [
    {
      title: "AI Finance Prompt Templates",
      desc: "A comprehensive library of 100+ prompts for ChatGPT, Claude, and Gemini specifically for financial analysis.",
      icon: <Zap className="text-blue-600" />,
      value: "$99 Value"
    },
    {
      title: "Finance Automation Guide",
      desc: "Step-by-step workflows to automate your monthly reporting cycle using free and low-cost AI tools.",
      icon: <FileText className="text-blue-600" />,
      value: "$149 Value"
    },
    {
      title: "Forecasting Templates",
      desc: "Pre-built spreadsheets and AI-ready models to improve your budgeting and planning accuracy.",
      icon: <BarChart3 className="text-blue-600" />,
      value: "$199 Value"
    }
  ];

  return (
    <section className="bg-blue-600 py-24 px-4 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-black uppercase tracking-wider backdrop-blur-md"
          >
            <Gift size={18} /> Exclusive Launch Bonuses
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-4xl font-black md:text-6xl leading-tight"
          >
            Get Over <span className="text-amber-400">$400</span> Worth of Bonuses
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 leading-relaxed"
          >
            For a limited time, every purchase includes these exclusive resources to help you implement AI in your finance workflows immediately.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {bonuses.map((bonus, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl shadow-blue-900/20 border border-white/20 flex flex-col"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                {bonus.icon}
              </div>
              <h3 className="mb-4 text-2xl font-black leading-tight">{bonus.title}</h3>
              <p className="mb-8 text-slate-600 leading-relaxed flex-grow">{bonus.desc}</p>
              <div className="text-sm font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-lg inline-block w-fit">
                {bonus.value}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button 
            onClick={() => {
              const el = document.getElementById('lead-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-2xl bg-white px-12 py-5 text-xl font-black text-blue-600 shadow-2xl hover:bg-blue-50 transition-all active:scale-95"
          >
            Claim Your Bonuses Now
          </button>
          <p className="mt-6 text-sm font-bold text-blue-200 uppercase tracking-widest">
            Offer expires in 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};
