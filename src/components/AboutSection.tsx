import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "MOVE BYTECODE ANALYSIS", level: 98 },
    { name: "THREAT INTELLIGENCE", level: 95 },
    { name: "POLICY ENFORCEMENT", level: 100 },
    { name: "REAL-TIME MONITORING", level: 92 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 md:py-32 bg-brutalist-deep relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-body text-sm tracking-widest uppercase mb-4 block">
              // Defending Web3
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-6">
              INTERCEPTING
              <span className="text-stroke block">EXPLOITS</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
              <p>
                Syntrei is a decentralized pre-transaction analysis and monitoring tool
                designed to eliminate on-chain exploits. We intercept risks
                before they reach the chain, preserving low-latency performance.
              </p>
              <p>
                Leveraging Move VM introspection and collective threat intelligence,
                Syntrei establishes a new security standard for wallets, dApps,
                and institutional users in the Move ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-display text-lg text-foreground">{skill.name}</span>
                  <span className="font-body text-accent">{skill.level}%</span>
                </div>
                <div className="h-4 bg-brutalist-midnight border-2 border-foreground">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.15, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Brutalist Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 md:mt-32"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { title: "01", subtitle: "HYBRID FIREWALL", desc: "Real-time pre-transaction analysis and intercept layer." },
            { title: "02", subtitle: "MOVE SECAI", desc: "AI model specialized in Move bytecode auditing and bug detection." },
            { title: "03", subtitle: "0XSECURE", desc: "Unified dashboard for live security monitoring and management." },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="brutalist-block p-6 md:p-8 group cursor-pointer"
              whileHover={{ rotate: -1 }}
              initial={{ rotate: i % 2 === 0 ? 2 : -2 }}
            >
              <span className="text-5xl md:text-6xl font-display text-primary block mb-4">
                {card.title}
              </span>
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">
                {card.subtitle}
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                {card.desc}
              </p>
              <motion.div
                className="w-full h-1 bg-accent mt-6 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary/20 animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-20 h-20 bg-accent/10 animate-float-delayed hidden lg:block" />
    </section>
  );
};

export default AboutSection;
