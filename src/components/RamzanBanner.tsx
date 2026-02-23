import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Gift, Clock, Sparkles } from "lucide-react";

const offers = [
  { product: "Botanic Shield Serum", discount: "22% OFF" },
  { product: "Hair Healer Oil", discount: "25% OFF" },
  { product: "Herbal Shampoo", discount: "21% OFF" },
  { product: "Herbal Soap", discount: "24% OFF" },
  { product: "Velvet Ritual Conditioner", discount: "23% OFF" },
  { product: "All-in-One Serum", discount: "25% OFF" },
  { product: "Eco-Xent Cleaning Soap", discount: "26% OFF" },
];

const RamzanBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-forest" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 mb-5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-body font-medium tracking-[0.3em] uppercase text-gold">
              Limited Time Offer
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-3">
            Ramzan <span className="text-gold">Special</span> Sale
          </h2>
          <p className="text-sm md:text-base font-body text-white/60 max-w-lg mx-auto">
            Celebrate the holy month with exclusive discounts on all our healing products — up to 26% OFF
          </p>

          <motion.div
            className="flex items-center justify-center gap-3 mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-xs font-body tracking-wider uppercase text-white/50">
              Offer valid during Ramzan only
            </span>
          </motion.div>
        </motion.div>

        {/* Offers grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-10">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.product}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="relative rounded-xl p-4 md:p-5 text-center border border-white/10 hover:border-gold/30 transition-all duration-300"
              style={{ background: "hsl(120 35% 18% / 0.6)", backdropFilter: "blur(8px)" }}
            >
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-wider uppercase bg-gold text-primary-foreground">
                  {offer.discount}
                </span>
              </div>
              <Gift className="w-5 h-5 text-gold/60 mx-auto mb-2 mt-1" />
              <p className="text-xs md:text-sm font-heading font-semibold text-white leading-snug">
                {offer.product}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-xs tracking-widest uppercase bg-gold text-primary-foreground hover:bg-gold-dark transition-all duration-300"
          >
            <Star className="w-4 h-4" />
            Shop Ramzan Deals
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RamzanBanner;