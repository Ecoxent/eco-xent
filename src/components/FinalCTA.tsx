import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-8 px-4 md:px-8 overflow-hidden">
      <motion.div
        ref={ref}
        className="relative rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, hsl(90 30% 14%) 0%, hsl(90 28% 22%) 50%, hsl(90 30% 14%) 100%)",
        }}
      >
        {/* Subtle gold light */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, hsl(var(--gold) / 0.08) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6 py-20">
          <motion.p
            className="text-gold/60 tracking-[0.4em] uppercase text-[11px] font-body font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Join the Movement
          </motion.p>

          <motion.h2
            className="text-3xl md:text-5xl font-heading font-light text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Experience the Power of
          </motion.h2>
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-light mb-8 leading-tight text-gold-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
          >
            Pure Botanicals
          </motion.h2>

          <motion.p
            className="text-white/40 font-body mb-10 leading-relaxed max-w-lg mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Already trusted by thousands who chose purity over chemicals.
            Your transformation starts here.
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
