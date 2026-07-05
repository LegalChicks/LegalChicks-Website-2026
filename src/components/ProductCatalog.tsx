import { motion } from 'motion/react';
import { Check, ShieldCheck, Activity, Award } from 'lucide-react';

const products = [
  {
    name: "Premium Brown Eggs",
    category: "Fresh Produce",
    price: "₱360",
    unit: "per tray",
    description: "Farm-fresh, chemical-free eggs with deep orange yolks and thick shells.",
    features: ["High Omega-3", "Zero synthetic antibiotics", "Harvested daily"],
    certifications: ["GAHP Certified Farm"]
  },
  {
    name: "Day-Old Chicks (DOC)",
    category: "Livestock",
    price: "₱100",
    unit: "per head",
    description: "Purebred Rhode Island Red chicks, guaranteed healthy and active upon release.",
    features: ["Marek's vaccinated", "Dark Mahogany genetics", "High survivability rate"],
    certifications: ["NMD & IB Vaccinated"]
  },
  {
    name: "Ready-to-Lay Pullets",
    category: "Livestock",
    price: "₱650",
    unit: "per head",
    description: "4-5 month old pullets ready to start producing premium eggs for your flock.",
    features: ["Complete vaccination program", "Free-range conditioned", "Excellent body weight"],
    certifications: ["Full health record provided"]
  },
  {
    name: "Grower / Breeder Roosters",
    category: "Livestock",
    price: "₱749",
    unit: "per head",
    description: "Vigorous Rhode Island Red roosters for breeding and flock expansion.",
    features: ["Aggressive breeders", "Superior genetics", "Optimal feed conversion"],
    certifications: ["DTI & RSBSA Registered"]
  }
];

export function ProductCatalog() {
  return (
    <section id="catalog" className="py-24 bg-white relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Our Catalog</span>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-mahogany-900 mb-4">
            Premium <span className="text-gold italic">Specifications</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[16px] md:text-[18px] font-light">
            Explore our complete range of purebred Rhode Island Reds and farm-fresh products, raised with zero compromise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-eggshell border border-gray-100 rounded-3xl p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className="mb-6 relative z-10">
                <span className="text-xs font-bold text-mahogany-500 uppercase tracking-wider mb-2 block">{product.category}</span>
                <h3 className="text-xl font-bold text-mahogany-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed h-16">{product.description}</p>
              </div>

              <div className="mb-6 relative z-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-gold">{product.price}</span>
                  <span className="text-gray-500 text-sm font-medium">/{product.unit}</span>
                </div>
              </div>

              <div className="flex-grow relative z-10">
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-gold" /> Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold" /> Certifications
                </h4>
                <ul className="space-y-2">
                  {product.certifications.map((cert, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 text-sm text-gray-600">
                      <ShieldCheck className="w-4 h-4 text-mahogany-700 shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 relative z-10">
                <a href="#order" className="block w-full py-3 px-4 bg-white border border-gray-200 rounded-xl text-center text-sm font-bold text-mahogany-900 hover:bg-gold hover:border-gold hover:text-white transition-colors duration-300">
                  Select Product
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
