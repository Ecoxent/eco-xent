import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import ramzanBg from "@/assets/ramzan-banner-bg.jpg";

const offers = [
  { product: "Botanic Shield Serum", discount: "22%" },
  { product: "Hair Healer Oil", discount: "25%" },
  { product: "Herbal Shampoo", discount: "21%" },
  { product: "Herbal Soap", discount: "24%" },
  { product: "Velvet Ritual Conditioner", discount: "23%" },
  { product: "All-in-One Serum", discount: "25%" },
  { product: "Eco-Xent Cleaning Soap", discount: "26%" },
];

const RamzanBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={ramzanBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <motion.p
            className="text-gold tracking-[0.4em] uppercase text-[10px] md:text-[11px] font-body font-medium mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            ☪ Ramzan Mubarak ☪
          </motion.p>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Up to <span className="text-gold">26% OFF</span> This Ramzan
          </motion.h2>

          <motion.p
            className="text-sm md:text-base font-body text-white/60 mb-10 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Exclusive discounts on all healing products — limited time only
          </motion.p>

          {/* Discount pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {offers.map((offer, i) => (
              <motion.div
                key={offer.product}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.06 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/25 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-[11px] font-body text-white/80">{offer.product}</span>
                <span className="text-[10px] font-body font-bold tracking-wider text-gold">{offer.discount}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-xs tracking-widest uppercase bg-gold text-primary-foreground hover:bg-gold-dark transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Star className="w-4 h-4" />
            Shop Ramzan Deals
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default RamzanBanner;