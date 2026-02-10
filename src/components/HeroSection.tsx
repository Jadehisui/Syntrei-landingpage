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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-brutal">
      <FloatingBlocks />

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8"
        style={{ y, opacity }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="text-accent font-body text-sm md:text-base tracking-widest uppercase">
              {displayText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              )}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display leading-none mb-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="block text-foreground"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {"PRE-TRANSACTION".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="block text-stroke glow-text"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              {"ANALYSIS & MONITORING".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="block text-primary"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.1
                  }
                }
              }}
            >
              {"SECURITY LAYER".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 md:mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="brutalist-block px-8 py-4 text-foreground font-display text-lg uppercase tracking-wider"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore More
            </motion.button>

            <motion.a
              href="#contact"
              className="border-4 border-primary bg-transparent px-8 py-4 text-primary font-display text-lg uppercase tracking-wider text-center hover:bg-primary hover:text-background transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-12 border-4 border-foreground flex justify-center pt-2">
          <motion.div
            className="w-2 h-2 bg-accent"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
