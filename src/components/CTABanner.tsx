import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-32 bg-amber-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1567028254959-397492403959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJ1c2luZXNzJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjUzODcyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl text-slate-950 mb-8">
            Ready to Execute Your Next Transaction?
          </h2>
          <p className="text-xl text-slate-800 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with our team to discuss your capital requirements and discover how SBN Advisors
            can deliver institutional solutions tailored to your objectives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-10 py-4 bg-slate-950 text-white hover:bg-slate-800 transition-all flex items-center gap-3">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border-2 border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white transition-all">
              Download Capabilities Brief
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
