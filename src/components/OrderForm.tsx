import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export function OrderForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    contactNumber: '',
    productType: 'Premium Brown Eggs (Tray)',
    quantity: 1,
  });

  const getPrice = (product: string) => {
    switch (product) {
      case 'Premium Brown Eggs (Tray)': return 360;
      case 'Premium Egg Subscription (Weekly)': return 360;
      case 'Pure RIR Chicks': return 85;
      case 'RIR Grower / Breeder': return 599;
      default: return 0;
    }
  };

  const totalPrice = getPrice(formData.productType) * formData.quantity;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const getInputClass = (id: keyof typeof formData, defaultBg: string = 'bg-gray-50', defaultBorder: string = 'border-gray-200') => {
    const isError = touched[id] && (typeof formData[id] === 'string' ? (formData[id] as string).trim() === '' : formData[id] <= 0);
    if (isError) {
      return `w-full px-4 py-3 ${defaultBg} rounded-xl border border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition`;
    }
    return `w-full px-4 py-3 ${defaultBg} rounded-xl border ${defaultBorder} focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition`;
  };

  const isValid = formData.customerName.trim() !== '' && formData.address.trim() !== '' && formData.contactNumber.trim() !== '' && formData.quantity > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isValid) {
      alert("Please complete your name, contact number, and address correctly.");
      return;
    }

    setStatus('submitting');
    
    setTimeout(() => {
      setStatus('success');
      
      const msg = `Hello Legal Chicks! 🐓

I want to secure a premium order:
👤 *Name:* ${formData.customerName}
📞 *Contact:* ${formData.contactNumber}
📍 *Area:* ${formData.address}
📦 *Item:* ${formData.productType} (x${formData.quantity})
💰 *Estimated Total:* ₱${totalPrice}

Is this available for the next harvest?`;

      // Copying to clipboard as FB Messenger does not reliably support pre-filled text
      navigator.clipboard.writeText(msg).catch(() => {});
      window.open(`https://m.me/LegalChicksPoultryFarm`, '_blank');
      
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="order" className="py-24 bg-eggshell relative w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mahogany-900 mb-3">Skip the Grocery Aisle</h2>
              <p className="text-gray-500 font-light">Order direct from the farm. We will route your request instantly via Messenger.</p>
            </div>

            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-3xl font-serif text-mahogany-900 mb-4">Request Sent!</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Redirecting to Messenger to complete your order...
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="customerName" className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="customerName" 
                      required 
                      value={formData.customerName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('customerName')}
                    />
                    {touched.customerName && !formData.customerName.trim() && (
                      <p className="text-red-500 text-xs mt-2 font-medium">Full name is required</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-bold text-gray-900 mb-2">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="contactNumber" 
                      required 
                      placeholder="09..." 
                      value={formData.contactNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('contactNumber')}
                    />
                    {touched.contactNumber && !formData.contactNumber.trim() && (
                      <p className="text-red-500 text-xs mt-2 font-medium">Mobile number is required</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-bold text-gray-900 mb-2">Delivery Area / Landmark</label>
                    <input 
                      type="text" 
                      id="address" 
                      required 
                      placeholder="Centro Northeast, Solana..." 
                      value={formData.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('address')}
                    />
                    {touched.address && !formData.address.trim() && (
                      <p className="text-red-500 text-xs mt-2 font-medium">Delivery area is required</p>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 bg-mahogany-100/50 p-6 rounded-2xl border border-mahogany-100">
                  <div>
                    <label htmlFor="productType" className="block text-sm font-bold text-mahogany-900 mb-2">Select Premium Product</label>
                    <select 
                      id="productType" 
                      value={formData.productType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('productType', 'bg-white', 'border-mahogany-200')}
                    >
                      <option value="Premium Brown Eggs (Tray)">Premium Brown Eggs - ₱360/tray</option>
                      <option value="Premium Egg Subscription (Weekly)">Weekly Egg Subscription (Priority) - ₱360/week</option>
                      <option value="Pure RIR Chicks">Pure RIR Chicks - ₱85/head</option>
                      <option value="RIR Grower / Breeder">Pure RIR Roosters / Breeders - ₱599/head</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-bold text-mahogany-900 mb-2">Quantity</label>
                    <input 
                      type="number" 
                      id="quantity" 
                      min="1" 
                      required 
                      value={formData.quantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('quantity', 'bg-white', 'border-mahogany-200')} 
                    />
                    {touched.quantity && formData.quantity <= 0 && (
                      <p className="text-red-500 text-xs mt-2 font-medium">Valid quantity required</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-900 text-white p-6 rounded-2xl">
                  <div>
                    <p className="text-sm text-gray-400 font-light">Estimated Total</p>
                    <p className="text-3xl font-black text-gold">₱<span>{totalPrice.toLocaleString()}</span></p>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status !== 'idle' || !isValid}
                    className="w-full sm:w-auto bg-gold hover:bg-goldlight text-mahogany-900 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg shadow-gold/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-mahogany-900/30 border-t-mahogany-900 rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" /> Send Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
