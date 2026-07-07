import { motion } from 'motion/react';
import { Bird, Egg, Sprout, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Bird,
    title: 'Premium RIR Chicks',
    description: 'High-quality, day-old Rhode Island Red chicks bred for resilience, fast growth, and excellent egg production.',
  },
  {
    icon: Egg,
    title: 'Free-Range Fresh Eggs',
    description: 'Farm-fresh, chemical-free eggs with thicker shells and richer yolks, laid by our naturally raised hens.',
  },
  {
    icon: Sprout,
    title: 'Fertile Hatching Eggs',
    description: 'Carefully selected, high-fertility Rhode Island Red eggs perfect for incubation and hatching.',
  },
  {
    icon: BookOpen,
    title: 'Expert Consultation',
    description: 'Guidance and support for new and experienced poultry farmers on best practices, health, and nutrition.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function Services() {
  return (
    <section id="products" className="w-full py-24 px-6 md:px-12 lg:px-20 relative z-10 bg-mahogany-900 border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Premium Offerings</span>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-white mb-4">
            Our Quality <span className="text-gold italic">Products</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-[16px] md:text-[18px] font-light">
            We provide everything you need to start or enhance your flock with the finest Rhode Island Reds in Cagayan Valley.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-mahogany-800 border border-gold/10 rounded-2xl p-8 hover:bg-mahogany-700 hover:border-gold/30 transition-all duration-300 group shadow-lg"
            >
              <div className="w-14 h-14 bg-mahogany-900 border border-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <service.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{service.title}</h3>
              <p className="text-white/60 leading-relaxed font-light text-[15px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
