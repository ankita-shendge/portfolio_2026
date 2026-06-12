import { type PointerEvent, useState } from "react";
import { projects } from "../data/portfolio";

const projectPositions = [
  "project-node-top-left",
  "project-node-top-right",
  "project-node-bottom-left",
  "project-node-bottom-right",
];

const lineCoordinates = [
  { x: 18, y: 19 },
  { x: 82, y: 19 },
  { x: 18, y: 81 },
  { x: 82, y: 81 },
];

export function ProjectConstellation() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const activeProject = projects[activeProjectIndex];

  const selectProject = (index: number) => {
    setActiveProjectIndex(index);
    setAnimationKey((currentKey) => currentKey + 1);
  };

  const updateTilt = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--project-tilt-x", `${y * -6}deg`);
    event.currentTarget.style.setProperty("--project-tilt-y", `${x * 8}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--project-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--project-tilt-y", "0deg");
  };

  return (
    <section className="project-constellation" aria-label="Featured projects">
      <div className="project-map">
        <svg
          className="project-map-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {lineCoordinates.map((coordinate, index) => (
            <line
              key={`${coordinate.x}-${coordinate.y}`}
              className={activeProjectIndex === index ? "is-active" : ""}
              x1={coordinate.x}
              y1={coordinate.y}
              x2="50"
              y2="50"
            />
          ))}
        </svg>

        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={`project-node ${projectPositions[index]} ${
              activeProjectIndex === index ? "is-active" : ""
            }`}
            onClick={() => selectProject(index)}
            aria-pressed={activeProjectIndex === index}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
            <small>
              {activeProjectIndex === index ? "Currently selected" : "Click to explore"}
            </small>
          </button>
        ))}

        <div className="project-map-center" aria-live="polite">
          <span>Selected project</span>
          <strong>{activeProject.title}</strong>
        </div>
      </div>

      <article
        key={animationKey}
        className="project-focus-card"
        onPointerMove={updateTilt}
        onPointerLeave={resetTilt}
      >
        <div className="project-focus-window">
          <div className="project-window-bar">
            <span />
            <span />
            <span />
            <small>project://{activeProject.id}</small>
          </div>
          <div className="project-focus-content">
            <p>Featured project</p>
            <h3>{activeProject.title}</h3>
            <span>{activeProject.description}</span>
          </div>
        </div>
        <div className="project-focus-tags">
          {activeProject.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {activeProject.link !== "#" && (
          <a
            href={activeProject.link}
            className="primary-button"
            target="_blank"
            rel="noreferrer"
          >
            View project
          </a>
        )}
      </article>
    </section>
  );
}
