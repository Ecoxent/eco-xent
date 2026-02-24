import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trustPoints = [
  { icon: "🌿", title: "100% Organic", desc: "Pure botanical ingredients" },
  { icon: "🧪", title: "Lab Tested", desc: "Dermatologist approved" },
  { icon: "🚚", title: "Fast Delivery", desc: "Nationwide COD" },
  { icon: "⭐", title: "5,000+ Reviews", desc: "Verified customers" },
  { icon: "🔄", title: "Easy Returns", desc: "7-day guarantee" },
  { icon: "🏅", title: "Award Winning", desc: "Premium quality" },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-12 bg-secondary border-b border-border">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center gap-1.5"
            >
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-lg mb-0.5 shadow-sm">
                {point.icon}
              </div>
              <p className="text-[11px] font-heading font-semibold text-foreground tracking-wide">{point.title}</p>
              <p className="text-[10px] text-muted-foreground font-body">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;