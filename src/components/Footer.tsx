import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-2 font-display text-2xl text-foreground mb-4">
              <img src="/logo.jpg" alt="Syntrei Logo" className="w-6 h-6 rounded-full" />
              SYNTREI
            </Link>
            <p className="font-body text-sm text-muted-foreground/80 leading-relaxed max-w-xs">
              Unified security operation center providing elite blockchain protection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-display text-xs text-foreground/50 uppercase tracking-widest block mb-6">
              Platform
            </span>
            <div className="space-y-3">
              {[
                { name: "Services", href: "/services" },
                { name: "Our Work", href: "/work" },
                { name: "Research", href: "/research" },
                { name: "Team", href: "/team" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
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
            <span className="font-display text-xs text-foreground/50 uppercase tracking-widest block mb-6">
              Connect
            </span>
            <div className="space-y-3">
              <a
                href="https://t.me/Ox_jade"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Telegram (Ox_jade)
              </a>
              <a
                href="https://x.com/0xjade"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                X (@0xjade)
              </a>
              <a
                href="https://github.com/syntrei"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-body text-xs text-muted-foreground/60">
            © 2025 SYNTREI. All rights reserved
          </p>
          <p className="font-body text-xs text-muted-foreground/60">
            Your blockchain security provider
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
