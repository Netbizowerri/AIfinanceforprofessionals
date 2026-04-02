import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const WhoItsFor: React.FC = () => {
  const audienceList = [
    "Finance professionals who want to automate reporting",
    "Accountants who want to reduce manual work",
    "Analysts who want to generate insights faster",
    "Managers who want better forecasting accuracy",
    "Professionals who want to future-proof their careers",
    "Anyone who wants to use AI in finance practically"
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">Who This Book Is Perfect For</h2>
          <p className="text-xl text-slate-600">This book is ideal for:</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {audienceList.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm border border-slate-100"
            >
              <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                <CheckCircle2 size={20} />
              </div>
              <span className="font-medium text-slate-700">{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-slate-900">If you want to become more valuable in today's job market, this book is for you.</p>
        </div>
      </div>
    </section>
  );
};
