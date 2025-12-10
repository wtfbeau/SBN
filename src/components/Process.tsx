import { motion } from 'motion/react';
import { Search, FileText, Users, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Analysis',
      description:
        'Comprehensive review of capital requirements, market positioning, and strategic objectives to develop optimal financing strategy.',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Market Positioning',
      description:
        'Prepare institutional-grade materials and leverage proprietary analytics to position your opportunity for maximum capital efficiency.',
    },
    {
      number: '03',
      icon: Users,
      title: 'Capital Procurement',
      description:
        'Execute targeted outreach to our curated network of institutional capital sources and negotiate optimal terms on your behalf.',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Transaction Execution',
      description:
        'Navigate due diligence, documentation, and closing processes with precision to ensure seamless transaction completion.',
    },
  ];

  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent opacity-50" />
      
      {/* Background Image */}
      <div className="absolute left-0 top-0 w-1/2 h-full opacity-5">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjUzMTQzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business handshake"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">Our Process</div>
          <h2 className="text-5xl md:text-6xl text-slate-950 mb-6">
            Institutional Execution Framework
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A proven methodology refined through hundreds of successful transactions and billions in
            capital deployment.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row items-start gap-8 p-10 bg-slate-50 hover:bg-slate-950 transition-all duration-300 border-l-4 border-amber-500">
                {/* Step Number */}
                <div className="text-7xl opacity-20 group-hover:opacity-30 transition-opacity text-slate-950 group-hover:text-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amber-500 group-hover:bg-white transition-colors flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-slate-950" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-slate-950 group-hover:text-white transition-colors mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-20 top-full w-0.5 h-12 bg-amber-500/30 -translate-x-1/2" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}