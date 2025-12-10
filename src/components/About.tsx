import { motion } from 'motion/react';
import { Shield, Award, TrendingUp, Users } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: Shield,
      title: 'Institutional Trust',
      description: 'Backed by decades of proven execution and market expertise',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized excellence in commercial capital advisory services',
    },
    {
      icon: TrendingUp,
      title: 'Market Leaders',
      description: 'Consistent top-tier performance across market cycles',
    },
    {
      icon: Users,
      title: 'Strategic Network',
      description: 'Deep relationships with global capital sources and institutions',
    },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjUzMzk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Corporate team"
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
          className="text-center mb-20"
        >
          <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">About SBN Advisors</div>
          <h2 className="text-5xl md:text-6xl text-slate-950 mb-6">
            Redefining Capital Advisory
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            SBN Advisors delivers institutional-grade capital solutions through unparalleled market
            intelligence, strategic execution, and a global network of capital relationships. We serve
            as trusted advisors to corporations, real estate owners, and institutional investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-slate-50 hover:bg-slate-950 transition-all duration-300 border border-slate-200 hover:border-amber-500"
            >
              <stat.icon className="w-12 h-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-slate-950 group-hover:text-white transition-colors mb-3">
                {stat.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors">
                {stat.description}
              </p>
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
          <a
            href="#contact"
            className="inline-block text-amber-600 hover:text-amber-500 transition-colors"
          >
            Learn more about our firm →
          </a>
        </motion.div>
      </div>
    </section>
  );
}