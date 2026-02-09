import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Syntrei | Security Operation Platform</title>
        <meta name="description" content="Comprehensive security services including transactional firewall for Move VM, auditing tools, and AI-powered security solutions." />
      </Helmet>

      <MouseFollower />
      <Navigation />

      <main>
        <section className="min-h-screen py-20 md:py-32 bg-brutalist-midnight relative overflow-hidden">
          <FloatingParticles count={15} />
          
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
                  // Our Services
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
                    {"SERVICES".split("").map((letter, index) => (
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
                  Comprehensive security solutions for Move VM ecosystems, including transactional firewalls, advanced auditing tools, and AI-powered security analysis.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Transactional Firewall",
                    description: "Advanced firewall services specifically designed for Move VM transactions, protecting against malicious activities and ensuring secure operations.",
                    icon: "🔥",
                  },
                  {
                    title: "Security Auditing",
                    description: "Comprehensive auditing services for smart contracts and Move VM applications, identifying vulnerabilities and ensuring compliance.",
                    icon: "🔍",
                  },
                  {
                    title: "Move Sec AI",
                    description: "AI-powered security tooling for auditors, providing intelligent analysis and automated vulnerability detection for Move-based projects.",
                    icon: "🤖",
                  },
                  {
                    title: "Consulting",
                    description: "Expert security consulting for blockchain projects, helping teams implement best practices and secure their applications.",
                    icon: "💡",
                  },
                  {
                    title: "Penetration Testing",
                    description: "Thorough penetration testing services to simulate real-world attacks and identify potential security weaknesses.",
                    icon: "🛡️",
                  },
                  {
                    title: "Compliance Support",
                    description: "Assistance with regulatory compliance requirements, ensuring your project meets industry standards and legal obligations.",
                    icon: "📋",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="brutalist-card p-6 group relative overflow-hidden"
                    initial={{ 
                      opacity: 0,
                      y: 50,
                      rotateX: -15,
                      scale: 0.9
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -10,
                      rotateX: 5,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Icon with bounce animation */}
                    <motion.div 
                      className="text-4xl mb-4 relative z-10"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-display uppercase tracking-wider mb-3 text-primary relative z-10"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground font-body relative z-10"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300"
                      initial={{ pathLength: 0 }}
                      whileHover={{ pathLength: 1 }}
                      transition={{ duration: 0.8 }}
                      style={{
                        background: 'linear-gradient(45deg, transparent, transparent)',
                      }}
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

export default Services;