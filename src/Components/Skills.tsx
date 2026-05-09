import type { CSSProperties } from 'react'
import { Icon } from '@/Components/Icon'
import { SectionHead } from '@/Components/SectionHead'
import { TechBadge } from '@/Components/TechBadge'
import { skillGroups } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHead num="01" title="Tech Stack" />
        <div className="skills-bento">
          {skillGroups.map((group) => (
            <div className="skill-tile reveal" style={{ transitionDelay: group.delay } as CSSProperties} key={group.title}>
              <div className="skill-icon-wrap"><Icon name={group.icon} size={22} /></div>
              <div className="skill-tile-title">{group.title}</div>
              <div className="skill-pills">
                {group.skills.map((skill) => <TechBadge name={skill} className="skill-pill" key={skill} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
