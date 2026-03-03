import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Heart, Shield, Sparkles, Users, Award, BookOpen, Lightbulb, MessageCircle, Zap } from "lucide-react";
import FounderLayout from "@/components/founder/FounderLayout";

const services = [
  { icon: Users, title: "Parenting Coaching", desc: "One-on-one sessions to overcome parenting challenges and build a stronger relationship with your child.", backDesc: "Weekly personalized sessions with homework, exercises, and progress tracking to transform your parenting approach." },
  { icon: Heart, title: "Childhood Trauma Healing", desc: "Guided sessions to heal emotional wounds and overcome past traumas.", backDesc: "Using NLP and inner child work for emotional release — a gentle, safe process for lasting healing." },
  { icon: Shield, title: "Fear & Phobia Release", desc: "Techniques to overcome fears and phobias in yourself and your child.", backDesc: "Rapid, painless results using NLP & Silva Method — often achieving lasting freedom in a single session." },
  { icon: MessageCircle, title: "Workshops & Seminars", desc: "Group sessions on effective parenting, communication, and relationship building.", backDesc: "Interactive formats with group exercises, take-home tools, and community support for lasting change." },
];

const benefits = [
  { icon: Zap, text: "Instant healing from past parenting challenges and emotional wounds." },
  { icon: Users, text: "Improved relationship with your child and family members." },
  { icon: Brain, text: "Effective communication and conflict resolution skills." },
  { icon: Sparkles, text: "Increased self-awareness and self-love as a parent." },
  { icon: Shield, text: "Overcome fears and phobias that impact your parenting." },
];

const howIHelp = [
  "Overcome parenting challenges and build a stronger relationship with your child.",
  "Heal childhood traumas and emotional wounds.",
  "Develop effective communication skills and active listening.",
  "Cultivate self-love and self-acceptance as a parent.",
  "Create a harmonious and loving family environment.",
];

const techniques = [
  { icon: Brain, title: "NLP", subtitle: "Neuro-Linguistic Programming", desc: "Reprogram negative thought patterns and behaviors for lasting positive change.", backDesc: "Advanced protocols to transform limiting beliefs, overcome phobias, and build unshakeable confidence." },
  { icon: Lightbulb, title: "Silva Method", subtitle: "Subconscious Mind Access", desc: "Access your subconscious mind and manifest positive change through dynamic meditation.", backDesc: "Reach alpha & theta brainwave states for peak performance, intuitive decision-making, and creative problem-solving." },
  { icon: BookOpen, title: "Metaphysics", subtitle: "Spiritual Parenting", desc: "Understand the spiritual aspects of parenting and relationships for deeper harmony.", backDesc: "Explore the deeper dimensions of consciousness, energy healing, and the laws governing human potential." },
];

/* ---- Flip Card ---- */
const FlipCard = ({ icon: Icon, title, desc, backDesc, index, isInView }: {
  icon: React.ElementType; title: string; desc: string; backDesc: string; index: number; isInView: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-[260px] cursor-pointer group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl p-7 border border-border bg-background overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          <div className="absolute -top-12 -right-12 w-24 h-24 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/30 to-transparent transition-all duration-500" />
          <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gold/15 group-hover:border-gold/30 group-hover:scale-110 transition-all duration-300 mb-5" style={{ background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--cream)))" }}>
            <Icon className="w-5 h-5 text-gold-dark" />
          </div>
          <h3 className="font-heading font-bold text-foreground text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">{desc}</p>
          <div className="absolute bottom-4 right-4 text-[9px] text-gold/40 font-body tracking-wider uppercase">Hover to flip</div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-7 border border-gold/25 overflow-hidden flex flex-col justify-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(145deg, hsl(var(--forest)), hsl(var(--forest-dark)))" }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10">
            <Icon className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-heading font-bold text-white mb-3 text-base">{title}</h3>
            <p className="text-sm text-white/70 font-body leading-relaxed">{backDesc}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---- Technique Flip Card ---- */
