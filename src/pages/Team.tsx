import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import { ShieldCheck, Brain, Target, Zap } from "lucide-react";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Mission & Expertise - Syntrei | Security Operation Center</title>
        <meta name="description" content="Syntrei's mission and collective expertise in blockchain security and Move VM protection." />
      </Helmet>

      <MouseFollower />
      <Navigation />

      <main>
        <section className="min-h-screen py-20 md:py-32 bg-brutalist-midnight relative overflow-hidden">
          <FloatingParticles count={15} colors={["#00ff88", "#ff6b6b", "#4ecdc4", "#f9ca24"]} />

          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Hero Header */}
              <motion.div
                className="text-center mb-24 md:mb-32"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-accent font-body text-sm tracking-widest uppercase mb-6 block">
                  // Collective Intelligence
                </span>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-display leading-[0.9] mb-8">
                  <span className="block italic text-foreground/40">UNIFIED</span>
                  <span className="block">DEFENSE</span>
                </h1>
                <p className="text-muted-foreground font-body text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Syntrei operates as a specialized security operation center, leveraging a collective of
                  top-tier researchers and auditors to provide essential protection for the blockchain ecosystem.
                </p>
              </motion.div>

              {/* Founder Spotlight */}
              <motion.div
                className="brutalist-block p-8 md:p-12 mb-32 grid md:grid-cols-3 gap-8 items-center bg-accent/5 backdrop-blur-sm border-accent/20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-none border-4 border-primary p-4 flex items-center justify-center bg-background">
                    <ShieldCheck className="w-full h-full text-primary" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <a
                    href="https://x.com/0xjade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-primary group-hover:text-accent transition-colors">
                      Jade Agabi — Founder
                    </h2>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed italic mb-4">
                      "Web3 security isn't just about code—it's about building a standard of trust that protects
                      every transaction across every chain. Our mission is to make security the foundation,
                      not an afterthought."
                    </p>
                    <p className="text-accent font-body text-sm uppercase tracking-widest hover:text-primary transition-colors">
                      5+ Years Professional Security Experience // Multi-Chain Auditor // @0xjade
                    </p>
                  </a>
                </div>
              </motion.div>

              {/* Collective Expertise Grid */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {[
                  {
                    icon: <Brain className="w-12 h-12 text-primary" />,
                    title: "Move VM Specialization",
                    desc: "Deep bytecode introspection and audit capabilities for the Move ecosystem including Sui and Movement."
                  },
                  {
                    icon: <Target className="w-12 h-12 text-primary" />,
                    title: "Threat Intelligence",
                    desc: "Real-time identification of emerging exploit patterns and proactive risk mitigation for dApps and wallets."
                  },
                  {
                    icon: <Zap className="w-12 h-12 text-primary" />,
                    title: "Rapid Audit Response",
                    desc: "Efficient security reviews that don't compromise on-chain performance or speed to market."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-4 w-fit bg-white/5 border border-white/10 mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-display uppercase tracking-wider text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Narrative Block */}
              <motion.div
                className="mt-32 text-center border-t border-white/10 pt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="max-w-2xl mx-auto space-y-8">
                  <h4 className="text-sm font-body text-accent uppercase tracking-[0.3em]">
                    Beyond the individual
                  </h4>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">
                    We've moved beyond the traditional 'team list' to focus on high-impact results.
                    Our decentralized network of consultants and security engineers is ready to
                    defend your products with surgical precision.
                  </p>
                  <motion.a
                    href="/contact"
                    className="inline-block px-10 py-5 bg-primary text-background font-display uppercase tracking-widest text-sm hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Partner With Our Experts
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;