import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import FloatingBlocks from "./FloatingBlocks";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [displayText, setDisplayText] = useState("");
  const fullText = "Hybrid Firewall. Move SecAI. 0xSecure Dashboard.";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <FloatingBlocks />

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8"
        style={{ y, opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="text-accent/80 font-body text-sm tracking-[0.2em] uppercase">
              Move Ecosystem Protection
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display tracking-tight leading-none mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-foreground mb-2">UNIFIED</span>
            <span className="block text-foreground/80 mb-2">SECURITY</span>
            <span className="block text-primary">OPERATION</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Advanced pre-transaction analysis and real-time threat monitoring.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="px-8 py-4 text-foreground font-display text-lg uppercase tracking-wider border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Platform
            </motion.button>

            <motion.a
              href="#contact"
              className="px-8 py-4 text-primary font-display text-lg uppercase tracking-wider hover:text-accent transition-colors flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Get In Touch <span className="text-xl">→</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-foreground/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
