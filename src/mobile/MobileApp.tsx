import headshot from "../assets/images/headshot.png";
import githubIcon from "../assets/icons/socials/github.svg";
import gmailIcon from "../assets/icons/socials/google.svg";
import instagramIcon from "../assets/icons/socials/instagram.svg";
import linkedinIcon from "../assets/icons/socials/linkedin.svg";
import { useState } from "react";
import { toast } from "sonner";
import { Modal } from "../components/neobrutalism";
import { experienceHighlights } from "../pages/Experience/data";
import { educationHistory, snakeAchievements } from "../pages/Education/data";
import {
  skillDetails,
  skillGroups,
  type SkillDetail,
} from "../pages/Skills/data";
import "./MobileApp.css";

type ActiveSkill = SkillDetail & { name: string };

const MobileApp = () => {
  const [activeSkill, setActiveSkill] = useState<ActiveSkill | null>(null);
  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzdrdrol", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        toast.success("Message sent. Thanks for reaching out!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mobile-app">
      <header className="mobile-hero">
        <div className="mobile-hero-header">
          <div>
            <p className="mobile-eyebrow">Hi, I&apos;m</p>
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
        <div className="profile-socials">
          <a href="https://github.com/pbassett1996/" aria-label="GitHub">
            <img src={githubIcon} alt="" className="mini-icon-img" />
          </a>
          <a
            href="https://www.linkedin.com/in/peter-bassett/"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="" className="mini-icon-img" />
          </a>
          <a href="mailto:peterbassett@gmail.com" aria-label="Gmail">
            <img src={gmailIcon} alt="" className="mini-icon-img" />
          </a>
          <a
            href="https://www.instagram.com/petermarkbassett"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="" className="mini-icon-img" />
          </a>
        </div>
      </header>

      <main className="mobile-sections">
        <section className="mobile-section">
          <h2>Experience</h2>
          <div className="mobile-stack">
            {experienceHighlights.map((item) => (
              <article key={item.company + item.title} className="mobile-card">
                <div className="mobile-card-header">
                  <div>
                    <h3>{item.company}</h3>
                    <p className="mobile-subtitle">{item.title}</p>
                  </div>
                  <p className="mobile-meta">{item.timeframe}</p>
                </div>
                <p className="mobile-experience-desc">{item.description}</p>
                
                {item.roles && (
                  <div className="mobile-role-progression">
                    {item.roles.map((role, idx) => (
                      <div key={role.title + idx} className="mobile-role-item">
                        <div className="mobile-role-marker">
                          <span className="mobile-role-dot" />
                          {idx < item.roles!.length - 1 && <span className="mobile-role-line" />}
                        </div>
                        <div className="mobile-role-content">
                          <div className="mobile-role-header">
                            <h4>{role.title}</h4>
                            <span className="mobile-role-time">{role.timeframe}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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

        <section className="mobile-section">
          <h2>Contact</h2>
          <p className="mobile-contact-intro">
            Have a role or project in mind? Send a quick message and I’ll get
            back to you.
          </p>
          <div className="mobile-contact-details">
            <div className="mobile-contact-detail">
              <strong>Location:</strong>
              <p>Broulee, Australia (Open to remote)</p>
            </div>
            <div className="mobile-contact-detail mobile-contact-detail-email">
              <strong>Email:</strong>
              <p>
                <a href="mailto:petermarkbassett@gmai.com">
                  petermarkbassett@gmai.com
                </a>
              </p>
            </div>
            <div className="mobile-contact-detail">
              <strong>Response time:</strong>
              <p>Usually within 1–2 business days</p>
            </div>
          </div>
          <div className="mobile-card">
            <form
              className="mobile-contact-form"
              method="POST"
              onSubmit={handleContactSubmit}
            >
              <label className="mobile-contact-field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="mobile-contact-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                />
              </label>
              <label className="mobile-contact-field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                />
              </label>
              <button type="submit" className="mobile-contact-submit">
                Send message
              </button>
              <p className="mobile-contact-note">
                Form powered by{" "}
                <a href="https://formspree.io" target="_blank" rel="noreferrer">
                  Formspree
                </a>
                .
              </p>
            </form>
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
