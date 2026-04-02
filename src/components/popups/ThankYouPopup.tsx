import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, ExternalLink, Home, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ThankYouPopupProps {
  isOpen: boolean;
  onClose: () => void;
  firstName: string;
  email: string;
}

export const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ isOpen, onClose, firstName, email }) => {
  React.useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#10B981', '#F59E0B']
      });
    }
  }, [isOpen]);

  const handleBackToHome = () => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
          >
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-500 shadow-sm"
                >
                  <CheckCircle2 size={48} strokeWidth={2.5} />
                </motion.div>
              </div>
              
              <h2 className="mb-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Thank You, {firstName}!
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Your book order request has been received sucessfully. You will receive an email with further instructions about payment details. Thanks
              </p>

              <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={handleBackToHome}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl active:scale-95"
                >
                  <Home size={18} /> Back to Homepage
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
