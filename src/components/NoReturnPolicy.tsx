import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function NoReturnPolicy() {
  return (
    <div className="min-h-screen bg-eggshell text-gray-800 font-sans relative flex flex-col selection:bg-gold selection:text-mahogany-900">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-10">
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">Policy & Terms</span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-mahogany-900 mb-4">Absolute Non-Revocability & Transfer of Liability Clause</h1>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed font-light">
            <section>
              <h2 className="text-xl font-bold text-mahogany-800 mb-3 font-serif">I. Irrevocability of Sale & Strict Biosecurity</h2>
              <p>
                All commercial transactions with Legal.Chicks Poultry Farm are absolute, final, and strictly non-rescindable. Due to imperative phytosanitary protocols safeguarding overarching flock integrity, the reintegration of dispatched biological assets is unequivocally prohibited. Consequently, the enterprise mandates a strict policy of zero returns, zero exchanges, and zero financial restitutions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-mahogany-800 mb-3 font-serif">II. FOB Origin & Comprehensive Risk Transfer</h2>
              <p>
                This enterprise operates exclusively on a Free on Board (FOB) Origin basis. Ipso facto, all fiduciary obligations and liabilities for biological degradation, thermal trauma, or logistical delays transfer entirely to the purchaser at the precise epoch of tender to the designated freight vector. Legal.Chicks Poultry Farm maintains zero liability for damages sustained in transitu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-mahogany-800 mb-3 font-serif">III. Exclusion of Warranties (Null Ab Initio)</h2>
              <p>
                The enterprise expressly disavows all implied warranties of merchantability or post-transit viability for fertile genetic material. Given the uncontrollable exogenous variables inherent to third-party transit (e.g., barometric fluctuation, unauthorized radiological scanning), any developmental or hatch-yield guarantees are legally void and deemed null ab initio. Remittance of capital constitutes the purchaser's irrevocable assent to assume all inherent risks and indemnify the seller against subsequent claims.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
