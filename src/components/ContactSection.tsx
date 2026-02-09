import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    telegramTwitter: "",
    serviceType: "",
    projectDescription: "",
    repoLink: "",
    startDate: "",
    heardAbout: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request sent! We'll get back to you soon.");
    setFormData({
      name: "",
      company: "",
      email: "",
      telegramTwitter: "",
      serviceType: "",
      projectDescription: "",
      repoLink: "",
      startDate: "",
      heardAbout: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen py-20 md:py-32 bg-brutalist-midnight relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-accent font-body text-sm tracking-widest uppercase mb-4 block">
              // Let's Talk Security
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display">
              GET A FREE
              <span className="text-stroke block">QUOTE TODAY</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mt-4">
              Tell us a bit about you and we'll schedule a call. You'll quickly see why we're the right choice to protect your project's reputation so you can ship with confidence.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 md:space-y-8"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative"
              >
                <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Telegram / Twitter
                </label>
                <input
                  type="text"
                  name="telegramTwitter"
                  value={formData.telegramTwitter}
                  onChange={handleChange}
                  className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="@username"
                />
              </motion.div>
            </div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                What kind of service are you looking for and what is the scope? *
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select an option</option>
                <option value="long-term">I'm looking for a long-term engagement with Syntrei's security team.</option>
                <option value="assessment">I need a comprehensive security assessment of my project.</option>
                <option value="review">I need a few contracts or files reviewed.</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                Description of Project *
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Describe your project..."
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                Link to Repositories or Contracts
              </label>
              <input
                type="url"
                name="repoLink"
                value={formData.repoLink}
                onChange={handleChange}
                className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="https://github.com/your-repo"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                Ideal start date / timeline *
              </label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="e.g., ASAP, Next month"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="font-display text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                Where did you hear about us? *
              </label>
              <input
                type="text"
                name="heardAbout"
                value={formData.heardAbout}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-4 border-foreground px-4 py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="e.g., Twitter, Referral"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="brutalist-block w-full md:w-auto px-12 py-4 font-display text-lg uppercase tracking-wider text-foreground bg-primary border-foreground hover:bg-accent hover:text-background transition-colors"
              whileHover={{ scale: 1.02, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Quote
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="grid sm:grid-cols-3 gap-8 mt-16 md:mt-24 pt-12 border-t-4 border-border"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { label: "General", value: "hello@syntrei.io" },
              { label: "Sales", value: "sales@syntrei.io" },
              { label: "Legal", value: "legal@syntrei.io" },
            ].map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <span className="text-muted-foreground font-body text-xs uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <span className="text-foreground font-display text-lg">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative blocks */}
      <motion.div
        className="absolute top-1/4 -left-16 w-32 h-32 border-4 border-primary/30 hidden lg:block"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-8 w-24 h-24 bg-accent/10 hidden lg:block"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};

export default ContactSection;
