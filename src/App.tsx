import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Linkedin,
  MessageCircle,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { HeroSection } from './components/sections/HeroSection';
import { WhatYoullLearn } from './components/sections/WhatYoullLearn';
import { WhoItsFor } from './components/sections/WhoItsFor';
import { WhyDifferent } from './components/sections/WhyDifferent';
import { PracticalActionable } from './components/sections/PracticalActionable';
import { WhatYoullGain } from './components/sections/WhatYoullGain';
import { AboutAuthor } from './components/sections/AboutAuthor';
import { Testimonials } from './components/sections/Testimonials';
import { BonusOffer } from './components/sections/BonusOffer';
import { LeadCaptureForm } from './components/sections/LeadCaptureForm';
import { Footer } from './components/sections/Footer';
import { ThankYouPopup } from './components/popups/ThankYouPopup';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = React.useState(false);
  const [leadData, setLeadData] = React.useState({ firstName: '', email: '' });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLeadSuccess = (data: { firstName: string; email: string }) => {
    setLeadData(data);
    setIsThankYouOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full glass-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3 font-bold text-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm overflow-hidden border border-slate-100">
              <img 
                src="https://i.ibb.co/tMrYK8zM/AI-For-Finance-Professionals-1-1.png" 
                alt="Logo" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-sm sm:text-base md:text-lg tracking-tight">AI For Finance Professionals</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollToSection('learn')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">What You'll Learn</button>
            <button onClick={() => scrollToSection('author')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">About Author</button>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute w-full bg-white p-6 shadow-2xl md:hidden border-t border-slate-100">
            <div className="flex flex-col gap-6">
              <button onClick={() => scrollToSection('learn')} className="text-left font-bold text-slate-700">What You'll Learn</button>
              <button onClick={() => scrollToSection('author')} className="text-left font-bold text-slate-700">About Author</button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <HeroSection />
        <WhatYoullLearn />
        <WhyDifferent />
        <PracticalActionable />
        <WhoItsFor />
        <WhatYoullGain />
        <AboutAuthor />
        <Testimonials />
        <BonusOffer />
        <LeadCaptureForm onSuccess={handleLeadSuccess} />
      </main>

      <Footer />

      <ThankYouPopup 
        isOpen={isThankYouOpen} 
        onClose={() => setIsThankYouOpen(false)} 
        firstName={leadData.firstName}
        email={leadData.email}
      />
    </div>
  );
}
