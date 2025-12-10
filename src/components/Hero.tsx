import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import logoImage from 'figma:asset/aa4c22f68ceab40ef6e0d340b54bba61147da13b.png';
import { AnimatedBackground } from './AnimatedBackground';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Video Background - Simulated with animated elements */}
      <div className="absolute inset-0">
        {/* Base Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1758641682181-1a817db17df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBmaW5hbmNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY1Mzg3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Corporate building"
          className="w-full h-full object-cover opacity-20"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950" />
        
        {/* Animated Grid Overlay with pulse effect */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
        </motion.div>

        {/* Animated Background Effects */}
        <AnimatedBackground />

        {/* Scanning Line Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent h-32"
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logoImage} alt="SBN Advisors" className="h-12" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#process" className="text-slate-300 hover:text-white transition-colors">
              Process
            </a>
            <a href="#transactions" className="text-slate-300 hover:text-white transition-colors">
              Transactions
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <button className="px-5 py-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all">
              Contact
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight max-w-5xl mx-auto">
            Institutional Capital.
            <br />
            <span className="text-amber-500">Executed with Precision.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          SBN Advisors is a premier commercial capital advisory network delivering strategic
          financing solutions for institutional-grade real estate and corporate transactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group px-10 py-4 bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all flex items-center gap-3">
            Contact Our Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-4 border border-slate-500 text-white hover:border-white transition-colors">
            View Transactions
          </button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-5xl text-amber-500 mb-2">$2.5B+</div>
            <div className="text-slate-400">Capital Deployed</div>
          </div>
          <div className="text-center border-l border-r border-slate-700">
            <div className="text-5xl text-amber-500 mb-2">150+</div>
            <div className="text-slate-400">Transactions Closed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl text-amber-500 mb-2">25+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-amber-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}