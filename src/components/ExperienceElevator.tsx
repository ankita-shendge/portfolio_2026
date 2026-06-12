import { type PointerEvent, useState } from "react";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Audemy.org",
    date: "Feb 2025 - Present",
    floor: "04",
    highlights: [
      "Developed the Accessibility Studio and analytics dashboards for student progress and game performance.",
      "Built responsive Vue.js components and integrated REST APIs for student and educator workflows.",
      "Improved WCAG compliance and performance through code splitting, lazy loading, and component enhancements.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Seven Mentors",
    date: "Jun 2024 - Aug 2024",
    floor: "03",
    highlights: [
      "Developed responsive React components from Figma designs for a restaurant application.",
      "Built reusable UI components and integrated dynamic content using Redux and Context API.",
      "Improved performance, accessibility, and cross-device compatibility through testing and code reviews.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University of Denver",
    date: "Jan 2024 - Mar 2024",
    floor: "02",
    highlights: [
      "Helped construct practical frontend project problem statements.",
      "Led weekly office hours for 20 students covering frontend development and project guidance.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tata Consultancy Services",
    date: "Aug 2018 - Mar 2021",
    floor: "01",
    highlights: [
      "Developed SQL reporting solutions and responsive React portals for banking systems.",
      "Resolved L2/L3 issues across 30+ applications and improved transaction performance with AppDynamics.",
      "Executed 50+ test cases across 20 APIs and supported 24/7 incident response.",
    ],
  },
];

export function ExperienceElevator() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const experience = experiences[activeExperience];

  const selectExperience = (index: number) => {
    setActiveExperience(index);
    setAnimationKey((currentKey) => currentKey + 1);
  };

  const updateTilt = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--career-tilt-x", `${y * -5}deg`);
    event.currentTarget.style.setProperty("--career-tilt-y", `${x * 7}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--career-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--career-tilt-y", "0deg");
  };

  return (
    <section className="experience-elevator" aria-label="Career experience">
      <div className="career-shaft">
        <div className="career-rail" aria-hidden="true">
          <span
            className="career-elevator-car"
            style={{ "--active-floor": activeExperience } as React.CSSProperties}
          />
        </div>

        <div className="career-floors">
          {experiences.map((item, index) => (
            <button
              key={`${item.company}-${item.role}`}
              type="button"
              className={activeExperience === index ? "is-active" : ""}
              onClick={() => selectExperience(index)}
              aria-pressed={activeExperience === index}
            >
              <span>{item.floor}</span>
              <div>
                <strong>{item.role}</strong>
                <small>{item.company}</small>
              </div>
            </button>
          ))}
        </div>
      </div>

      <article
        key={animationKey}
        className="career-detail-card"
        onPointerMove={updateTilt}
        onPointerLeave={resetTilt}
      >
        <div className="career-card-topline">
          <span>Floor {experience.floor}</span>
          <small>{experience.date}</small>
        </div>
        <p>{experience.company}</p>
        <h3>{experience.role}</h3>
        <ul>
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
