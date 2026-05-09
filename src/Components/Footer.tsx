import { profile } from '@/data/portfolio'

export function Footer() {
  return (
    <footer>
      <p>Crafted with <span>heart</span> by <span>{profile.name}</span> - 2026 - Full Stack Developer</p>
    </footer>
  )
}
