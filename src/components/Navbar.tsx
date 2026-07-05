import { Egg, Menu } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* Urgency Top Bar */}
      <div className="bg-mahogany-900 text-goldlight text-xs md:text-sm font-semibold text-center py-2 px-4 tracking-wide z-50 relative">
          ⚠️ HIGH DEMAND: Our Premium Trays sell out quickly every harvest! <a href="#order" className="underline hover:text-white ml-2 transition">Reserve Yours Now</a>
      </div>
      
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-8 left-0 right-0 z-50 w-full transition-all duration-300 py-2 ${isScrolled ? 'bg-eggshell/95 backdrop-blur-md border-b border-gold/20 shadow-sm' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gold/30">
                    <Egg className="h-6 w-6 text-mahogany-700" />
                </div>
                <span className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-mahogany-900' : 'text-white'}`}>LEGAL CHICKS</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-10 text-[15px] font-medium">
              <a href="#" className={`transition-colors ${isScrolled ? 'text-gray-800 hover:text-mahogany-700' : 'text-white/90 hover:text-white'}`}>Our Story</a>
              <a href="#" className={`transition-colors ${isScrolled ? 'text-gray-800 hover:text-mahogany-700' : 'text-white/90 hover:text-white'}`}>Why Trust Us</a>
              <a href="#products" className={`transition-colors ${isScrolled ? 'text-gray-800 hover:text-mahogany-700' : 'text-white/90 hover:text-white'}`}>Products</a>
              <a href="#gallery" className={`transition-colors ${isScrolled ? 'text-gray-800 hover:text-mahogany-700' : 'text-white/90 hover:text-white'}`}>Gallery</a>
              <a href="#faqs" className={`transition-colors ${isScrolled ? 'text-gray-800 hover:text-mahogany-700' : 'text-white/90 hover:text-white'}`}>FAQs</a>
            </div>

            <div className="hidden md:flex">
                <a href="#order" className="bg-gold hover:bg-goldlight text-mahogany-900 px-7 py-2.5 rounded-full font-bold transition shadow-[0_0_15px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5">
                    Claim Your Tray
                </a>
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <button className="md:hidden bg-gold hover:bg-goldlight text-mahogany-900 px-4 py-2 rounded-full font-semibold text-sm transition-all shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                Order
              </button>
              <button className={`p-1 ${isScrolled ? 'text-mahogany-900' : 'text-white'}`}>
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
