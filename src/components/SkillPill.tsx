import type { Skill } from '../data/portfolio';

type Props = {
  skill: Skill;
};

export function SkillPill({ skill }: Props) {
  return (
    <article className="skill-pill">
      <div>
        <h3>{skill.name}</h3>
        <span>{skill.level}</span>
      </div>
      <p>{skill.description}</p>
    </article>
  );
}
