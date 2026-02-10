import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import MatrixText from "./MatrixText";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/services" },
    { name: "Security", href: "/work" },
    { name: "Technology", href: "/research" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-background/60 backdrop-blur-md border-b-4 border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center h-16 md:h-20">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="font-display text-2xl md:text-3xl text-foreground">
              SYNTREI<span className="text-primary">.</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-12">
              {links.map((link) => (
                <motion.div key={link.name} whileHover={{ y: -2 }}>
                  <Link
                    to={link.href}
                    className={`font-display text-base uppercase tracking-wider transition-colors relative group ${isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                  >
                    <MatrixText text={link.name} />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Request Quote Button */}
          <div className="hidden md:flex">
            <Button asChild>
              <Link to="/contact" className="font-display text-base uppercase tracking-wider">
                GET PROTECTED
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-foreground"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-foreground"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-foreground"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-card border-b-4 border-border overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 space-y-6">
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className={`block font-display text-xl uppercase tracking-wider transition-colors ${isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <MatrixText text={link.name} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
