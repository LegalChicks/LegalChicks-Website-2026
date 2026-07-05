/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { BreedComparisonSlider } from './components/BreedComparisonSlider';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { ProductCatalog } from './components/ProductCatalog';
import { Resources } from './components/Resources';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';
import { ChatFab } from './components/ChatFab';
import { motion, useScroll } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-eggshell text-gray-800 font-sans relative flex flex-col selection:bg-gold selection:text-mahogany-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <title>Legal Chicks - Cagayan Valley's Premier RIR Hub</title>
      <meta name="description" content="Premium, chemical-free Rhode Island Reds in Solana. High-quality day-old chicks, ready-to-lay pullets, and farm-fresh free-range eggs." />
      <meta name="keywords" content="Rhode Island Reds, RIR, Cagayan Valley, Solana, fresh eggs, day-old chicks, pullets, natural farming" />
      <meta property="og:title" content="Legal Chicks - Premier RIR Hub" />
      <meta property="og:description" content="Premium, chemical-free Rhode Island Reds in Solana. High-quality chicks, pullets, and farm-fresh eggs." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1548550023-2bf3c49b6574?auto=format&fit=crop&q=80&w=1200" />
      
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center relative w-full">
        <Hero />
        <Comparison />
        <BreedComparisonSlider />
        <Trust />
        <ProductCatalog />
        <Resources />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <OrderForm />
      </main>

      <Footer />
      <ChatFab />
    </div>
  );
}

