import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import showcaseSerum from "@/assets/showcase-serum.png";
import showcaseHairOil from "@/assets/showcase-hairoil.png";
import showcaseShampoo from "@/assets/showcase-shampoo.png";
import showcaseSoap from "@/assets/showcase-soap.png";
import showcaseConditioner from "@/assets/showcase-conditioner.png";

const showcaseProducts = [
  {
    name: "All-in-One Serum",
    tagline: "Complete Skin Transformation",
    highlights: ["Reduces Melasma", "Minimizes Fine Lines & Wrinkles", "Lightens Dark Circles & Puffiness", "Fades Dark Spots & Heals Dry Patches"],
    image: showcaseSerum,
  },
  {
    name: "Hair Healer Oil",
    tagline: "Nourishing Hair Fall Solution",
    highlights: ["13+ Botanical Oils", "Strengthens Follicles", "Promotes Growth"],
    image: showcaseHairOil,
  },
  {
    name: "Herbal Shampoo",
    tagline: "Gentle Herbal Cleanse",
    highlights: ["Sulfate-Free Formula", "Neem & Amla Infused", "Soft & Nourished Hair"],
    image: showcaseShampoo,
  },
  {
    name: "Herbal Soap",
    tagline: "Natural Skin Purifier",
    highlights: ["Reduces Acne", "Handcrafted with Herbs", "Nourishes & Hydrates"],
    image: showcaseSoap,
  },
  {
    name: "Velvet Ritual Conditioner",
    tagline: "Advanced Hair Transformation",
    highlights: ["Deeply Hydrates", "Enhances Shine", "Daily Shield Protection"],
    image: showcaseConditioner,
  },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 gradient-radial-gold pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            className="text-gold tracking-[0.4em] uppercase text-[11px] font-body font-medium mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6 }}
          >
            Our Collection
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-semibold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Discover <span className="text-gradient-gold italic">Eco-Xent</span> Products
          </motion.h2>
          <motion.div
            className="w-16 h-px bg-gold/40 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {showcaseProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Product image card */}
              <div
                className="w-full aspect-square rounded-2xl overflow-hidden relative flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl"
                style={{
                  boxShadow: "0 4px 24px hsl(var(--gold) / 0.1), 0 1px 12px hsl(var(--forest) / 0.06)",
                  border: "1.5px solid hsl(var(--gold) / 0.2)",
                  background: "linear-gradient(160deg, hsl(var(--cream)), hsl(var(--secondary)), hsl(var(--cream)))",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[78%] h-[78%] object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
                {/* Inner glow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: "radial-gradient(ellipse at 50% 80%, hsl(var(--gold) / 0.05), transparent 70%)",
                  }}
                />
              </div>

              {/* Product info */}
              <p className="text-[10px] font-body font-medium tracking-[0.25em] uppercase text-gold mb-1">
                {product.tagline}
              </p>
              <h3 className="text-sm md:text-base font-heading font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-1.5">
                {product.highlights.slice(0, 2).map((h) => (
                  <span
                    key={h}
                    className="px-2.5 py-1 rounded-full text-[10px] font-body font-medium border border-gold/15 text-foreground/70 bg-cream"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
