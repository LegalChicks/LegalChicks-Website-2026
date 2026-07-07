import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What makes your Rhode Island Reds (RIR) different?",
    answer: "Our RIRs are bred with zero compromise on quality. We focus on the 'Dark Mahogany' genetics, raising them in a stress-free, chemical-free environment in Solana. This results in healthier birds, thicker egg shells, and richer yolks."
  },
  {
    question: "Do you use antibiotics or chemicals?",
    answer: "No, we strictly follow natural farming practices. Our flock is raised chemical-free and we rely on proper nutrition, natural supplements, and excellent hygiene to maintain their health and immunity."
  },
  {
    question: "Do you deliver chicks and eggs?",
    answer: "Yes, we arrange deliveries within Cagayan Valley and neighboring areas. Delivery fees may apply depending on your location. Please contact us through the form for specific shipping arrangements."
  },
  {
    question: "Can I visit your farm in Solana?",
    answer: "We welcome farm visits by appointment. It's a great way to see our free-range setup and the quality of our Rhode Island Reds firsthand. Send us a message to schedule a visit."
  },
  {
    question: "Do you offer wholesale pricing?",
    answer: "Yes, we offer discounted rates for bulk orders of day-old chicks, fertile eggs, and fresh eggs. Get in touch with us to discuss your requirements and receive a custom quote."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-24 px-6 md:px-12 lg:px-20 relative z-10 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-mahogany-900 mb-4">
            Common <span className="text-gold italic">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[16px] md:text-[18px] font-light">
            Everything you need to know about our farm, products, and practices.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-eggshell border-gold/30 shadow-md' : 'bg-white border-gray-100 hover:border-gold/20 hover:shadow-sm'}`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-[16px] md:text-[17px] font-semibold pr-8 transition-colors ${isOpen ? 'text-mahogany-900' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-gold/20 rotate-180' : 'bg-gray-50'}`}>
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-mahogany-900' : 'text-gray-400'}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed font-light text-[15px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
