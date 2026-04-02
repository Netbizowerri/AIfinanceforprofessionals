import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const WhatYoullGain: React.FC = () => {
  const outcomes = [
    "Save hours every week using AI automation",
    "Improve accuracy in financial reporting",
    "Make smarter business decisions using data insights",
    "Become more valuable to your organization",
    "Position yourself for leadership roles",
    "Unlock new income opportunities"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">What You Will Gain After Reading This Book</h2>
          <p className="text-xl text-slate-600">After reading this book, you will:</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl bg-blue-50 p-6 border border-blue-100"
            >
              <div className="mt-1 text-blue-600">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-lg font-medium text-slate-800">{outcome}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-bold text-blue-600 italic">This book helps you move from report creator to strategic advisor.</p>
        </div>
      </div>
    </section>
  );
};
