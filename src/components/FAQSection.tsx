import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Delivery Pakistan mein kahan tak hoti hai?",
    a: "Hum poore Pakistan mein deliver karte hain — Karachi, Lahore, Islamabad, Peshawar, Quetta, aur har chote bade shehar tak. Delivery time usually 3-5 working days hai.",
  },
  {
    q: "Cash on Delivery (COD) available hai?",
    a: "Haan! Bilkul. Hum COD offer karte hain poore Pakistan mein. Pehle order karein, delivery pe payment karein. Koi advance nahi.",
  },
  {
    q: "Kya ye products safe hain? Side effects to nahi?",
    a: "Haan, bilkul safe hain. Sare products 100% natural aur organic ingredients se bane hain. Koi harmful chemical, paraben, ya sulfate nahi. Sensitive skin ke liye bhi suitable hain. Phir bhi pehli baar use karne se pehle ek jagah patch test kar lein.",
  },
  {
    q: "Hair Oil kitne time mein results deta hai?",
    a: "Zyada tar customers 2-4 hafte mein farq mehsoos karte hain. Best results ke liye hafte mein 2-3 baar use karein, raat ko lagayen aur subah dholen. 8 hafte regular use se kafi strong results milte hain.",
  },
  {
    q: "Ek baar order karne ke baad kab tak milega?",
    a: "Order confirm hone ke baad 24 ghante mein dispatch ho jata hai. Phir 3-5 working days mein delivery. Hum WhatsApp pe tracking update dete hain.",
  },
  {
    q: "Return ya refund policy kya hai?",
    a: "Agar product damaged ya wrong deliver hua hai to hum 100% refund ya replacement dete hain. Sirf WhatsApp pe photo bhejein 48 ghante ke andar. Opened products return nahi hote — is liye pehle patch test zaroor karein.",
  },
  {
    q: "Bulk order ya gift sets available hain?",
    a: "Haan! Eid, shadi, ya kisi bhi occasion ke liye gift sets available hain. Bulk orders pe special discount milta hai. WhatsApp karein aur batayen kya chahiye — hum customize kar dete hain.",
  },
  {
    q: "Order kaise karna hai?",
    a: "Bahut simple! Product pe 'WhatsApp pe Order' button dabayein — aapka message ready ho jayega. Ya seedha WhatsApp karein: 0329-5991062. Name, address, aur product bata dein — bas!",
  },
];

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: open
          ? "linear-gradient(160deg, hsl(var(--primary) / 0.07), hsl(var(--secondary) / 0.5))"
          : "linear-gradient(160deg, hsl(var(--primary) / 0.03), hsl(var(--secondary) / 0.3))",
        border: open
          ? "1px solid hsl(var(--primary) / 0.18)"
          : "1px solid hsl(var(--primary) / 0.07)",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-6 text-left"
      >
        <span className="font-heading font-semibold text-foreground text-sm md:text-base leading-snug">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center mt-0.5"
          style={{ background: open ? "hsl(var(--primary) / 0.15)" : "transparent" }}
        >
          {open ? (
            <Minus className="w-3.5 h-3.5 text-primary" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-primary/60" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px w-full bg-gradient-to-r from-primary/15 to-transparent mb-4" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: "-80px" });

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-primary tracking-[0.4em] uppercase text-xs font-body font-medium">Aksar Sawaal</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-4">
            FAQ
          </h2>
          <p className="text-muted-foreground font-body text-base">
            Koi sawaal hai? Neeche dekho — shayad jawab mil jaye!
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3 mb-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center rounded-3xl p-8"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--secondary) / 0.4))",
            border: "1px solid hsl(var(--primary) / 0.12)",
          }}
        >
          <p className="font-heading font-semibold text-foreground text-lg mb-2">
            Aur koi sawaal hai? 🌿
          </p>
          <p className="text-muted-foreground font-body text-sm mb-5">
            Humari team WhatsApp pe available hai — seedha poochein!
          </p>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(37,211,102,0.35)" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              const msg = encodeURIComponent("السلام علیکم! Mujhe Eco-Xent products ke baare mein kuch poochna tha. 🌿");
              window.open(`https://wa.me/923295991062?text=${msg}`, "_blank");
            }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide text-white transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp pe Poochein
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
