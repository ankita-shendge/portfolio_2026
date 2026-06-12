import { SectionTitle } from "./SectionTitle";
import { DevSkills3D } from "./DevSkills3D";
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
      <section className="experience-section">
        <div className="experience-item">
          <h3>Frontend Engineer, Audemy.org (US)</h3>
          <p className="experience-date">Feb 2025 - Present</p>
          <ul>
            <li>
              Developed the Accessibility Studio and analytics dashboards to
              improve accessibility management and provide insights into
              student progress and game performance
            </li>
            <li>
              Built responsive Vue.js components and integrated REST APIs to
              support student and educator workflows
            </li>
            <li>
              Improved WCAG compliance and application performance through code
              splitting, lazy loading, and component-level enhancements
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Web Developer Intern, Seven Mentors (US)</h3>
          <p className="experience-date">Jun 2024 - Aug 2024</p>
          <ul>
            <li>
              Developed responsive React components from Figma designs for a
              restaurant web application
            </li>
            <li>
              Built reusable UI components and integrated dynamic content using
              Redux and Context API
            </li>
            <li>
              Improved performance, accessibility, and cross-device
              compatibility while participating in code reviews, testing, and
              Agile sprint ceremonies
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Teaching Assistant, IT 4505 (DU, US)</h3>
          <p className="experience-date">Jan 2024 - Mar 2024</p>
          <ul>
            <li>
              Helped the professor construct frontend project problem
              statements
            </li>
            <li>
              Led weekly office hours, helping a class of 20 students solve
              technical problems and strengthen frontend fundamentals
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Software Engineer, Tata Consultancy Services</h3>
          <p className="experience-date">Aug 2018 - Mar 2021</p>
          <ul>
            <li>
              Developed SQL queries and reporting solutions for data
              extraction, aggregation, and business intelligence in banking
              systems
            </li>
            <li>
              Used AppDynamics to identify bottlenecks and improve page-load and
              transaction performance
            </li>
            <li>
              Resolved L2/L3 issues across 30+ HCL Notes applications while
              meeting SLAs and improving workflows
            </li>
            <li>
              Built responsive React portals that helped teams monitor
              transaction-cost metrics
            </li>
            <li>
              Strengthened authentication and reliability by executing 50+ test
              cases across 20 APIs with Postman
            </li>
            <li>
              Served as an escalation point for 24/7 incident response,
              minimizing disruption to critical systems
            </li>
          </ul>
        </div>
      </section>

      <SectionTitle
        id="projects"
        title="Featured Projects"
        description="Selected work across accessibility, responsive web applications, and cross-platform development."
      />
      <ProjectConstellation />
    </div>
  );
}
