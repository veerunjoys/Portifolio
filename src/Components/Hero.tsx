import { useEffect, useState } from 'react'
import { Icon } from '@/Components/Icon'
import { TechBadge } from '@/Components/TechBadge'
import { heroTech, profile } from '@/data/portfolio'

export function Hero() {
  const [isCardOpen, setIsCardOpen] = useState(false)

  useEffect(() => {
    if (!isCardOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsCardOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isCardOpen])

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left reveal">
            <div className="available-pill"><div className="dot-pulse" />Open to opportunities</div>
            <h1 className="hero-name">
              <span className="first">{profile.firstName}</span>
              <span className="last">{profile.lastName}</span>
            </h1>
            <p className="hero-tagline">{profile.role}</p>
            <p className="hero-desc">
              Building <strong>production-grade web apps</strong> with Python, React.js &amp; Java, with a growing focus on <strong> intelligent automation</strong>.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-glow"><Icon name="layers" size={15} />View Projects</a>
              <a href={profile.resumeUrl} className="btn-ghost" download><Icon name="download" size={15} />Resume</a>
              <a href={`mailto:${profile.email}`} className="btn-ghost"><Icon name="send" size={15} />Get In Touch</a>
            </div>
            <div className="hero-socials">
              <a href={`mailto:${profile.email}`} className="social-link" title="Email" aria-label="Send email">
                <Icon name="mail" size={17} />
              </a>
              <a href={profile.phoneHref} className="social-link" title="Phone" aria-label="Call phone number">
                <Icon name="phone" size={17} />
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn" aria-label="Open LinkedIn profile">
                <Icon name="linkedin" size={17} />
              </a>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub" aria-label="Open GitHub profile">
                <Icon name="github" size={17} />
              </a>
            </div>
          </div>

          <div className="hero-right reveal" style={{ transitionDelay: '0.15s' }}>
            <ToyStage isPaused={isCardOpen} onOpenCard={() => setIsCardOpen(true)} />
          </div>
        </div>
      </div>

      <div
        className={`profile-card-overlay ${isCardOpen ? 'open' : ''}`}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsCardOpen(false)
        }}
        aria-hidden={!isCardOpen}
      >
        <div className="profile-card-modal" role="dialog" aria-modal="true" aria-label="Portfolio stats card">
          <button className="profile-card-close" type="button" onClick={() => setIsCardOpen(false)} aria-label="Close card">x</button>
          <PortfolioStatsCard />
        </div>
      </div>
    </section>
  )
}

function ToyStage({ isPaused, onOpenCard }: { isPaused: boolean; onOpenCard: () => void }) {
  return (
    <div className={`toy-stage ${isPaused ? 'is-paused' : ''}`} aria-label="Walking robot card opener">
      <div className="toy-ground-line" />
      <div className="toy-ground-glow" />

      <div className="walking-toy">
        <button className="click-bubble" type="button" onClick={onOpenCard}>
          Click Me
        </button>

        <svg className="toy-svg" viewBox="0 0 52 86" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="toyBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>

          <line x1="26" y1="5" x2="26" y2="14" stroke="#a78bfa" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="26" cy="3.5" r="3.8" fill="#c4b5fd" />
          <circle cx="26" cy="3.5" r="1.6" fill="#fff" opacity="0.6" />
          <rect x="9" y="13" width="34" height="25" rx="9" fill="url(#toyBodyGradient)" stroke="#a78bfa" strokeWidth="0.8" />
          <circle cx="19" cy="23" r="4.5" fill="#0a0a1a" />
          <circle cx="33" cy="23" r="4.5" fill="#0a0a1a" />
          <circle cx="20.5" cy="21.5" r="1.8" fill="#06b6d4" />
          <circle cx="34.5" cy="21.5" r="1.8" fill="#06b6d4" />
          <circle cx="21.2" cy="21" r="0.7" fill="#fff" />
          <circle cx="35.2" cy="21" r="0.7" fill="#fff" />
          <path d="M17 31 Q26 37 35 31" fill="none" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="11" y="40" width="30" height="23" rx="7" fill="url(#toyBodyGradient)" stroke="#a78bfa" strokeWidth="0.8" />
          <rect x="18" y="45" width="16" height="10" rx="3" fill="#0a0a1a" opacity="0.5" />
          <circle cx="26" cy="50" r="4.5" fill="#06b6d4" opacity="0.8" />
          <circle cx="26" cy="50" r="2.2" fill="#fff" opacity="0.55" />
          <rect className="toy-arm-left" x="1" y="40" width="9" height="18" rx="4.5" fill="#6d28d9" stroke="#a78bfa" strokeWidth="0.7" />
          <rect className="toy-arm-right" x="42" y="40" width="9" height="18" rx="4.5" fill="#6d28d9" stroke="#a78bfa" strokeWidth="0.7" />
          <rect className="toy-leg-left" x="13" y="63" width="11" height="20" rx="5.5" fill="#5b21b6" stroke="#a78bfa" strokeWidth="0.7" />
          <rect className="toy-leg-right" x="28" y="63" width="11" height="20" rx="5.5" fill="#5b21b6" stroke="#a78bfa" strokeWidth="0.7" />
          <rect className="toy-foot-left" x="9" y="79" width="17" height="7" rx="3.5" fill="#4c1d95" />
          <rect className="toy-foot-right" x="26" y="79" width="17" height="7" rx="3.5" fill="#4c1d95" />
        </svg>

        <div className="toy-shadow" />
      </div>
    </div>
  )
}

function PortfolioStatsCard() {
  return (
    <div className="hero-3d-wrap" id="card3d-wrap">
      <div className="card-3d" id="card3d">
        <div className="skill-sphere-wrap">
          <div className="skill-sphere">
            <div className="skill-sphere-inner">
              <span>5+</span>
              <small>Stacks</small>
            </div>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat-box"><div className="num">2<em>+</em></div><div className="lbl">Projects</div></div>
          <div className="stat-box"><div className="num">1<em>y</em></div><div className="lbl">Exp.</div></div>
          <div className="stat-box"><div className="num">&infin;</div><div className="lbl">Drive</div></div>
        </div>
        <div className="tech-orbit">
          {heroTech.map((tech) => <TechBadge name={tech} className="tech-chip" key={tech} />)}
        </div>
      </div>
    </div>
  )
}
