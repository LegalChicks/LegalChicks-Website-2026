import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Reyes",
    role: "Local Baker, Tuguegarao",
    content: "The difference in yolk color and consistency is unbelievable. My pastries have never looked or tasted better since switching to LCPF's premium eggs.",
    rating: 5,
  },
  {
    name: "Dr. Antonio Santos",
    role: "Nutritionist",
    content: "As a health professional, I appreciate their strict chemical-free process. These are the only eggs I confidently recommend to my patients for optimal Omega-3 intake.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Backyard Farmer",
    content: "I bought their ready-to-lay pullets 6 months ago. Incredible genetics! Almost 100% laying rate and the birds are extremely resilient and healthy.",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-mahogany-900 relative w-full border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Customer Success</span>
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-white mb-4">
            Trusted by Our <span className="text-gold italic">Community</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-[16px] md:text-[18px] font-light">
            Don't just take our word for it. Hear what local chefs, nutritionists, and farmers have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-mahogany-800 p-8 rounded-3xl border border-gold/10 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 text-[15px] leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-white font-bold tracking-wide">{testimonial.name}</h4>
                <p className="text-gold/70 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
