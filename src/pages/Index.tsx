import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SYNTREI | Pre-Transaction Analysis & Security</title>
        <meta name="description" content="A decentralized pre-transaction analysis and monitoring tool designed to eliminate on-chain exploits and threats in the Move ecosystem." />
      </Helmet>

      <MouseFollower />
      <Navigation />

      <main>
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
