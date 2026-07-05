import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, X, Home, Utensils, HeartPulse, ChevronRight } from 'lucide-react';

const careTips = [
  {
    id: 'housing',
    icon: Home,
    title: 'Housing & Environment',
    content: 'Provide a secure, draft-free coop with adequate ventilation. Allocate at least 3-4 square feet per bird inside the coop, and 8-10 square feet in the run. Ensure nesting boxes are clean, lined with fresh straw, and placed in a dark, quiet area. Maintain a consistent light schedule of 14-16 hours for optimal egg production.'
  },
  {
    id: 'nutrition',
    icon: Utensils,
    title: 'Nutrition & Hydration',
    content: 'Feed a high-quality layer pellet or crumble containing 16-18% protein. Supplement with calcium sources like oyster shell for strong eggshells. Ensure constant access to clean, fresh water, as dehydration severely impacts egg production. Avoid feeding moldy food, citrus, or raw beans. Fermented plant juices can be added for natural vitality.'
  },
  {
    id: 'health',
    icon: HeartPulse,
    title: 'Health Monitoring',
    content: 'Regularly observe your flock for signs of illness: lethargy, loss of appetite, pale combs, or abnormal droppings. Practice strict biosecurity by limiting visitors and using dedicated footwear in the coop area. Keep the coop dry and clean to prevent respiratory issues and parasites. Isolate any sick birds immediately to protect the rest of the flock.'
  }
];

export function Resources() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(careTips[0].id);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const activeContent = careTips.find(tip => tip.id === activeTab);

  return (
    <section id="resources" className="py-24 bg-mahogany-900 relative w-full border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-mahogany-800 rounded-3xl p-8 md:p-12 border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex-1 relative z-10 text-center md:text-left">
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Knowledge Base</span>
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-white mb-4 leading-tight">
              Beginner's <span className="text-gold italic">Care Guide</span>
            </h2>
            <p className="text-white/70 max-w-xl text-[16px] md:text-[18px] font-light mb-6 mx-auto md:mx-0">
              New to raising Rhode Island Reds? Discover essential practices for housing, nutrition, and health monitoring to ensure your flock thrives.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gold hover:bg-goldlight text-mahogany-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] transform hover:scale-105 flex items-center gap-3"
            >
              <BookOpen className="w-5 h-5" />
              Open Care Guide
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-mahogany-900/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-4xl bg-eggshell rounded-3xl shadow-2xl overflow-hidden border border-gold/20 flex flex-col md:flex-row h-[80vh] md:h-[600px] z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/50 hover:bg-gray-200 rounded-full flex items-center justify-center text-mahogany-900 transition-colors z-20 md:hidden"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Sidebar */}
              <div className="w-full md:w-1/3 bg-mahogany-900 text-white p-6 md:p-8 flex flex-col border-b md:border-b-0 md:border-r border-gold/20">
                <div className="mb-8 hidden md:block">
                  <h3 className="font-serif text-2xl font-bold text-gold mb-2">Care Tips</h3>
                  <p className="text-white/60 text-sm font-light">Essential practices for healthy Rhode Island Reds.</p>
                </div>
                
                <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                  {careTips.map(tip => (
                    <button
                      key={tip.id}
                      onClick={() => setActiveTab(tip.id)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal shrink-0 ${activeTab === tip.id ? 'bg-gold text-mahogany-900 shadow-md font-semibold' : 'text-white/70 hover:bg-mahogany-800 hover:text-white'}`}
                    >
                      <tip.icon className={`w-5 h-5 shrink-0 ${activeTab === tip.id ? 'text-mahogany-900' : 'text-gold'}`} />
                      <span className="text-sm md:text-base">{tip.title}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto hidden md:block transition-transform ${activeTab === tip.id ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col relative overflow-y-auto">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full hidden md:flex items-center justify-center text-gray-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <AnimatePresence mode="wait">
                  {activeContent && (
                    <motion.div
                      key={activeContent.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full mt-4 md:mt-0"
                    >
                      <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 border border-gold/20 shadow-sm">
                        <activeContent.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl font-bold text-mahogany-900 mb-6">{activeContent.title}</h3>
                      <div className="prose prose-lg prose-mahogany max-w-none text-gray-700 font-light leading-relaxed">
                        <p>{activeContent.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