const TechniqueFlipCard = ({ icon: Icon, title, subtitle, desc, backDesc, index, isInView }: {
  icon: React.ElementType; title: string; subtitle: string; desc: string; backDesc: string; index: number; isInView: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-[280px] cursor-pointer group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl p-8 border border-white/10 overflow-hidden" style={{ backfaceVisibility: "hidden", background: "hsla(0, 0%, 100%, 0.04)", backdropFilter: "blur(8px)" }}>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 30px -8px hsla(var(--gold), 0.15)" }} />
          <Icon className="w-10 h-10 text-gold/70 mb-5 group-hover:text-gold transition-colors duration-300" />
          <h3 className="font-heading font-bold text-white text-lg mb-1">{title}</h3>
          <p className="text-gold/60 text-xs font-body tracking-wider uppercase mb-4">{subtitle}</p>
          <p className="text-white/60 font-body text-sm leading-relaxed">{desc}</p>
          <div className="absolute bottom-4 right-4 text-[9px] text-gold/30 font-body tracking-wider uppercase">Hover to flip</div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-8 border border-gold/30 overflow-hidden flex flex-col justify-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(145deg, hsl(var(--gold-dark)), hsl(var(--gold)))" }}>
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 0%) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative z-10">
            <Icon className="w-8 h-8 text-forest-dark mb-4" />
            <h3 className="font-heading font-bold text-forest-dark mb-1 text-lg">{title}</h3>
            <p className="text-forest-dark/60 text-xs font-body tracking-wider uppercase mb-3">{subtitle}</p>
            <p className="text-sm text-forest-dark/80 font-body leading-relaxed">{backDesc}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FounderAbout = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const techniquesRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-50px" });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-50px" });
  const isTechniquesInView = useInView(techniquesRef, { once: true, margin: "-50px" });

  return (
    <FounderLayout activeTab="about">
      {/* Hero About */}
      <section ref={aboutRef} className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] opacity-[0.04]" style={{ background: "radial-gradient(ellipse, hsl(var(--gold)), transparent 70%)", filter: "blur(60px)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <p className="text-gold tracking-[0.5em] uppercase text-[10px] font-body font-semibold mb-4">About Me</p>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Mind Science <span className="italic" style={{ color: "hsl(var(--gold-dark))" }}>Expert</span>
              </h1>
              <div className="w-16 h-[2px] mx-auto mb-8" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-2xl p-8 md:p-12 border border-border bg-background relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />
              <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg">
                As a <strong className="text-foreground font-semibold">certified NLP practitioner</strong>, <strong className="text-foreground font-semibold">Silva Method coach</strong>, and <strong className="text-foreground font-semibold">metaphysics specialist</strong>, I help parents overcome relationship challenges, heal childhood traumas, and overcome fears and phobias. My expertise empowers parents to experience instant healing and results, creating a more harmonious and loving family environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parenting Services — Flip Cards */}
      <section ref={servicesRef} className="py-20 md:py-28 bg-background relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.5em] uppercase text-[10px] font-body font-semibold mb-3">What I Offer</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Parenting <span className="italic" style={{ color: "hsl(var(--gold-dark))" }}>Services</span>
            </h2>
            <div className="w-10 h-[2px] mx-auto mt-5" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} />
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <FlipCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} backDesc={s.backDesc} index={i} isInView={isServicesInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-20 md:py-28 bg-cream relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.5em] uppercase text-[10px] font-body font-semibold mb-3">Why Work With Me</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Benefits of <span className="italic" style={{ color: "hsl(var(--gold-dark))" }}>Working Together</span>
            </h2>
            <div className="w-10 h-[2px] mx-auto mt-5" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} />
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isBenefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 8, boxShadow: "0 8px 30px -10px hsla(var(--gold), 0.15)" }}
                className="flex items-start gap-5 rounded-2xl p-6 border border-border hover:border-gold/20 transition-all duration-300 bg-background group"
              >
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center border border-gold/15 group-hover:border-gold/30 group-hover:scale-110 transition-all duration-300" style={{ background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--cream)))" }}>
                  <b.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <p className="text-foreground font-body text-sm md:text-base pt-2.5">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.5em] uppercase text-[10px] font-body font-semibold mb-3">My Approach</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              How I Can <span className="italic" style={{ color: "hsl(var(--gold-dark))" }}>Help You</span>
            </h2>
            <div className="w-10 h-[2px] mx-auto mt-5" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} />
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-3">
            {howIHelp.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-4 rounded-xl p-5 border border-border bg-cream hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-heading font-bold text-gold-dark border border-gold/15" style={{ background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--cream)))" }}>
                  {i + 1}
                </div>
                <p className="text-foreground font-body text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mind Science Techniques — Flip Cards */}
      <section ref={techniquesRef} className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(170deg, hsl(var(--forest-deep)), hsl(90 30% 12%))" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isTechniquesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.5em] uppercase text-[10px] font-body font-semibold mb-3">My Toolkit</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Mind Science <span className="italic text-gold">Techniques</span>
            </h2>
            <div className="w-10 h-[2px] mx-auto mt-5" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} />
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5">
            {techniques.map((t, i) => (
              <TechniqueFlipCard key={t.title} icon={t.icon} title={t.title} subtitle={t.subtitle} desc={t.desc} backDesc={t.backDesc} index={i} isInView={isTechniquesInView} />
            ))}
          </div>
        </div>
      </section>
    </FounderLayout>
  );
};

export default FounderAbout;
