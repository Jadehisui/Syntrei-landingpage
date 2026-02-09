import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import GeometricShapes from "@/components/GeometricShapes";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "DESIGN", level: 95 },
    { name: "DEVELOPMENT", level: 90 },
    { name: "CREATIVITY", level: 100 },
    { name: "BRUTALISM", level: 88 },
  ];

  return (
    <>
      <Helmet>
        <title>About | BRUTAL. - Breaking Conventions</title>
        <meta name="description" content="Discover the philosophy behind brutalist design. We reject the polished and embrace raw, authentic digital experiences." />
      </Helmet>

      <MouseFollower />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center bg-brutalist-deep relative overflow-hidden">
          <GeometricShapes variant="dense" />
          
          <div className="container mx-auto px-4 md:px-8 py-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-accent font-body text-sm tracking-widest uppercase mb-4 block">
                // About Me
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-none">
                BREAKING
                <span className="text-stroke block">CONVENTIONS</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-32 bg-brutalist-midnight relative overflow-hidden">
          <GeometricShapes variant="sparse" />
          
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              ref={ref}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6 text-foreground">
                  THE PHILOSOPHY
                </h2>
                <div className="space-y-4 text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                  <p>
                    I reject the polished, the refined, the expected. My work embraces 
                    the raw power of unfiltered design - where structure meets chaos 
                    and function collides with form.
                  </p>
                  <p>
                    Every project is an experiment in pushing boundaries. I build 
                    digital experiences that demand attention, challenge perceptions, 
                    and leave lasting impressions.
                  </p>
                  <p>
                    Brutalism in design isn't about being ugly or harsh - it's about 
                    honesty. It's about showing the bones of a structure, the raw 
                    materials, the truth of what something is.
                  </p>
                </div>
              </motion.div>

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
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-brutalist-deep relative overflow-hidden">
          <GeometricShapes />
          
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground">
                CORE VALUES
              </h2>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { title: "01", subtitle: "FEARLESS", desc: "Bold choices, no compromises. Every decision is intentional and unapologetic." },
                { title: "02", subtitle: "AUTHENTIC", desc: "Raw, honest, unfiltered. We show the truth of design without pretense." },
                { title: "03", subtitle: "IMPACTFUL", desc: "Designs that resonate. We create experiences that leave lasting impressions." },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="brutalist-block p-6 md:p-8 group cursor-pointer"
                  whileHover={{ rotate: -1, scale: 1.02 }}
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
