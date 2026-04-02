import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const features = [
    "Practical and easy to understand",
    "No technical or coding knowledge required",
    "Real-world finance applications",
    "Step-by-step guidance",
    "Career-focused insights"
  ];

  return (
    <section id="testimonials" className="section-padding bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">What Readers Will Love About This Book</h2>
          <p className="text-lg text-slate-400">Join thousands of finance professionals transforming their workflows.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md border border-white/20"
            >
              <Star className="text-amber-400" fill="currentColor" size={20} />
              <span className="font-bold tracking-tight">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
