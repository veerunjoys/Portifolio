import type { CSSProperties } from 'react'
import { Icon } from '@/Components/Icon'
import { SectionHead } from '@/Components/SectionHead'
import { education } from '@/data/portfolio'

export function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHead num="04" title="Education" />
        <div className="edu-cards">
          {education.map((item) => (
            <div className="edu-item reveal" style={{ transitionDelay: item.delay } as CSSProperties} key={item.degree}>
              <div className="edu-icon"><Icon name={item.icon} size={21} /></div>
              <div className="edu-text">
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-school">{item.school}</div>
              </div>
              <div className="edu-yr">{item.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
