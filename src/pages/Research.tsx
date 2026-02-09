import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <>
      <Helmet>
        <title>Research - Syntrei | Security Research & Analysis</title>
        <meta name="description" content="Cutting-edge security research on Move VM, blockchain security, and emerging threats. Stay ahead with our latest findings and analysis." />
      </Helmet>

      <MouseFollower />
      <Navigation />

      <main>
        <section className="min-h-screen py-20 md:py-32 bg-brutalist-midnight relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-center mb-12 md:mb-16"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-accent font-body text-sm tracking-widest uppercase mb-4 block">
                  // Research
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display">
                  <motion.span
                    className="block"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.08,
                          delayChildren: 0.3
                        }
                      }
                    }}
                  >
                    {"SECURITY".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { y: 30, opacity: 0, rotateX: -90 },
                          visible: { y: 0, opacity: 1, rotateX: 0 }
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 100
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>
                  <motion.span
                    className="text-stroke block"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.08,
                          delayChildren: 0.8
                        }
                      }
                    }}
                  >
                    {"RESEARCH".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { y: 30, opacity: 0, rotateX: -90 },
                          visible: { y: 0, opacity: 1, rotateX: 0 }
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 100
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>
                </h1>
                <p className="text-muted-foreground font-body text-lg mt-4 max-w-3xl mx-auto">
                  Cutting-edge research on Move VM security, blockchain vulnerabilities, and emerging threats. Our team of experts continuously analyzes and publishes findings to advance the security landscape.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Move VM Security Analysis",
                    description: "Deep dive into Move VM architecture, common vulnerabilities, and best practices for secure smart contract development.",
                    date: "December 2025",
                    category: "Technical Analysis",
                  },
                  {
                    title: "AI-Powered Vulnerability Detection",
                    description: "Exploring the use of machine learning and AI techniques for automated vulnerability detection in blockchain applications.",
                    date: "November 2025",
                    category: "Innovation",
                  },
                  {
                    title: "Transactional Firewall Effectiveness",
                    description: "Case studies and analysis of transactional firewall implementations in real-world Move VM deployments.",
                    date: "October 2025",
                    category: "Case Study",
                  },
                  {
                    title: "Auditor Tooling Advancements",
                    description: "Latest developments in security auditing tools and methodologies for blockchain and DeFi projects.",
                    date: "September 2025",
                    category: "Tooling",
                  },
                ].map((research, index) => (
                  <motion.div
                    key={research.title}
                    className="brutalist-card p-6 group relative overflow-hidden"
                    initial={{ 
                      opacity: 0,
                      x: index % 2 === 0 ? -50 : 50,
                      rotateZ: index % 2 === 0 ? -5 : 5,
                      scale: 0.9
                    }}
                    animate={{ 
                      opacity: 1,
                      x: 0,
                      rotateZ: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      rotateZ: index % 2 === 0 ? 2 : -2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100"
                      animate={{ 
                        x: ['-100%', '100%'],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <motion.div 
                      className="flex justify-between items-start mb-4 relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                      <span className="text-accent font-body text-xs uppercase tracking-wider">
                        {research.category}
                      </span>
                      <span className="text-muted-foreground font-body text-sm">
                        {research.date}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-display uppercase tracking-wider mb-3 text-primary relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      {research.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground font-body relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    >
                      {research.description}
                    </motion.p>
                    
                    <motion.button
                      className="mt-4 text-primary font-display text-sm uppercase tracking-wider hover:text-accent transition-colors relative z-10"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      Read More →
                    </motion.button>

                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Research;