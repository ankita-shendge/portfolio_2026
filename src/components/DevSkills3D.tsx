import { type PointerEvent, useState } from "react";
import { skills } from "../data/portfolio";

export function DevSkills3D() {
  const [activeLayer, setActiveLayer] = useState(0);
  const activeSkill = skills[activeLayer];
  const activeTools = activeSkill.description
    .replace(/\.$/, "")
    .split(/,\s+and\s+|,\s+|\s+and\s+/)
    .filter(Boolean);

  const updateTilt = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--tilt-x", `${y * -10}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 14}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section className="dev-skills-3d" aria-labelledby="dev-skills-3d-title">
      <div className="dev-skills-copy">
        <p className="eyebrow">Interactive architecture</p>
        <h2 id="dev-skills-3d-title"> Technical skills</h2>

        <div className="skill-layer-controls" aria-label="Development layers">
          {skills.map((skill, index) => (
            <button
              key={skill.name}
              type="button"
              className={activeLayer === index ? "is-active" : ""}
              onClick={() => setActiveLayer(index)}
              aria-pressed={activeLayer === index}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill.name}</strong>
              <small>{skill.level}</small>
            </button>
          ))}
        </div>
      </div>

      <div
        className="skill-scene"
        onPointerMove={updateTilt}
        onPointerLeave={resetTilt}
        aria-label={`${activeSkill.name}: ${activeSkill.description}`}
      >
        <div className="skill-scene-glow" />
        <div className="skill-detail-panel" aria-live="polite">
          <div className="skill-detail-heading">
            <span>ANKITA.DEV</span>
            <small>{activeSkill.level}</small>
          </div>
          <h3>{activeSkill.name}</h3>
          <div className="skill-detail-tags">
            {activeTools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
