import { Icon } from '@/Components/Icon'
import { SectionHead } from '@/Components/SectionHead'

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHead num="02" title="Experience" />
        <div className="exp-timeline">
          <div className="exp-item reveal">
            <div className="exp-dot" />
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-title">Full Stack Developer</div>
                  <div className="exp-company"><Icon name="building" size={13} />Novelski IT Solutions - Hyderabad, Telangana</div>
                </div>
                <span className="exp-badge">July 2025 - Present</span>
              </div>
              <ul className="exp-list">
                <li>Built full-stack features with <strong>Python, FastAPI, Flask</strong>, and <strong>React.js</strong>.</li>
                <li>Designed <strong>REST APIs</strong> with cleaner frontend-backend data contracts.</li>
                <li>Created reusable <strong>React + Tailwind CSS</strong> UI components for responsive screens.</li>
                <li>Implemented <strong>JWT auth, RBAC</strong>, and secure API workflows.</li>
                <li>Optimized <strong>PostgreSQL and MongoDB</strong> queries for faster responses.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
