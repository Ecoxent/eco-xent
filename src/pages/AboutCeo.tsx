import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, Heart, Shield, Sparkles, Users, Award, Quote, Star, MessageCircle, ChevronRight } from "lucide-react";
import { lazy, Suspense } from "react";
import logoImg from "@/assets/ecoxent-logo-new.jpeg";

const FounderChatbot = lazy(() => import("@/components/FounderChatbot"));

const specialties = [
  { icon: Brain, title: "Certified NLP Practitioner", desc: "Rewire thought patterns for lasting positive change through proven neuro-linguistic programming techniques." },
  { icon: Sparkles, title: "Silva Method Coach", desc: "Unlock your mind's hidden potential through dynamic meditation and visualization mastery." },
  { icon: Shield, title: "Metaphysics Specialist", desc: "Bridge the gap between science and spirituality for profound self-understanding." },
  { icon: Heart, title: "Trauma Healing Expert", desc: "Heal childhood wounds and overcome deep-rooted fears with compassionate therapeutic guidance." },
  { icon: Users, title: "Family Harmony Coach", desc: "Transform parent-child dynamics and restore harmony using proven relationship techniques." },
  { icon: Award, title: "Instant Results Method", desc: "Experience breakthrough healing and tangible transformation from the very first session." },
];

const testimonials = [
  { name: "Ayesha R.", text: "Just one session changed my perspective completely. My relationship with my children has transformed.", rating: 5 },
  { name: "Fatima K.", text: "The Silva Method coaching helped me overcome anxiety I carried for 15 years. Truly life-changing.", rating: 5 },
  { name: "Hira M.", text: "I was skeptical at first, but the NLP techniques worked instantly. My family life is peaceful now.", rating: 5 },
];

const stats = [
  { value: "500+", label: "Lives Transformed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "1st", label: "Session Results" },
];

const AboutCeo = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const specialtiesRef = useRef(null);
  const missionRef = useRef(null);
  const testimonialsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const isSpecialtiesInView = useInView(specialtiesRef, { once: true, margin: "-50px" });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-50px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-border/50" style={{ background: "hsla(90, 35%, 18%, 0.98)", backdropFilter: "blur(16px)" }}>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-[68px]">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-body text-sm"
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </motion.button>
          <motion.a href="/" whileHover={{ scale: 1.02 }}>
            <img src={logoImg} alt="Eco-Xent" className="object-contain rounded-sm" style={{ height: "44px" }} />
          </motion.a>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section — Cinematic */}
      <section ref={heroRef} className="pt-28 pb-0 relative overflow-hidden">
        {/* Dark forest green hero bg */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, hsl(var(--forest-deep)) 0%, hsl(var(--forest-dark)) 60%, hsl(var(--forest)) 100%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto mb-8 overflow-hidden flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
              <div className="absolute -inset-1 rounded-full border border-gold/10" />
              <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.15), hsl(var(--forest-light) / 0.1))" }}>
                <span className="text-4xl md:text-5xl font-heading font-bold text-gold">F</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-gold tracking-[0.5em] uppercase text-[10px] md:text-[11px] font-body font-semibold mb-5">Founder & Healing Coach</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6 leading-tight">
                Healing Minds,<br />
                <span className="italic" style={{ color: "hsl(var(--gold))" }}>Transforming Lives</span>
              </h1>
              <div className="w-12 h-[2px] mx-auto mb-8" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-white/70 font-body leading-relaxed font-light max-w-2xl mx-auto mb-10"
            >
              As a certified <strong className="text-white/90 font-medium">NLP practitioner</strong>, <strong className="text-white/90 font-medium">Silva Method coach</strong>, and <strong className="text-white/90 font-medium">metaphysics specialist</strong>, I help parents overcome relationship challenges, heal childhood traumas, and conquer fears — delivering results from the very first session.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="text-center py-4 px-3 rounded-xl border border-white/10"
                  style={{ background: "hsla(0, 0%, 100%, 0.04)" }}
                >
                  <p className="text-2xl md:text-3xl font-heading font-bold text-gold mb-1">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-white/50 font-body tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section ref={missionRef} className="py-20 md:py-28 bg-cream relative">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/50 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-8 md:p-12 border border-border bg-background relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />
              <Quote className="w-8 h-8 text-gold/20 mb-4" />
              <p className="text-gold tracking-[0.3em] uppercase text-[10px] font-body font-semibold mb-4">My Mission</p>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6 leading-snug">
                Empowering Parents for <span className="italic" style={{ color: "hsl(var(--gold-dark))" }}>Instant Healing</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg font-light mb-5">
                My expertise empowers parents to experience instant healing and results, creating a more <strong className="text-foreground/90 font-medium">harmonious and loving family environment</strong>.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg font-light">
                I believe that when parents heal, the entire family transforms. Through proven NLP techniques, the Silva Method, and metaphysical wisdom, I guide families toward lasting peace, deeper connections, and emotional freedom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section ref={specialtiesRef} className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isSpecialtiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.5em] uppercase text-[10px] font-body font-semibold mb-3">Areas of Expertise</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-3">
              What I <span className="italic" style={{ color: "hsl(var(--gold-dark))" }}>Specialize In</span>
            </h2>
            <div className="w-10 h-[2px] mx-auto mt-4" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {specialties.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isSpecialtiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: "0 12px 40px -12px hsla(var(--gold), 0.12)" }}
                className="rounded-xl p-7 border border-border hover:border-gold/25 transition-all duration-300 group bg-background"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 border border-gold/15 group-hover:border-gold/30" style={{ background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--cream)))" }}>
                  <s.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2.5 text-sm text-center">{s.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed text-center">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(170deg, hsl(var(--forest-deep)), hsl(var(--forest-dark)))" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.5em] uppercase text-[10px] font-body font-semibold mb-3">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white">
              Real <span className="italic text-gold">Transformations</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 25 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl p-7 border border-white/10 relative"
                style={{ background: "hsla(0, 0%, 100%, 0.04)" }}
              >
                <Quote className="w-6 h-6 text-gold/20 mb-4" />
                <p className="text-white/75 font-body text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-heading font-semibold text-sm">{t.name}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <MessageCircle className="w-4 h-4 text-gold/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <p className="text-gold tracking-[0.5em] uppercase text-[10px] font-body font-semibold mb-4">Start Today</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4 leading-snug">
              Ready to Begin Your <span className="italic" style={{ color: "hsl(var(--gold-dark))" }}>Healing Journey?</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10 text-sm md:text-base">Take the first step toward a transformed, harmonious family life. Book a free consultation today.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="https://wa.me/923295991062?text=I%20want%20to%20know%20more%20about%20coaching%20sessions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 text-white"
                style={{ background: "linear-gradient(135deg, hsl(var(--forest)), hsl(var(--forest-dark)))" }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 30px -8px hsla(var(--forest), 0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                Book Free Consultation
                <ChevronRight className="w-4 h-4" />
              </motion.a>
              <motion.button
                onClick={() => navigate("/")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide border border-border hover:border-gold/30 transition-all duration-300 text-foreground"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground font-body">© {new Date().getFullYear()} Eco-Xent. All rights reserved.</p>
        </div>
      </footer>

      <Suspense fallback={null}>
        <FounderChatbot />
      </Suspense>
    </div>
  );
};

export default AboutCeo;
