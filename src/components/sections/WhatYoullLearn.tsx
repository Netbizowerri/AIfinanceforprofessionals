import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const WhatYoullLearn: React.FC = () => {
  const benefits = [
    {
      title: "Automate Financial Reporting",
      description: "Automate financial reporting in minutes instead of hours. Learn how AI tools generate management reports, dashboards, and summaries automatically, helping you reduce manual effort and increase accuracy."
    },
    {
      title: "Transform Data Into Strategic Insights",
      description: "Transform financial data into strategic insights. The book explains how AI helps you analyze trends, forecast revenue, identify risks, and support executive decision-making."
    },
    {
      title: "Improve Forecasting Accuracy",
      description: "Improve forecasting accuracy. You'll learn how AI uses historical data and predictive modeling to generate reliable forecasts for budgeting, planning, and strategic growth."
    },
    {
      title: "Automate Accounting and Compliance",
      description: "Automate accounting and compliance workflows. This includes invoice processing, transaction classification, audit preparation, and reconciliation automation."
    },
    {
      title: "Detect Fraud and Manage Risk",
      description: "Detect fraud and manage financial risks proactively. AI tools help finance teams identify anomalies, suspicious transactions, and operational risks before they become major problems."
    },
    {
      title: "Build an AI-Driven Finance Career",
      description: "Build an AI-driven finance career. The book shows how to become a high-impact professional, improve your career growth, and unlock new opportunities."
    }
  ];

  const targetAudience = [
    "Accountants", "Finance Professionals", "Financial Analysts", "Auditors", "CFOs", "Business Managers", "Data-Driven Professionals"
  ];

  return (
    <section id="learn" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">What You Will Learn Inside This Book</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            This book is designed specifically for:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {targetAudience.map((role, i) => (
              <span key={i} className="rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600 border border-blue-100">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-12 text-center">
          <p className="text-xl font-semibold text-slate-900">Inside this powerful guide, you will discover how to:</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all hover:shadow-md hover:border-blue-200"
            >
              <div className="mb-4 text-blue-600">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
