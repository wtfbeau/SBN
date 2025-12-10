import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Transactions() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transactions = [
    {
      type: 'Senior Debt',
      amount: '$125,000,000',
      property: 'Class A Office Tower',
      location: 'New York, NY',
      year: '2024',
    },
    {
      type: 'Acquisition Financing',
      amount: '$87,500,000',
      property: 'Industrial Portfolio',
      location: 'Dallas, TX',
      year: '2024',
    },
    {
      type: 'Refinancing',
      amount: '$156,000,000',
      property: 'Multifamily Development',
      location: 'Los Angeles, CA',
      year: '2023',
    },
    {
      type: 'Mezzanine Debt',
      amount: '$42,000,000',
      property: 'Mixed-Use Development',
      location: 'Miami, FL',
      year: '2023',
    },
    {
      type: 'Bridge Loan',
      amount: '$95,000,000',
      property: 'Retail Center',
      location: 'Chicago, IL',
      year: '2023',
    },
    {
      type: 'Construction Loan',
      amount: '$210,000,000',
      property: 'Life Sciences Campus',
      location: 'Boston, MA',
      year: '2022',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, transactions.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.max(0, transactions.length - 3) : prev - 1
    );
  };

  return (
    <section id="transactions" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>
      
      {/* Background Chart Image */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
        <img
          src="https://images.unsplash.com/photo-1762279389020-eeeb69c25813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydCUyMGdyYXBofGVufDF8fHx8MTc2NTM0OTYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Financial charts"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-amber-500 mb-4 tracking-wider uppercase text-sm">
            Transaction Portfolio
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Representative transactions demonstrating our institutional execution capabilities across
            diverse asset classes and capital structures.
          </p>
        </motion.div>

        {/* Transaction Tombstones Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentSlide * (100 / 3)}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {transactions.map((transaction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full md:w-1/3 p-8 bg-white border-t-4 border-amber-500 group hover:shadow-2xl transition-all"
                >
                  {/* Tombstone Header */}
                  <div className="text-center mb-8 pb-6 border-b border-slate-200">
                    <div className="text-sm text-slate-500 mb-2">{transaction.year}</div>
                    <div className="text-4xl text-slate-950 mb-1">
                      {transaction.amount}
                    </div>
                    <div className="text-amber-600">{transaction.type}</div>
                  </div>

                  {/* Property Details */}
                  <div className="space-y-4 text-center">
                    <div>
                      <div className="text-slate-950 mb-1">
                        {transaction.property}
                      </div>
                      <div className="text-slate-500 text-sm">{transaction.location}</div>
                    </div>
                  </div>

                  {/* Footer Line */}
                  <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                    <div className="text-amber-600 text-sm tracking-wider">SBN ADVISORS</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-slate-400">
              {currentSlide + 1} / {Math.max(1, transactions.length - 2)}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentSlide >= transactions.length - 3}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block text-amber-500 hover:text-amber-400 transition-colors"
          >
            View full transaction history →
          </a>
        </motion.div>
      </div>
    </section>
  );
}