import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Scale, Feather, Heart, Egg, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const traits = [
  {
    icon: Feather,
    label: "Plumage & Appearance",
    standard: "Pale white, often sparse feathering",
    rir: "Lustrous dark mahogany, dense and rich"
  },
  {
    icon: Scale,
    label: "Build & Weight",
    standard: "Lightweight (1.5 - 2.0 kg), fragile bone structure",
    rir: "Robust and heavy (2.5 - 3.5 kg), strong structure"
  },
  {
    icon: Heart,
    label: "Temperament",
    standard: "Flighty, nervous, high-stress",
    rir: "Calm, docile, easily handled, resilient"
  },
  {
    icon: Shield,
    label: "Immunity & Lifespan",
    standard: "Prone to disease, 1.5 - 2 years lifespan",
    rir: "Highly disease resistant, 5 - 8 years lifespan"
  },
  {
    icon: Egg,
    label: "Egg Quality",
    standard: "Thin shells, pale yellow watery yolks",
    rir: "Thick brown shells, deep orange rich yolks"
  }
];

export function BreedComparisonSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    percentage = Math.max(5, Math.min(95, percentage)); // prevent complete hide
    setSliderValue(percentage);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-eggshell relative w-full border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Breed Superiority</span>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-mahogany-900 mb-4">
            Interactive <span className="text-gold italic">Comparison</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[16px] md:text-[18px] font-light">
            Slide to compare standard commercial layers with our heritage Rhode Island Reds and see the clear difference in quality.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto h-[650px] md:h-[600px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 select-none touch-none"
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          style={{ cursor: isDragging ? 'grabbing' : 'col-resize' }}
        >
          
          {/* LEFT PANEL: COMMERCIAL HYBRID */}
          <div 
            className="absolute inset-0 bg-gray-50 text-gray-800"
            style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.05] bg-cover bg-center mix-blend-multiply pointer-events-none"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590080826978-8cf9b33a2588?q=80&w=1200&auto=format&fit=crop')" }}
            ></div>
            
            {/* Content Container (Fixed Width to prevent reflow during resize) */}
            <div className="absolute inset-y-0 left-0 w-[100vw] md:w-[1024px] p-6 md:p-12 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 whitespace-nowrap pl-2">Standard Commercial</h3>
              <div className="space-y-6 md:space-y-8 flex-1 pl-2">
                {traits.map((t, i) => (
                  <div key={i} className="flex items-start gap-4 w-[280px] md:w-[320px]">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                      <t.icon className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm md:text-base">{t.label}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{t.standard}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: LCPF RIR */}
          <div 
            className="absolute inset-0 bg-mahogany-900 text-white"
            style={{ clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)` }}
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1200&auto=format&fit=crop')" }}
            ></div>
            
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-l from-mahogany-900/95 via-mahogany-900/70 to-transparent pointer-events-none"></div>

            {/* Content Container (Fixed position relative to right side) */}
            <div className="absolute inset-y-0 right-0 w-[100vw] md:w-[1024px] p-6 md:p-12 flex flex-col items-end text-right">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-8 whitespace-nowrap pr-2">LCPF Rhode Island Red</h3>
              <div className="space-y-6 md:space-y-8 flex-1 flex flex-col items-end pr-2">
                {traits.map((t, i) => (
                  <div key={i} className="flex items-start justify-end gap-4 w-[280px] md:w-[320px]">
                    <div>
                      <h4 className="font-bold text-white text-sm md:text-base">{t.label}</h4>
                      <p className="text-gold/80 text-sm leading-relaxed">{t.rir}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 shadow-inner flex items-center justify-center shrink-0">
                      <t.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SLIDER HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-gold shadow-[0_0_15px_rgba(212,175,55,0.6)] z-10"
            style={{ left: `calc(${sliderValue}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-gold shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
              <ChevronLeft className="w-5 h-5 text-mahogany-900 -mr-1" />
              <ChevronRight className="w-5 h-5 text-mahogany-900 -ml-1" />
            </div>
          </div>

        </div>
        
        <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Drag slider to compare</p>
        </div>
      </div>
    </section>
  );
}
