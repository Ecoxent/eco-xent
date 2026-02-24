import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MarqueeStrip = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  const words1 = "ORGANIC  ·  BOTANICAL  ·  HANDCRAFTED  ·  LUXURY  ·  PURE  ·  NATURAL  ·  ";
  const words2 = "ECO-XENT  ·  SERUM  ·  HAIR OIL  ·  SHAMPOO  ·  SOAP  ·  PREMIUM  ·  ";

  return (
    <div
      ref={ref}
      className="relative py-6 overflow-hidden select-none"
      style={{ background: "hsl(var(--forest))" }}
    >
      <motion.div className="flex whitespace-nowrap mb-1.5" style={{ x: x1 }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-heading font-light tracking-tight mx-2"
            style={{
              WebkitTextStroke: "1px hsl(0 0% 100% / 0.15)",
              WebkitTextFillColor: "transparent",
            }}
          >
            {words1}
          </span>
        ))}
      </motion.div>
      <motion.div className="flex whitespace-nowrap" style={{ x: x2 }}>
        {[0, 1, 2].map((i) => (
          <span key={i} className="text-[10px] font-body font-light tracking-[0.4em] uppercase mx-4" style={{ color: "hsl(0 0% 100% / 0.35)" }}>
            {words2}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeStrip;