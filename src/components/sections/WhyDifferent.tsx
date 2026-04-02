import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const WhyDifferent: React.FC = () => {
  const differentiators = [
    "Most AI books are technical and complicated.",
    "This book is designed specifically for finance professionals.",
    "You don't need coding skills.",
    "You don't need a technical background.",
    "You only need a willingness to learn and apply."
  ];

  return (
    <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
      {/* Grid background effect */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-3xl font-bold md:text-5xl leading-tight">Why This Book Is Different</h2>
            <div className="space-y-6">
              {differentiators.map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-blue-500/20 p-1 text-blue-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-xl text-slate-300">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-lg text-slate-400 italic">
              This book focuses on practical methods, real-world use cases, and step-by-step strategies you can implement immediately.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-blue-600 p-12 text-center shadow-2xl shadow-blue-900/40"
          >
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h3 className="mb-4 text-3xl font-bold">Practical. Actionable. Finance-First.</h3>
            <p className="mb-8 text-xl text-blue-100">Stop spending hours on manual work and start leading with AI.</p>
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full rounded-2xl bg-white py-5 text-xl font-bold text-blue-600 shadow-xl transition-all hover:bg-blue-50 active:scale-95"
            >
              GET THE BOOK NOW
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
