import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-12 md:py-20 px-6 md:px-12 lg:px-20 relative z-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="font-serif text-2xl font-bold tracking-wide text-white">
            LEGAL CHICKS
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            Cagayan Valley's premier source for purebred Rhode Island Reds. We raise our flock with zero compromise on quality, genetics, and health.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/LegalChicksPoultryFarm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gold hover:text-mahogany-900 transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gold hover:text-mahogany-900 transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gold hover:text-mahogany-900 transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Why Trust Us</a></li>
            <li><a href="#products" className="hover:text-gold transition-colors">Products & Services</a></li>
            <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            <li><a href="#faqs" className="hover:text-gold transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold tracking-wide">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span>Solana, Cagayan Valley, Philippines 3503</span>
            </li>
            <li className="flex items-center gap-3">
              <Facebook className="w-5 h-5 text-gold shrink-0" />
              <a href="https://www.facebook.com/LegalChicksPoultryFarm" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                Legal Chicks Poultry Farm
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold tracking-wide">Stay Updated</h4>
          <p className="text-gray-400 text-sm font-light">
            Subscribe to our newsletter for farm updates, availability, and poultry tips.
          </p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-gray-800 hover:bg-gold text-white hover:text-mahogany-900 py-3 rounded-lg font-semibold text-sm transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 flex flex-col items-center gap-2 text-sm font-light text-center">
        <p>&copy; {new Date().getFullYear()} Legal Chicks Poultry Farm (LCPF). Engineered with Precision in Solana, Cagayan Valley.</p>
        <p className="opacity-50 text-xs">DTI & RSBSA Registered Agricultural Producer</p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="hover:text-white transition-colors text-xs">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors text-xs">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
