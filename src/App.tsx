import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ApproachSection } from './components/ApproachSection';
import { EngagementModelsSection } from './components/EngagementModelsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="relative w-full font-body selection:bg-accentCyan/30 selection:text-white">
      {/* Hero area with dark background */}
      <div className="relative min-h-screen w-full bg-bgDark overflow-hidden">
        <div className="absolute inset-0 z-0 bg-tech-pattern opacity-60 pointer-events-none"></div>
        <Navbar />
        <HeroSection />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Core Services */}
      <ServicesSection />

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Our Approach */}
      <ApproachSection />

      {/* Engagement Models */}
      <EngagementModelsSection />

      {/* Contact Us */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>);

}