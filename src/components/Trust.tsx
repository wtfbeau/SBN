import { motion } from 'motion/react';
import { Lock, Zap, Target, Award } from 'lucide-react';

export function Trust() {
  const values = [
    {
      icon: Lock,
      title: 'Confidentiality & Discretion',
      description:
        'Bank-level security protocols and absolute discretion throughout every engagement.',
    },
    {
      icon: Zap,
      title: 'Speed of Execution',
      description:
        'Streamlined processes and decisive action to capitalize on time-sensitive opportunities.',
    },
    {
      icon: Target,
      title: 'Precision & Expertise',
      description:
        'Unmatched market knowledge and technical sophistication across all capital structures.',
    },
    {
      icon: Award,
      title: 'Client-First Philosophy',
      description:
        'Aligned incentives and unwavering commitment to achieving optimal outcomes for our clients.',
    },
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUzODU5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Office interior"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">
            Why Clients Trust Us
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Unwavering Commitment to Excellence
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our reputation is built on delivering exceptional results through principled advisory and
            relentless pursuit of client objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-10 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-amber-500"
            >
              <value.icon className="w-14 h-14 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white mb-4">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center p-12 border border-slate-700 bg-slate-800/30"
        >
          <div className="text-3xl text-white mb-6 leading-relaxed">
            &ldquo;SBN Advisors delivered institutional-grade execution on a complex $150M
            financing. Their market expertise and capital relationships were instrumental in
            achieving optimal terms.&rdquo;
          </div>
          <div className="text-amber-500">— Chief Financial Officer, Fortune 500 REIT</div>
        </motion.div>
      </div>
    </section>
  );
}
