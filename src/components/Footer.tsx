import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t-4 border-border py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="font-display text-2xl text-foreground">
              SYNTREI<span className="text-primary">.</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Advanced pre-transaction security layer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-display text-sm text-foreground uppercase tracking-wider block mb-4">
              Navigation
            </span>
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Work", href: "/work" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-display text-sm text-foreground uppercase tracking-wider block mb-4">
              Social
            </span>
            <div className="space-y-2">
              {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-body text-xs text-muted-foreground">
            © 2025 SYNTREI. All rights reserved
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Securing the Move ecosystem
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
