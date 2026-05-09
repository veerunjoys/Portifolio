import type { CSSProperties } from 'react'
import { Icon } from '@/Components/Icon'
import { SectionHead } from '@/Components/SectionHead'
import { TechBadge } from '@/Components/TechBadge'
import { projects } from '@/data/portfolio'

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHead num="03" title="Projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <div className={`proj-card reveal ${project.accent === 'teal' ? 'is-teal' : ''}`} style={{ transitionDelay: project.delay } as CSSProperties} key={project.title}>
              <div className="proj-glow" />
              <div className="proj-num">{project.number}</div>
              <div className="proj-header-row">
                <div className="proj-icon"><Icon name={project.icon} size={20} /></div>
                <div className="proj-meta">
                  <div className="proj-date">{project.date}</div>
                  <div className="proj-title">{project.title}</div>
                </div>
              </div>
              <div className="proj-subtitle">{project.subtitle}</div>
              <div className="proj-desc">{project.description}</div>
              <div className="proj-stack">
                {project.stack.map((item) => <TechBadge name={item} className="proj-tech" key={item} />)}
              </div>
              <div className="proj-actions" aria-label={`${project.title} links`}>
                {project.sourceUrl ? (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="proj-link">Source</a>
                ) : null}
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="proj-link">Live</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
