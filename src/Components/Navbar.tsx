import { Icon } from '@/Components/Icon'
import { profile } from '@/data/portfolio'

export function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo" aria-label="Go to hero section">
        VS<span>.</span>dev
      </a>
      <ul className="nav-menu">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="nav-gh" aria-label="Open GitHub profile">
        <Icon name="github" size={16} />
        GitHub
      </a>
    </nav>
  )
}
