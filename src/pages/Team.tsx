import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import { User, ShieldCheck, Microscope, Database, Lock, Scale } from "lucide-react";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Team - Syntrei | Security Experts</title>
        <meta name="description" content="Meet our team of security experts specializing in Move VM, blockchain security, and AI-powered security solutions." />
      </Helmet>

      <MouseFollower />
      <Navigation />

      <main>
        <section className="min-h-screen py-20 md:py-32 bg-brutalist-midnight relative overflow-hidden">
          <FloatingParticles count={12} colors={["#00ff88", "#ff6b6b", "#4ecdc4", "#f9ca24"]} />

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
                  // Our Team
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
                    {"EXPERTS".split("").map((letter, index) => (
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
                  Our diverse team of security researchers, auditors, and engineers brings decades of combined experience in blockchain security, cryptography, and software engineering.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Alex Chen",
                    role: "Chief Security Officer",
                    expertise: "Move VM Security, Smart Contracts",
                    image: <ShieldCheck className="w-16 h-16 text-primary" />,
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Lead Researcher",
                    expertise: "Cryptography, AI Security",
                    image: <Microscope className="w-16 h-16 text-primary" />,
                  },
                  {
                    name: "Marcus Rodriguez",
                    role: "Senior Auditor",
                    expertise: "Blockchain Auditing, DeFi",
                    image: <User className="w-16 h-16 text-primary" />,
                  },
                  {
                    name: "Dr. Emily Zhang",
                    role: "AI Security Specialist",
                    expertise: "Machine Learning, Vulnerability Detection",
                    image: <Database className="w-16 h-16 text-primary" />,
                  },
                  {
                    name: "David Kim",
                    role: "Platform Engineer",
                    expertise: "Infrastructure Security, DevOps",
                    image: <Lock className="w-16 h-16 text-primary" />,
                  },
                  {
                    name: "Lisa Park",
                    role: "Compliance Officer",
                    expertise: "Regulatory Compliance, Risk Assessment",
                    image: <Scale className="w-16 h-16 text-primary" />,
                  },
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="brutalist-card p-6 text-center group relative overflow-hidden"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotateY: -90,
                      y: 30
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      y: 0
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 80
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    />

                    <motion.div
                      className="mb-4 relative z-10 flex justify-center"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      {member.image}
                    </motion.div>

                    <motion.h3
                      className="text-xl font-display uppercase tracking-wider mb-2 text-primary relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      {member.name}
                    </motion.h3>

                    <motion.p
                      className="text-accent font-body text-sm uppercase tracking-wider mb-3 relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    >
                      {member.role}
                    </motion.p>

                    <motion.p
                      className="text-muted-foreground font-body text-sm relative z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      {member.expertise}
                    </motion.p>

                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50"
                      initial={{ pathLength: 0 }}
                      whileHover={{ pathLength: 1 }}
                      transition={{ duration: 0.4 }}
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

export default Team;