import { motion } from 'motion/react';

export function Comparison() {
  return (
    <section id="story" className="py-20 bg-white relative w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">The Science of Nutrition</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-mahogany-900 mb-4">Why LCPF Eggs Command Premium Pricing</h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">A direct comparison of what you feed your family when you choose Cagayan Valley's finest.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-eggshell rounded-3xl p-4 md:p-8 border border-gray-100 shadow-xl"
        >
          <div className="grid grid-cols-3 gap-4 text-center items-center">
            <div className="font-bold text-gray-500 text-xs md:text-base">Feature</div>
            <div className="font-bold text-gray-400 text-xs md:text-base">Standard Grocery Eggs</div>
            <div className="font-black text-mahogany-700 text-xs md:text-lg bg-white py-4 rounded-t-2xl border-t border-l border-r border-gold/30 shadow-sm">LCPF Premium RIR Eggs</div>

            <div className="py-4 border-t border-gray-200 text-xs md:text-sm font-medium text-gray-700">Yolk Quality</div>
            <div className="py-4 border-t border-gray-200 text-xs md:text-sm text-gray-500">Pale Yellow, watery</div>
            <div className="py-4 border-t border-gray-200 font-bold text-orange-600 bg-white border-l border-r border-gold/30 shadow-sm text-xs md:text-sm">Deep Orange, thick (High Omega-3)</div>

            <div className="py-4 border-t border-gray-200 text-xs md:text-sm font-medium text-gray-700">Dietary Source</div>
            <div className="py-4 border-t border-gray-200 text-xs md:text-sm text-gray-500">Synthetic feeds, antibiotics</div>
            <div className="py-4 border-t border-gray-200 font-bold text-green-700 bg-white border-l border-r border-gold/30 shadow-sm text-xs md:text-sm">Herbal Nutrients (FPJ & OHN)</div>

            <div className="py-4 border-t border-gray-200 text-xs md:text-sm font-medium text-gray-700">Farm Environment</div>
            <div className="py-4 border-t border-gray-200 text-xs md:text-sm text-gray-500">Cramped cages, high stress</div>
            <div className="py-4 border-t border-gray-200 font-bold text-mahogany-700 bg-white rounded-b-2xl border-b border-l border-r border-gold/30 shadow-sm mb-2 text-xs md:text-sm">Zero Walk-In Biosecure Free-Range</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
