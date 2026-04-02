import React from 'react';
import { motion } from 'motion/react';
import { Zap, Target, BarChart3, ArrowRight } from 'lucide-react';

export const PracticalActionable: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pillars = [
    {
      icon: <Zap className="text-blue-600" size={32} />,
      title: "Practical",
      description: "No theoretical fluff. Every chapter includes step-by-step instructions you can implement in your daily work immediately."
    },
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: "Actionable",
      description: "Includes ready-to-use prompts, templates, and frameworks specifically designed for finance workflows."
    },
    {
      icon: <BarChart3 className="text-blue-600" size={32} />,
      title: "Finance-First",
      description: "Built by a finance professional for finance professionals. We speak your language—from P&L to Variance Analysis."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-slate-900 md:text-5xl mb-6"
          >
            Practical. Actionable. <span className="text-blue-600">Finance-First.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            This isn't just another book about AI. It's a manual for the modern finance professional who wants results, not hype.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-10 py-5 text-xl font-black text-white shadow-2xl shadow-blue-200 transition-all hover:bg-blue-700"
          >
            GET THE BOOK NOW <ArrowRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
