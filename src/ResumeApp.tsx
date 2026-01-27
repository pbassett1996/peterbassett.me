import { useEffect } from "react";
import { experienceHighlights } from "./pages/Experience/data";
import { skillGroups, skillDetails } from "./pages/Skills/data";
import { educationHistory } from "./pages/Education/data";
import headshot from "./assets/images/headshot.png";
import githubIcon from "./assets/icons/socials/github.svg";
import linkedinIcon from "./assets/icons/socials/linkedin.svg";
import gmailIcon from "./assets/icons/socials/google.svg";
import websiteIcon from "./assets/icons/socials/website.svg";
import "./ResumeApp.css";

const ResumeApp = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("autoPrint") === "true") {
      // Small delay to ensure styles and fonts are rendered
      const timer = setTimeout(() => {
        window.print();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="resume-container">
      {/* PAGE 1 */}
      <div className="resume-page">
        <header className="resume-header">
          <div className="header-content">
            <div className="header-text">
              <h1>Peter Bassett</h1>
              <p className="subtitle">Senior Embedded Software Engineer</p>
              <div className="header-links-grid">
                <div className="header-link-item">
                  <img src={websiteIcon} alt="" /> peterbassett.me
                </div>
                <div className="header-link-item">
                  <img src={gmailIcon} alt="" /> peterbassett@gmail.com
                </div>
                <div className="header-link-item">
                  <img src={githubIcon} alt="" /> github.com/pbassett1996
                </div>
                <div className="header-link-item">
                  <img src={linkedinIcon} alt="" /> linkedin.com/in/peter-bassett
                </div>
              </div>
            </div>
            <div className="header-avatar">
              <div className="avatar-splatter">
                <img src={headshot} alt="Peter Bassett" />
              </div>
            </div>
          </div>
          <p className="professional-summary">
            Embedded systems engineer focused on resilient firmware, robotics, and
            front-end tooling that makes complex hardware intuitive. Specialist in take products from prototype to production by aligning firmware, hardware, and user-facing tools.
          </p>
        </header>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-experience">
            {experienceHighlights.map((item) => (
              <div key={item.company + item.title} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3>{item.company}</h3>
                    <p className="experience-role-title">{item.title}</p>
                  </div>
                  <span className="experience-time">{item.timeframe}</span>
                </div>
                <p className="experience-summary-text">{item.description}</p>
                {item.roles && (
                  <div className="nested-roles">
                    {item.roles.map((role) => (
                      <div key={role.title} className="nested-role-item">
                        <div className="role-dot" />
                        <div className="role-details">
                          <span className="role-name">{role.title}</span>
                          <span className="role-period">{role.timeframe}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-education">
            {educationHistory.map((edu) => (
              <div key={edu.degree} className="education-item">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className="education-time">{edu.timeframe}</span>
                </div>
                <p className="education-school">{edu.school}</p>
                <p className="education-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* PAGE 2 */}
      <div className="resume-page">
        <section className="resume-section">
          <h2>Technical Skills & Competency</h2>
          <div className="resume-skills-detailed">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group-detailed">
                <h3>{group.title}</h3>
                <div className="skills-grid-detailed">
                  {group.skills.map((skillName) => {
                    const detail = skillDetails[skillName];
                    return (
                      <div key={skillName} className="skill-detail-card">
                        <div className="skill-detail-header">
                          <span className="skill-name">{skillName}</span>
                          <div className="skill-level-dots">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`level-dot ${detail && i < detail.level ? "filled" : ""}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="print-footer">
          <p>Generated from peterbassett.me</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;
