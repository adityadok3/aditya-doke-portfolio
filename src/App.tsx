import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-[#F8FAFC] overflow-x-hidden selection:bg-[#00E5FF]/30 selection:text-[#00E5FF]">
      {/* Subtle Background Grid & Ambient Lighting */}
      <BackgroundGrid />

      {/* Glassmorphic Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Minimal Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;
