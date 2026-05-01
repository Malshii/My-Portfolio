import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceEducationSection from "./components/ExperienceEducationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden text-white">
      <div className="ambient ambient-cyan" />
      <div className="ambient ambient-violet" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceEducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
