import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function GlobalPresence() {
  const offices = [
    { city: 'New York', region: 'Headquarters', deals: '85+' },
    { city: 'Los Angeles', region: 'West Coast', deals: '52+' },
    { city: 'Chicago', region: 'Midwest', deals: '38+' },
    { city: 'Dallas', region: 'Southwest', deals: '41+' },
    { city: 'Miami', region: 'Southeast', deals: '29+' },
    { city: 'Boston', region: 'Northeast', deals: '24+' },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Cityscape */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
        <img
          src="https://images.unsplash.com/photo-1764675107575-7a33cbdb7905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjUzMTk1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="City skyline"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">
              National Presence
            </div>
            <h2 className="text-5xl md:text-6xl text-slate-950 mb-6">
              Coast to Coast Coverage
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Strategic offices in key financial centers providing local market expertise backed by
              national scale and institutional capital relationships.
            </p>

            {/* Map Placeholder */}
            <div className="relative h-80 bg-slate-100 border-2 border-slate-200 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1685211041228-5e7985ab3beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lzY3JhcGVyJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTM3OTMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Architecture"
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
              />
              
              {/* Map Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-amber-500 mb-2">6</div>
                  <div className="text-slate-950">Strategic Markets</div>
                </div>
              </div>

              {/* Animated Dots */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-amber-500 rounded-full"
                  style={{
                    left: `${15 + (i % 4) * 25}%`,
                    top: `${20 + Math.floor(i / 4) * 25}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* Connecting Lines Animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="20%" y1="30%" x2="40%" y2="45%"
                  stroke="#f59e0b"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.line
                  x1="40%" y1="45%" x2="65%" y2="50%"
                  stroke="#f59e0b"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Right - Office List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 bg-slate-50 hover:bg-slate-950 transition-all border-l-4 border-amber-500 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <div className="text-slate-950 group-hover:text-white transition-colors">
                      {office.city}
                    </div>
                    <div className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                      {office.region}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl text-amber-500">{office.deals}</div>
                  <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                    Transactions
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}