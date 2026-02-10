import { motion } from "framer-motion";
import { Shield, Droplets, Fingerprint, Waves, BarChart3, Rocket } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    { name: "Sui Foundation", logo: <Droplets className="w-12 h-12 text-primary" /> },
    { name: "CertiK", logo: <Shield className="w-12 h-12 text-primary" /> },
    { name: "SlowMist", logo: <Fingerprint className="w-12 h-12 text-primary" /> },
    { name: "Mysten Labs", logo: <Waves className="w-12 h-12 text-primary" /> },
    { name: "Chainalysis", logo: <BarChart3 className="w-12 h-12 text-primary" /> },
    { name: "Movement", logo: <Rocket className="w-12 h-12 text-primary" /> },
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

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-2">
                {partner.logo}
              </div>
              <span className="text-muted-foreground font-body text-sm uppercase tracking-wider">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;