import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ShoppingBag } from 'lucide-react';

export function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-mahogany-900 w-full">
      {/* Background imagery with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(58, 13, 13, 0.95), rgba(58, 13, 13, 0.7)), url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop')"
          }}
        ></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/50 backdrop-blur-md text-goldlight mb-6 shadow-sm">
            <span className="text-xs font-bold tracking-widest uppercase">Solana's First Data-Driven Farm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight mb-6 drop-shadow-2xl">
              Taste the Difference of <span className="text-gold italic font-light">Absolute Purity.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-light drop-shadow-md">
              Stop settling for pale, chemically-raised commercial eggs. Upgrade your family's nutrition with our 100% natural, pasture-raised Rhode Island Red premium eggs. Richer yolks. Thicker shells. Unbeatable health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
              <a href="#order" className="bg-gold hover:bg-white text-mahogany-900 text-center px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_25px_rgba(212,175,55,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" /> Secure Order (₱380/Tray)
              </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
