import { motion } from 'motion/react';
import { ShieldCheck, Leaf, FileBadge } from 'lucide-react';

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: 'Maximum Biosecurity',
    description: 'Strict no-walk-in policies ensure our flock is 100% free from Avian Flu and ND pathogens.',
  },
  {
    icon: Leaf,
    title: 'Chemical-Free Immunity',
    description: 'Zero synthetic antibiotics. We rely purely on fermented plant juices for natural vitality.',
  },
  {
    icon: FileBadge,
    title: 'Premium Genetics',
    description: 'We raise purebred Rhode Island Reds known for high egg production and meat quality.',
  }
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

export function Trust() {
  return (
    <section id="trust" className="py-20 bg-mahogany-900 text-eggshell w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold text-white mb-12"
        >
          Engineered by Data. Perfected by Nature.
        </motion.h3>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {trustFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-mahogany-800/50 border border-gold/20 hover:border-gold transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-gold mx-auto mb-4" strokeWidth={1.5} />
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-sm font-light text-mahogany-100">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
