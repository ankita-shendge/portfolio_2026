import type { Project } from "../data/portfolio";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.stack.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="secondary-button"
        target="_blank"
        rel="noreferrer"
      >
        View project
      </a>
    </article>
  );
}
