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
        <title>BRUTAL. | Raw Design Power</title>
        <meta name="description" content="A brutalist digital experience - raw design, zero compromises. Breaking conventions with bold, authentic, and impactful work." />
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
