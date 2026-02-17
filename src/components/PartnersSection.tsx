import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Sui Foundation", logo: "/logos/sui.png" },
    { name: "Mysten Labs", logo: "/logos/mysten.png" },
    { name: "Hop Exchange", logo: "/logos/hop.svg" },
    { name: "Movement Labs", logo: "/logos/movements.png" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-body text-sm tracking-widest uppercase mb-4 block">
            // Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-wider">
            Companies We've Worked With
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-32">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.7 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;