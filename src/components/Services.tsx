import { motion } from 'motion/react';
import { Building2, Briefcase, LineChart, Landmark, Globe, HandshakeIcon } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Real Estate Finance',
      description:
        'Comprehensive debt and equity solutions for office, retail, industrial, and multifamily properties across all asset classes.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Finance Advisory',
      description:
        'Strategic capital structuring, debt placement, and refinancing solutions for corporate growth and acquisitions.',
    },
    {
      icon: LineChart,
      title: 'Investment Sales',
      description:
        'Expert disposition and acquisition advisory services leveraging institutional buyer networks and market analytics.',
    },
    {
      icon: Landmark,
      title: 'Structured Finance',
      description:
        'Complex capital solutions including mezzanine debt, preferred equity, and customized hybrid structures.',
    },
    {
      icon: Globe,
      title: 'Capital Markets',
      description:
        'Access to global institutional capital sources including banks, insurance companies, debt funds, and private equity.',
    },
    {
      icon: HandshakeIcon,
      title: 'Strategic Advisory',
      description:
        'Comprehensive market intelligence, portfolio optimization, and strategic planning for institutional portfolios.',
    },
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">Our Services</div>
          <h2 className="text-5xl md:text-6xl text-slate-950 mb-6">
            Comprehensive Capital Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Full-spectrum advisory services designed for institutional clients and sophisticated
            capital transactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-10 bg-white hover:bg-slate-950 transition-all duration-300 border border-slate-200 hover:border-amber-500 hover:shadow-2xl"
            >
              <div className="mb-6">
                <service.icon className="w-14 h-14 text-amber-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-slate-950 group-hover:text-white transition-colors mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 text-amber-500 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}