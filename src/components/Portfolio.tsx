import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import { SkillPill } from "./SkillPill";
import { PhotoCard } from "./PhotoCard";
import { projects, skills } from "../data/portfolio";

export default function Portfolio() {
  return (
    <div className="portfolio-shell">
      <section className="hero-section">
   
          <PhotoCard />
    
      </section>

      <SectionTitle
        id="experience"
        title="Experience"
        description="Professional background and technical expertise."
      />
      <section className="experience-section">
        <div className="experience-item">
          <h3>Frontend Engineer, Audemy.org (US)</h3>
          <p className="experience-date">Feb 2025 - Present</p>
          <ul>
            <li>Responsible for developing Accessibility Studio page</li>
            <li>
              Worked on improving app performance, finding issues and fixing
              them
            </li>
            <li>
              Designed and developed a portal to visualize student progress,
              game statistics, and information, with supporting API development
              for seamless data integration
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Internship - Web Developer, Seven Mentors (US)</h3>
          <p className="experience-date">Jun 2024 - Aug 2024</p>
          <ul>
            <li>Responsible for building features for the Homescreen</li>
            <li>
              Developed and designed base components(classes) for the project
              restaurant website
            </li>
            <li>
              Worked on improving app load times and adding smooth animations
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Teaching Assistant, IT 4505 (DU, US)</h3>
          <p className="experience-date">Jan 2024 - Mar 2024</p>
          <ul>
            <li>
              Helped professor in constructing Frontend project problem
              statements
            </li>
            <li>
              Held weekly office hours to address concerns and questions of a
              class of 20 students
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Software Engineer, Tata Consultancy Services</h3>
          <p className="experience-date">Aug 2018 - Mar 2021</p>
          <ul>
            <li>
              Data extraction, aggregation, and reporting processes in a banking
              system to support business insights
            </li>
            <li>
              Monitored and improved page load times using AppDynamics,
              enhancing transaction performance
            </li>
            <li>
              Resolved L2/L3 issues for 30+ HCL Notes applications, ensuring SLA
              adherence, workflow optimization
            </li>
            <li>
              Designed internal portals for transaction cost metrics leveraging
              React.js, HTML, and CSS for responsiveness
            </li>
            <li>
              Secured authentication flows and improved reliability through
              Postman-based testing (50+ cases across 20 APIs) and Logging
            </li>
            <li>
              Handled 24/7 on-call incident management as escalation point,
              minimizing downtime for critical systems
            </li>
          </ul>
        </div>
      </section>

      <SectionTitle
        id="skills"
        title="Skills"
        description="Key frontend strengths and tools."
      />
      <section className="skill-grid">
        {skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </section>

      <SectionTitle
        id="projects"
        title="Featured Projects"
        description="Example work to showcase the frontend portfolio."
      />
      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
