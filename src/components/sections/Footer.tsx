import React from 'react';
import { Linkedin, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3 font-bold text-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm overflow-hidden border border-slate-100">
                <img 
                  src="https://i.ibb.co/tMrYK8zM/AI-For-Finance-Professionals-1-1.png" 
                  alt="AI For Finance Professionals eBook logo" 
                  className="h-full w-full object-cover"
                  width={40}
                  height={40}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl tracking-tight">AI For Finance Professionals</span>
            </div>
            <p className="max-w-sm text-slate-500 leading-relaxed">
              The practical guide to mastering AI in finance. Automate reporting, analysis, and forecasting today.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 font-bold text-slate-900 uppercase tracking-wider text-sm">Connect With Us</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li>
                <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/bobnichson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Facebook size={18} /> Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Twitter size={18} /> X
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Instagram size={18} /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>© 2026 Bob Nichson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
