import { motion } from 'motion/react';
import { Building2, Landmark, Briefcase, TrendingUp, Globe2, PiggyBank } from 'lucide-react';

export function CapitalSources() {
  const sources = [
    { icon: Landmark, name: 'Commercial Banks', count: '25+' },
    { icon: Building2, name: 'Life Insurance Companies', count: '18+' },
    { icon: Briefcase, name: 'Debt Funds', count: '32+' },
    { icon: TrendingUp, name: 'Private Equity', count: '28+' },
    { icon: Globe2, name: 'Investment Banks', count: '15+' },
    { icon: PiggyBank, name: 'Family Offices', count: '42+' },
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">
            Capital Network
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Global Institutional Relationships
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Exclusive access to a curated network of 160+ institutional capital sources
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group text-center p-6 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500 transition-all"
            >
              <source.icon className="w-10 h-10 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-slate-400 group-hover:text-white transition-colors mb-2">
                {source.name}
              </div>
              <div className="text-2xl text-amber-500">{source.count}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-slate-900 border border-slate-800">
            <div>
              <div className="text-3xl text-white mb-1">$50B+</div>
              <div className="text-sm text-slate-500">Available Capital</div>
            </div>
            <div className="w-px h-12 bg-slate-800" />
            <div>
              <div className="text-3xl text-white mb-1">160+</div>
              <div className="text-sm text-slate-500">Active Relationships</div>
            </div>
            <div className="w-px h-12 bg-slate-800" />
            <div>
              <div className="text-3xl text-white mb-1">12</div>
              <div className="text-sm text-slate-500">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
