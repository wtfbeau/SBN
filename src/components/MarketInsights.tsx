import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Building2, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function MarketInsights() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  const stats = [
    {
      metric: '4.8%',
      label: 'Avg. Cap Rate',
      trend: '+12 bps YoY',
      icon: BarChart3,
      targetValue: 4.8,
    },
    {
      metric: '$485B',
      label: 'CRE Debt Market',
      trend: 'Q4 2024',
      icon: DollarSign,
      targetValue: 485,
    },
    {
      metric: '6.2%',
      label: 'Senior Debt Pricing',
      trend: 'Investment Grade',
      icon: TrendingUp,
      targetValue: 6.2,
    },
    {
      metric: '342',
      label: 'Active Transactions',
      trend: 'Current Pipeline',
      icon: Building2,
      targetValue: 342,
    },
  ];

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const duration = 2000;
      const stepTime = 50;
      const steps = duration / stepTime;
      const increment = stat.targetValue / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.targetValue) {
          start = stat.targetValue;
          clearInterval(timer);
        }
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = start;
          return newValues;
        });
      }, stepTime);
    });
  }, []);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Visual Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGRhdGF8ZW58MXx8fHwxNzY1MzQ1Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Market data"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">
            Live Market Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Real-Time Capital Markets Data
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-amber-500 transition-all overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <insight.icon className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
                <motion.div 
                  className="text-5xl text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {index === 1 ? `$${Math.round(animatedValues[index])}B` : 
                   index === 3 ? Math.round(animatedValues[index]) :
                   `${animatedValues[index].toFixed(1)}%`}
                </motion.div>
                <div className="text-slate-400 mb-1">{insight.label}</div>
                <div className="text-sm text-amber-500">{insight.trend}</div>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}