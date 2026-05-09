import { Icon } from '@/Components/Icon'
import { profile } from '@/data/portfolio'

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap reveal">
          <h2 className="contact-heading">Let's Build<br /><span className="hl">Something Remarkable</span></h2>
          <p className="contact-sub">Open to full-time roles, freelance projects, and meaningful collaborations.</p>
          <div className="contact-grid">
            <a href={`mailto:${profile.email}`} className="contact-tile" aria-label="Send email">
              <div className="tile-icon"><Icon name="mail" size={26} /></div>
              <span>Email</span>
              <div className="tile-val">{profile.email}</div>
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-tile" aria-label="Open LinkedIn profile">
              <div className="tile-icon"><Icon name="linkedin" size={26} /></div>
              <span>LinkedIn</span>
              <div className="tile-val">veerabrahmam-sangani</div>
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-tile" aria-label="Open GitHub profile">
              <div className="tile-icon"><Icon name="github" size={26} /></div>
              <span>GitHub</span>
              <div className="tile-val">View Portfolio Code</div>
            </a>
            <a href={profile.resumeUrl} className="contact-tile" download aria-label="Download resume">
              <div className="tile-icon"><Icon name="download" size={26} /></div>
              <span>Resume</span>
              <div className="tile-val">Download PDF</div>
            </a>
          </div>
          <a href={profile.phoneHref} className="btn-ghost contact-phone" aria-label="Call phone number">
            <Icon name="phone" size={15} />
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
