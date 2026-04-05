import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import GeometricShapes from "@/components/GeometricShapes";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "HOPLAUNCH AUDIT",
      category: "Smart Contract Audit",
      year: "2025",
      description: "Comprehensive security audit of the Hoplaunch protocol, covering smart contract logic, access control, and launch mechanism vulnerabilities.",
      link: "https://github.com/syntrei/Audit-reports-/blob/main/reports/2025/Hoplaunch/Hoplaunch_Security_Audit_Report.pdf",
    },
    {
      id: 2,
      title: "HOPE PROTOCOL AUDIT",
      category: "Smart Contract Audit",
      year: "2026",
      description: "Full security review of Hope Protocol's on-chain contracts, identifying critical risk vectors and providing actionable remediation steps.",
      link: "https://github.com/syntrei/Audit-reports-/blob/main/reports/2026/Hope-Protocol/Hope_Protocol_Security_Audit_Report.pdf",
    },
    {
      id: 3,
      title: "LINQ AUDIT",
      category: "Smart Contract Audit",
      year: "2026",
      description: "In-depth audit of LINQ's smart contract suite, assessing protocol safety, economic attack surfaces, and upgrade security.",
      link: "https://github.com/syntrei/Audit-reports-/blob/main/reports/2026/LINQ/LINQ_Security_Audit_Report.pdf",
    },
    {
      id: 4,
      title: "SENTRA AUDIT",
      category: "Smart Contract Audit",
      year: "2026",
      description: "Security assessment of Sentra's contracts, focusing on reentrancy, privilege escalation, and state management weaknesses.",
      link: "https://github.com/syntrei/Audit-reports-/blob/main/reports/2026/Sentra/Sentra_Security_Audit_Report.pdf",
    },
    {
      id: 5,
      title: "TD2 STAKING AUDIT",
      category: "Smart Contract Audit",
      year: "2026",
      description: "Thorough audit of TD2's staking contract, examining reward calculation logic, withdrawal safety, and potential economic exploits.",
      link: "https://github.com/syntrei/Audit-reports-/blob/main/reports/2026/TD2/TD2_Staking_Security_Audit_Report.pdf",
    },
    {
      id: 6,
      title: "VESTING MODULE AUDIT",
      category: "Smart Contract Audit",
      year: "2026",
      description: "Audit of a token vesting module covering cliff logic, beneficiary access control, and emergency withdrawal edge cases.",
      link: "https://github.com/syntrei/Audit-reports-/blob/main/reports/2026/Vesting-Module/Vesting_Module_Security_Audit_Report.pdf",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Security Interceptions | SYNTREI - Case Studies</title>
        <meta name="description" content="Review our track record of intercepting on-chain threats, phishing attempts, and contract exploits in real-time." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SYNTREI" />
        <meta property="og:title" content="Security Interceptions | SYNTREI - Case Studies" />
        <meta property="og:description" content="Review our track record of intercepting on-chain threats, phishing attempts, and contract exploits in real-time." />
        <meta property="og:image" content="https://syntrei.io/logo.jpg" />
        <meta property="og:url" content="https://syntrei.io/work" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@0xjade" />
        <meta name="twitter:title" content="Security Interceptions | SYNTREI - Case Studies" />
        <meta name="twitter:description" content="Review our track record of intercepting on-chain threats, phishing attempts, and contract exploits in real-time." />
        <meta name="twitter:image" content="https://syntrei.io/logo.jpg" />
      </Helmet>

      <MouseFollower />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center bg-brutalist-deep relative overflow-hidden">
          <GeometricShapes variant="dense" />

          <div className="container mx-auto px-4 md:px-8 py-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-accent font-body text-sm tracking-widest uppercase mb-4 block">
                // Security Track Record
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-none">
                OUR
                <span className="block text-foreground/50">DEFENSE</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-32 bg-brutalist-midnight relative overflow-hidden">
          <GeometricShapes variant="sparse" />

          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="brutalist-block p-6 md:p-8 group cursor-pointer relative overflow-hidden"
                  initial={{ y: 50, opacity: 0, rotate: index % 2 === 0 ? 1 : -1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  onClick={() => project.link && window.open(project.link, "_blank", "noopener,noreferrer")}
                >
                  {/* Project Number */}
                  <motion.span
                    className="absolute top-4 right-4 text-6xl md:text-8xl font-display text-primary/10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {String(project.id).padStart(2, '0')}
                  </motion.span>

                  {/* Category & Year */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-accent font-body text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="w-8 h-px bg-border" />
                    <span className="text-muted-foreground font-body text-xs">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* View Project Link */}
                  <motion.div
                    className="flex items-center gap-2 text-accent font-display text-sm uppercase tracking-wider"
                    whileHover={{ x: 10 }}
                  >
                    <span>{project.link ? "View Audit Report" : "View Project"}</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>

                  {/* Hover Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-brutalist-deep relative overflow-hidden">
          <GeometricShapes />

          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
                WANT TO DEPLOY SYNTREI?
              </h2>
              <p className="font-body text-muted-foreground text-lg mb-8">
                Protect your users and assets with the most advanced pre-transaction security layer.
              </p>
              <motion.a
                href="/contact"
                className="brutalist-block inline-block px-12 py-4 font-display text-lg uppercase tracking-wider text-foreground bg-primary hover:bg-accent hover:text-background transition-colors"
                whileHover={{ scale: 1.02, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Work;
