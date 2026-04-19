import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Loader2, Send } from 'lucide-react';
import axios from 'axios';

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  jobTitle: z.string().optional(),
  country: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must consent to receive updates"),
  website: z.string().max(0).optional(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  onSuccess: (data: { firstName: string; email: string }) => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: true,
      website: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Using Privyr Webhook
      const payload = {
        name: data.fullName,
        email: data.email,
        jobTitle: data.jobTitle,
        country: data.country,
        consent: data.consent,
        // map remaining fields to keep the original data inside
        ...data
      };
      
      await axios.post('https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/16hYPAPX', payload);
      
      const firstName = data.fullName.split(' ')[0];
      onSuccess({ firstName, email: data.email });
      reset();
    } catch (err: any) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="bg-slate-50 py-20 px-4">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl md:p-12">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Get Instant Access Today
          </h2>
          <p className="text-lg text-slate-600">
            Start transforming your finance career today. Get your copy of:
          </p>
          <p className="mt-2 font-bold text-blue-600">
            AI For Finance Professionals: Automate Reporting, Analysis and Forecasting
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot */}
          <input type="text" {...register("website")} className="hidden" />

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name *
              </label>
              <input
                {...register("fullName")}
                placeholder="Your Full Name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Work Email *
              </label>
              <input
                {...register("email")}
                placeholder="your.email@company.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Role
              </label>
              <select
                {...register("jobTitle")}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              >
                <option value="">Select Your Role</option>
                <option value="Accountant">Accountant</option>
                <option value="Financial Analyst">Financial Analyst</option>
                <option value="Auditor">Auditor</option>
                <option value="CFO">CFO</option>
                <option value="Finance Manager">Finance Manager</option>
                <option value="Business Manager">Business Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Country
              </label>
              <input
                {...register("country")}
                placeholder="e.g. Nigeria, UK, USA"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              {...register("consent")}
              id="consent"
              className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="consent" className="text-sm text-slate-600">
              I agree to receive updates about AI For Finance Professionals and related resources.
            </label>
          </div>
          {errors.consent && (
            <p className="mt-1 text-xs text-red-500">{errors.consent.message}</p>
          )}

          {error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" /> Submitting...
              </>
            ) : (
              <>
                Get Instant Access <Send size={20} />
              </>
            )}
          </motion.button>
          
          <div className="text-center text-sm">
            <p className="font-black uppercase tracking-[0.1em] text-blue-600">Available formats: Soft Copy (Instant Access) — ONLY SOFT COPY IS AVAILABLE</p>
          </div>
        </form>
      </div>
    </section>
  );
};
