import headshot from "../assets/images/headshot.png";
import githubIcon from "../assets/icons/socials/github.svg";
import gmailIcon from "../assets/icons/socials/google.svg";
import instagramIcon from "../assets/icons/socials/instagram.svg";
import linkedinIcon from "../assets/icons/socials/linkedin.svg";
import { useState } from "react";
import { Modal } from "../components/neobrutalism";
import { experienceHighlights } from "../pages/Experience/data";
import { educationHistory, snakeAchievements } from "../pages/Education/data";
import { skillDetails, skillGroups, type SkillDetail } from "../pages/Skills/data";
import "./MobileApp.css";

type ActiveSkill = SkillDetail & { name: string };

const MobileApp = () => {
  const [activeSkill, setActiveSkill] = useState<ActiveSkill | null>(null);

  return (
    <div className="mobile-app">
      <header className="mobile-hero">
        <div className="mobile-hero-header">
          <div>
            <p className="mobile-eyebrow">Hi, I'm</p>
            <h1>
              Peter Bassett
              <span>Senior Embedded Software Engineer</span>
            </h1>
          </div>
          <div className="mobile-avatar">
            <img src={headshot} alt="Peter Bassett" />
          </div>
        </div>
        <p className="mobile-summary">
          Embedded systems engineer focused on resilient firmware, robotics, and
          front-end tooling that makes complex hardware intuitive. Open to
          remote roles across embedded, front-end, and back-end work.
        </p>
        <div className="mobile-socials">
          <a href="https://github.com/pbassett1996/" aria-label="GitHub">
            <img src={githubIcon} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/peter-bassett/"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="mailto:peterbassett@gmail.com" aria-label="Gmail">
            <img src={gmailIcon} alt="" />
          </a>
          <a
            href="https://www.instagram.com/petermarkbassett"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="" />
          </a>
        </div>
      </header>

      <main className="mobile-sections">
        <section className="mobile-section">
          <h2>Experience</h2>
          <div className="mobile-stack">
            {experienceHighlights.map((item) => (
              <article key={item.title} className="mobile-card">
                <p className="mobile-meta">{item.timeframe}</p>
                <h3>{item.title}</h3>
                <p className="mobile-subtitle">{item.company}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section">
          <h2>Skills</h2>
          <p className="mobile-skill-hint">Tap a skill to see more details.</p>
          <div className="mobile-stack">
            {skillGroups.map((group) => (
              <article key={group.title} className="mobile-card">
                <h3>{group.title}</h3>
                <div className="mobile-tags">
                  {group.skills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      className="mobile-tag"
                      onClick={() => {
                        const detail = skillDetails[skill];
                        if (detail) {
                          setActiveSkill({ name: skill, ...detail });
                        }
                      }}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section">
          <h2>Education</h2>
          <div className="mobile-stack">
            {educationHistory.map((item) => (
              <article key={item.degree} className="mobile-card">
                <h3>{item.degree}</h3>
                <p className="mobile-subtitle">{item.school}</p>
                <p className="mobile-meta">{item.timeframe}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section">
          <h2>Highlights</h2>
          <div className="mobile-card">
            <ul className="mobile-list">
              {snakeAchievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Modal
        title={activeSkill?.name ?? ""}
        open={Boolean(activeSkill)}
        onClose={() => setActiveSkill(null)}
      >
        {activeSkill && (
          <div className="mobile-skill-modal">
            <p className="mobile-skill-summary">{activeSkill.summary}</p>
            <div className="mobile-skill-meter">
              <div className="mobile-skill-meter-header">
                <span className="mobile-skill-level">{activeSkill.label}</span>
                <div className="mobile-skill-dots" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={`${activeSkill.name}-dot-${index}`}
                      className={
                        index < activeSkill.level
                          ? "mobile-skill-dot active"
                          : "mobile-skill-dot"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mobile-skill-highlights">
              <h4>Key highlights</h4>
              <ul>
                {activeSkill.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MobileApp;
