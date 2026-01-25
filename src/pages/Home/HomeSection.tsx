import { PageSection } from '../../components/layout/PageLayout'
import downArrow from '../../assets/icons/neobrutalism/Color/Down arrow.svg'
import headshot from '../../assets/images/headshot.png'
import githubIcon from '../../assets/icons/socials/github.svg'
import gmailIcon from '../../assets/icons/socials/google.svg'
import instagramIcon from '../../assets/icons/socials/instagram.svg'
import linkedinIcon from '../../assets/icons/socials/linkedin.svg'
import './HomeSection.css'

const HomeSection = () => {
  return (
    <PageSection id="home">
      <header className="hero">
        <div className="hero-text">
          <h1>
            Peter Bassett
            <span>Senior Embedded Software Engineer</span>
          </h1>
          <p className="lead">
            I design resilient embedded systems with front-end experiences that make complex
            hardware feel intuitive. I specialize in taking products from prototype to
            production by aligning firmware, hardware, and user-facing tooling, and I care
            deeply about reliability, performance, and clear operator experiences. I’m
            looking for remote-only roles where I can build embedded platforms that ship
            with confidence.
          </p>
          <div className="profile-socials">
            <a href="https://github.com/your-handle" aria-label="GitHub">
              <img src={githubIcon} alt="" className="mini-icon-img" />
            </a>
            <a href="https://www.linkedin.com/in/your-handle" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="" className="mini-icon-img" />
            </a>
            <a href="mailto:you@email.com" aria-label="Gmail">
              <img src={gmailIcon} alt="" className="mini-icon-img" />
            </a>
            <a href="https://www.instagram.com/your-handle" aria-label="Instagram">
              <img src={instagramIcon} alt="" className="mini-icon-img" />
            </a>
          </div>
        </div>
        <div className="profile-splatter">
          <div className="profile-photo">
            <img className="profile-image" src={headshot} alt="Peter Bassett" />
          </div>
        </div>
      </header>
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-indicator-text">Scroll for more</span>
        <img src={downArrow} alt="" />
      </div>
    </PageSection>
  )
}

export default HomeSection
