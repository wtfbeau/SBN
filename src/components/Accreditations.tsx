import { motion } from 'motion/react';
import { Award, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';

export function Accreditations() {
  const credentials = [
    { icon: ShieldCheck, text: 'Member FINRA/SIPC' },
    { icon: Award, text: 'CFA Institute Member' },
    { icon: Star, text: 'Certified Commercial Investment Member' },
    { icon: CheckCircle2, text: 'SEC Registered Investment Advisor' },
  ];

  const awards = [
    { year: '2024', award: 'Deal of the Year', org: 'Commercial Real Estate Finance Council' },
    { year: '2023', award: 'Top Capital Advisory Firm', org: 'REFinance Summit' },
    { year: '2023', award: 'Excellence in Structured Finance', org: 'MBA CREF' },
    { year: '2022', award: 'Capital Markets Advisory Award', org: 'CRE Direct' },
  ];

  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Credentials Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white border border-slate-200"
              >
                <cred.icon className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{cred.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl text-slate-950 mb-2">Industry Recognition</h3>
            <p className="text-slate-600">Awards and accolades from leading industry organizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white border-l-4 border-amber-500 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm text-amber-600 mb-2">{award.year}</div>
                <div className="text-slate-950 mb-2">{award.award}</div>
                <div className="text-sm text-slate-500">{award.org}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
