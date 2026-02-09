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
      title: "SYntrei",
      category: "Syntrei",
      description: "Unified Security & Operations Platform.",
    },
    {
      id: 2,
      title: "RAW IDENTITY",
      category: "Branding",
      year: "2024",
      description: "Corporate identity stripped to its bare essentials.",
    },
    {
      id: 3,
      title: "CONCRETE DREAMS",
      category: "UI/UX",
      year: "2023",
      description: "Mobile app design inspired by architectural brutalism.",
    },
    {
      id: 4,
      title: "NOISE MACHINE",
      category: "Creative Dev",
      year: "2023",
      description: "Interactive installation exploring digital texture and sound.",
    },
    {
      id: 5,
      title: "GRID BREAKER",
      category: "Web Design",
      year: "2023",
      description: "Portfolio site that defies traditional layout conventions.",
    },
    {
      id: 6,
      title: "STARK VISION",
      category: "Branding",
      year: "2022",
      description: "Visual identity for an architecture firm.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Work | BRUTAL. - Portfolio</title>
        <meta name="description" content="Explore our portfolio of brutalist design projects. From web design to branding, we create raw, impactful digital experiences." />
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
                // Portfolio
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-none">
                OUR
                <span className="text-stroke block">WORK</span>
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
                    <span>View Project</span>
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
                HAVE A PROJECT IN MIND?
              </h2>
              <p className="font-body text-muted-foreground text-lg mb-8">
                Let's create something bold and unforgettable together.
              </p>
              <motion.a
                href="/contact"
                className="brutalist-block inline-block px-12 py-4 font-display text-lg uppercase tracking-wider text-foreground bg-primary hover:bg-accent hover:text-background transition-colors"
                whileHover={{ scale: 1.02, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
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
