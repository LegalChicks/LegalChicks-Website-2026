import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function OrderForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    contactNumber: '',
    productType: 'Organic Eggs (Tray)',
    quantity: 1,
  });

  const getPrice = (product: string) => {
    switch (product) {
      case 'Organic Eggs (Tray)': return 380;
      case 'Organic Egg Subscription (Weekly)': return 380;
      case 'Day-Old Chicks (DOC)': return 150;
      case 'Fertile Eggs': return 50;
      case 'Grower / Breeder Roosters': return 459;
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
    let isError = false;
    if (touched[id]) {
      if (id === 'contactNumber') {
        isError = !/^09\d{9}$/.test(formData.contactNumber);
      } else if (typeof formData[id] === 'string') {
        isError = (formData[id] as string).trim() === '';
      } else {
        isError = formData[id] <= 0;
      }
    }

    if (isError) {
      return `w-full px-4 py-3 ${defaultBg} rounded-xl border border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition`;
    }
    return `w-full px-4 py-3 ${defaultBg} rounded-xl border ${defaultBorder} focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition`;
  };

  const isValid = formData.customerName.trim() !== '' && 
                  formData.address.trim() !== '' && 
                  /^09\d{9}$/.test(formData.contactNumber) && 
                  formData.quantity > 0;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isValid) {
      alert("Please complete your name, contact number, and address correctly.");
      return;
    }

    setStatus('submitting');
    
    const orderData = {
      fullName: formData.customerName,
      mobileNumber: formData.contactNumber, 
      address: formData.address,
      product: formData.productType,
      quantity: formData.quantity,
      totalPrice: totalPrice
    };

    // --- ADD THE EMAILJS SCRIPT HERE ---
    emailjs.send(
      'service_3rj0t59',     // Get this from EmailJS dashboard
      'template_f2803tv',    // Get this from EmailJS dashboard
      orderData,             // This links directly to your template variables
      'RY1tGe1iEiMGRXdX4'      // Get this from EmailJS Account > API Keys
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success'); 
      setFormData({
        customerName: '',
        address: '',
        contactNumber: '',
        productType: 'Organic Eggs (Tray)',
        quantity: 1,
      });
      setTouched({});
      setTimeout(() => setStatus('idle'), 4000);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setStatus('idle'); 
      alert("Something went wrong sending your order. Please try again.");
    });
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
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-3xl font-serif text-mahogany-900 mb-4">Request Sent!</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  We have received your order. We will contact you shortly to confirm!
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
                      pattern="09[0-9]{9}"
                      maxLength={11}
                      placeholder="09XXXXXXXXX" 
                      value={formData.contactNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('contactNumber')}
                    />
                    {touched.contactNumber && !/^09\d{9}$/.test(formData.contactNumber) && (
                      <p className="text-red-500 text-xs mt-2 font-medium">Valid 11-digit number starting with 09 is required</p>
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
                      <option value="Organic Eggs (Tray)">Organic Eggs - ₱380/tray</option>
                      <option value="Organic Egg Subscription (Weekly)">Weekly Egg Subscription (Priority) - ₱380/week</option>
                      <option value="Day-Old Chicks (DOC)">Day-Old Chicks (DOC) - ₱150/head</option>
                      <option value="Fertile Eggs">Fertile Eggs - ₱50/piece</option>
                      <option value="Grower / Breeder Roosters">Grower / Breeder Roosters - ₱459 - ₱899/head</option>
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
