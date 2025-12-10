import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function DataVisualization() {
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  useEffect(() => {
    // Generate animated data points
    const points = Array.from({ length: 50 }, () => Math.random() * 100);
    setDataPoints(points);
  }, []);

  return (
    <section className="py-20 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Market Performance Analytics
          </h2>
          <p className="text-slate-400 text-lg">
            Real-time visualization of capital markets trends and transaction velocity
          </p>
        </motion.div>

        {/* Animated Bar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bar Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 bg-slate-900 border border-slate-800 p-8"
          >
            <div className="text-sm text-slate-500 mb-6">Transaction Volume by Quarter</div>
            <div className="flex items-end justify-between gap-2 h-64">
              {dataPoints.slice(0, 12).map((point, index) => (
                <motion.div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-amber-500 to-amber-400 relative group"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${point}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    ${Math.round(point * 5)}M
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-slate-600">
              <span>Q1 2022</span>
              <span>Q4 2024</span>
            </div>
          </motion.div>

          {/* Line Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 bg-slate-900 border border-slate-800 p-8"
          >
            <div className="text-sm text-slate-500 mb-6">Cap Rate Trends</div>
            <svg className="w-full h-64" viewBox="0 0 400 200">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 50}
                  x2="400"
                  y2={i * 50}
                  stroke="#334155"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))}
              
              {/* Animated line path */}
              <motion.path
                d="M 0 150 Q 50 120, 100 130 T 200 100 T 300 80 T 400 60"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              
              {/* Area under curve */}
              <motion.path
                d="M 0 150 Q 50 120, 100 130 T 200 100 T 300 80 T 400 60 L 400 200 L 0 200 Z"
                fill="url(#areaGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-between mt-4 text-xs text-slate-600">
              <span>2022</span>
              <span>2024</span>
            </div>
          </motion.div>
        </div>

        {/* Ticker-style data stream */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 overflow-hidden bg-slate-900 border-y border-slate-800"
        >
          <motion.div
            className="flex gap-16 py-4"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 whitespace-nowrap">
                <span className="text-slate-500">CMBS Spread:</span>
                <span className="text-amber-500">+235 bps</span>
                <span className="text-slate-700">|</span>
                <span className="text-slate-500">10Y Treasury:</span>
                <span className="text-amber-500">4.25%</span>
                <span className="text-slate-700">|</span>
                <span className="text-slate-500">LTV Avg:</span>
                <span className="text-amber-500">65.8%</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}