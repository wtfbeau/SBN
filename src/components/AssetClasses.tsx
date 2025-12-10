import { motion } from 'motion/react';
import { Building, Factory, Home, ShoppingBag, Hotel, Warehouse } from 'lucide-react';

export function AssetClasses() {
  const assetClasses = [
    {
      icon: Building,
      name: 'Office',
      volume: '$850M+',
      transactions: 42,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: ShoppingBag,
      name: 'Retail',
      volume: '$620M+',
      transactions: 35,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Home,
      name: 'Multifamily',
      volume: '$745M+',
      transactions: 38,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Factory,
      name: 'Industrial',
      volume: '$580M+',
      transactions: 29,
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      volume: '$310M+',
      transactions: 18,
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Warehouse,
      name: 'Logistics',
      volume: '$425M+',
      transactions: 24,
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">
            Asset Class Expertise
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Comprehensive Sector Coverage
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Deep expertise across all commercial real estate sectors backed by specialized teams and
            market intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assetClasses.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-slate-800 border border-slate-700 hover:border-amber-500 transition-all"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${asset.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className={`p-4 bg-gradient-to-br ${asset.color} rounded-lg`}>
                    <asset.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">Transactions</div>
                    <div className="text-2xl text-white">{asset.transactions}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white mb-2">{asset.name}</h3>
                <div className="text-3xl text-amber-500 mb-4">{asset.volume}</div>
                <div className="text-sm text-slate-400">Total Volume Financed</div>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-slate-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(asset.transactions / 42) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${asset.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-12 bg-gradient-to-r from-amber-500 to-amber-600 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl text-slate-950 mb-2">$3.5B+</div>
              <div className="text-slate-800">Aggregate Transaction Volume</div>
            </div>
            <div className="border-l border-r border-slate-800/20">
              <div className="text-5xl text-slate-950 mb-2">186</div>
              <div className="text-slate-800">Total Transactions</div>
            </div>
            <div>
              <div className="text-5xl text-slate-950 mb-2">100%</div>
              <div className="text-slate-800">Successful Execution Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
