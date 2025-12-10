import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-slate-950">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1685211041228-5e7985ab3beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lzY3JhcGVyJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTM3OTMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Building"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950" />
        </div>
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-6">
            Built on Trust.
            <br />
            <span className="text-amber-500">Delivered with Excellence.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Every transaction is executed with the precision and professionalism expected by
            institutional partners worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
