import { useState } from 'react';
import { useFadeIn } from '@/hooks';
import { projects } from '@/data';
import type { Project } from '@/types';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'web', label: 'Web' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'systems', label: 'Systems' },
];

function ProjectCard({ project }: { project: Project }) {
  const { ref, isVisible } = useFadeIn();

  return (
    <article
      ref={ref}
      className={`project card fade-in ${isVisible ? 'in' : ''}`}
    >
      <div className="thumb">{project.shortName}</div>
      <h3 style={{ margin: '0.4rem 0 0' }}>{project.title}</h3>
      <div className="meta">{project.tech}</div>
      <p style={{ color: 'var(--muted)', marginTop: '0.6rem' }}>
        {project.description}
      </p>
      <div className="badges" style={{ marginTop: '0.6rem' }}>
        {project.tags.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>
      <div className="actions" style={{ marginTop: '0.6rem' }}>
        <a className="link-btn" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="link-btn ghost" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          {project.demoLabel || 'Demo'}
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === 'all' || project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="wrap">
      <h2 className="section-title">Projects</h2>

      <div className="filter-bar">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`chip ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
