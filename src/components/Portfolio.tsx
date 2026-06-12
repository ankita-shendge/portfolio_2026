import { SectionTitle } from "./SectionTitle";
import { DevSkills3D } from "./DevSkills3D";
import { ExperienceElevator } from "./ExperienceElevator";
import { Hero3D } from "./Hero3D";
import { ProjectConstellation } from "./ProjectConstellation";

export default function Portfolio() {
  return (
    <div className="portfolio-shell">
      <section className="hero-section">
        <Hero3D />
      </section>

      <DevSkills3D />

      <SectionTitle
        id="experience"
        title="Experience"
        description="How I have contributed across product development, support, and education."
      />
      <ExperienceElevator />

      <SectionTitle
        id="projects"
        title="Featured Projects"
        description="Selected work across accessibility, responsive web applications, and cross-platform development."
      />
      <ProjectConstellation />
    </div>
  );
}
