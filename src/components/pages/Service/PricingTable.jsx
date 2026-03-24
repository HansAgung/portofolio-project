import React from 'react';
import { Check, Zap } from 'lucide-react';

const pricingTiers = [
  { name: "Starter Pack", price: "5jt", features: ["Landing Page / UI Design", "Responsive Design", "Basic SEO", "1 Bulan Support"], recommended: false },
  { name: "Pro Quest", price: "15jt", features: ["Multi-page Web/App", "API Integration", "VIPER Architecture", "Testing Coverage 85%"], recommended: true },
  { name: "Ultimate Boss", price: "Custom", features: ["Enterprise Solutions", "AI Integration", "Cross-platform Mobile", "Priority 24/7 Support"], recommended: false }
];

const PricingTable = ({ discountPercentage = 0 }) => {
  const calculatePrice = (originalPriceStr) => {
    const originalValue = parseInt(originalPriceStr);
    if (isNaN(originalValue)) return originalPriceStr;

    const discountedValue = originalValue - (originalValue * discountPercentage) / 100;
    // Format agar tidak ada desimal panjang, misal .0
    return `${parseFloat(discountedValue.toFixed(1))}jt`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {pricingTiers.map((tier, idx) => (
        <div key={idx} className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col ${tier.recommended ? 'border-blue-600 bg-blue-600/5 scale-105 z-10 shadow-2xl shadow-blue-900/20' : 'border-white/10 bg-slate-900/30'}`}>
          {tier.recommended && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[9px] text-white font-black py-1.5 px-6 rounded-full uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg shadow-blue-600/40">
              <Zap size={10} fill="white" /> Most Popular
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-blue-500 font-mono text-[9px] mb-2 uppercase tracking-[0.3em] font-bold">// {tier.name}</h3>
            <div className="flex flex-col">
              {discountPercentage > 0 && tier.price !== 'Custom' && (
                <span className="text-slate-600 text-[11px] line-through decoration-red-500/50 font-bold italic mb-1">IDR {tier.price}</span>
              )}
              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-black italic transition-colors duration-500 ${discountPercentage > 0 ? 'text-yellow-500' : 'text-white'}`}>
                  {tier.price === 'Custom' ? 'Custom' : `IDR ${calculatePrice(tier.price)}`}
                </span>
                {tier.price !== 'Custom' && <span className="text-slate-500 text-[9px] uppercase font-bold tracking-widest">/quest</span>}
              </div>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            {tier.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[10px] text-slate-300 font-bold uppercase tracking-tight leading-tight">
                <Check size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>

          <button className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all active:scale-95 ${tier.recommended ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;