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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SYNTREI" />
        <meta property="og:title" content="SYNTREI | Pre-Transaction Analysis & Security" />
        <meta property="og:description" content="A decentralized pre-transaction analysis and monitoring tool designed to eliminate on-chain exploits and threats in the Move ecosystem." />
        <meta property="og:image" content="https://syntrei.io/logo.jpg" />
        <meta property="og:url" content="https://syntrei.io" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@0xjade" />
        <meta name="twitter:title" content="SYNTREI | Pre-Transaction Analysis & Security" />
        <meta name="twitter:description" content="A decentralized pre-transaction analysis and monitoring tool designed to eliminate on-chain exploits and threats in the Move ecosystem." />
        <meta name="twitter:image" content="https://syntrei.io/logo.jpg" />
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
